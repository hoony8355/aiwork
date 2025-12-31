import React, { useState } from 'react';
import { BANK_INFO, COURSE_PRICE, COUPON_CODE } from '../constants';
import { submitRegistration } from '../services/firebase';
import { Check, Loader2 } from 'lucide-react';
import { CustomerType } from '../types';

interface RegistrationFormProps {
  type: 'paid' | 'free';
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ type }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    department: '',
    jobTitle: '',
    customerType: '기관' as CustomerType,
    coupon: '',
  });
  const [status, setStatus] = useState<'idle' | 'coupon_check' | 'submitting' | 'success' | 'error'>('idle');
  const [isCouponValid, setIsCouponValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const verifyCoupon = () => {
    if (formData.coupon.toLowerCase() === COUPON_CODE) {
      setIsCouponValid(true);
      setStatus('idle');
    } else {
      alert("유효하지 않은 쿠폰 코드입니다.");
      setIsCouponValid(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (type === 'free' && !isCouponValid) {
      alert("쿠폰 인증을 먼저 진행해주세요.");
      return;
    }

    setStatus('submitting');
    
    const success = await submitRegistration({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization,
      customerType: formData.customerType,
      department: formData.department,
      jobTitle: formData.jobTitle,
      courseType: type,
      appliedAt: new Date().toISOString(),
    });

    if (success) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} strokeWidth={3} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">신청이 완료되었습니다!</h3>
        <p className="text-gray-600 mb-8">
          입력하신 정보가 안전하게 접수되었습니다.<br/>
          안내 문자가 발송될 예정입니다.
        </p>
        
        {type === 'paid' && (
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 max-w-md mx-auto">
            <p className="text-sm text-gray-500 mb-2">아래 계좌로 수강료를 입금해주세요</p>
            <p className="text-xl font-bold text-purple-700 mb-1">{BANK_INFO.bank} {BANK_INFO.account}</p>
            <p className="text-gray-700">예금주: {BANK_INFO.holder}</p>
            <p className="text-gray-700 mt-2 font-medium">금액: {COURSE_PRICE.toLocaleString()}원</p>
            <p className="text-xs text-gray-400 mt-4">* 입금자명과 신청자명이 일치해야 확인이 가능합니다.</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-800">
          {type === 'paid' ? '수강 신청서 작성' : '초대권 등록 및 신청'}
        </h3>
      </div>
      
      <div className="p-6 md:p-8">
        {type === 'free' && !isCouponValid && (
          <div className="mb-8 p-6 bg-purple-50 rounded-lg border border-purple-100">
            <label className="block text-sm font-bold text-purple-900 mb-2">쿠폰 코드 입력</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="coupon"
                value={formData.coupon}
                onChange={handleInputChange}
                className="flex-1 px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="코드를 입력하세요"
              />
              <button
                type="button"
                onClick={verifyCoupon}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                인증하기
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className={`space-y-6 ${type === 'free' && !isCouponValid ? 'opacity-50 pointer-events-none filter blur-[1px]' : ''}`}>
          
          {/* 고객사 정보 섹션 */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">소속 정보</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">고객사명 (단체/기관명)</label>
                <input
                  required
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="OOO 지원단"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">고객 유형</label>
                <select
                  required
                  name="customerType"
                  value={formData.customerType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                >
                  <option value="기관">기관</option>
                  <option value="기업">기업</option>
                  <option value="재단">재단</option>
                  <option value="학교">학교</option>
                  <option value="정부/지자체">정부/지자체</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">부서</label>
                <input
                  required
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="기획팀"
                />
              </div>
            </div>
          </div>

          {/* 담당자 정보 섹션 */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">담당자 정보</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">담당자명</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">직책</label>
                <input
                  required
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="매니저 / 팀장"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="010-1234-5678"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="example@email.com"
                />
              </div>
            </div>
          </div>

          {type === 'paid' && (
            <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
              <p>• 수강료: <strong>{COURSE_PRICE.toLocaleString()}원</strong></p>
              <p>• 결제 방식: 무통장 입금 (신청 완료 후 계좌번호가 표시됩니다)</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-gray-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="animate-spin" /> 처리중...
              </>
            ) : (
              '신청하기'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;