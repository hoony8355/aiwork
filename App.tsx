import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Curriculum from './components/Curriculum';
import Instructor from './components/Instructor';
import RegistrationForm from './components/RegistrationForm';
import { PageView } from './types';
import { COURSE_PRICE } from './constants';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);

  // Helper to scroll to top when page changes
  const setPage = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header currentPage={currentPage} setCurrentPage={setPage} />

      <main className="flex-grow pt-20">
        {/* HERO SECTION - Always visible or customized per page */}
        <section className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8 pt-20">
              <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-4">
                    비영리/공공기관/창업지원단 전용
                  </span>
                  <h1 className="text-4xl tracking-tight font-black text-gray-900 sm:text-5xl md:text-6xl mb-6">
                    <span className="block xl:inline">AI로 야근을</span>{' '}
                    <span className="block text-purple-600 xl:inline">없애드립니다</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    모객부터 창업자 관리, 성과 추적까지. <br/>
                    매뉴얼화된 AI 프롬프트 템플릿으로 실무 시간을 90% 단축하세요.
                  </p>
                  
                  {currentPage === PageView.HOME && (
                    <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                      <button 
                        onClick={() => setPage(PageView.PAID)}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-purple-200"
                      >
                        수강신청 하러가기
                      </button>
                      <button 
                         onClick={() => setPage(PageView.FREE)}
                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all"
                      >
                        초대권 등록하기
                      </button>
                    </div>
                  )}
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 flex items-center justify-center">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Team working with AI"
            />
            <div className="absolute inset-0 bg-purple-900 mix-blend-multiply opacity-20"></div>
          </div>
        </section>

        {/* Content based on Page View */}
        {currentPage === PageView.HOME && (
          <>
            {/* Value Props */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">실무 중심 매뉴얼</h3>
                    <p className="text-gray-600">이론은 짧게, 실습은 길게. 당장 내일 업무에 쓸 수 있는 구체적인 매뉴얼을 제공합니다.</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                      <CheckCircle size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">검증된 프롬프트</h3>
                    <p className="text-gray-600">수십 번의 테스트를 거쳐 최적화된 업무용 프롬프트 템플릿 50종을 공유합니다.</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                      <ArrowRight size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">즉각적인 성과</h3>
                    <p className="text-gray-600">모객률 증가, 업무 시간 단축 등 정량적인 지표로 변화를 경험할 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </section>

            <Curriculum />
            <Instructor />
            
            {/* CTA Section */}
            <section className="py-20 bg-purple-900 text-white">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-black mb-8">
                  더 이상 야근하지 마세요.<br/>
                  AI에게 맡기고, 가치 있는 일에 집중하세요.
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => setPage(PageView.PAID)}
                    className="px-8 py-4 bg-white text-purple-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                  >
                    3만원으로 시작하기
                  </button>
                  <button 
                    onClick={() => setPage(PageView.FREE)}
                    className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors"
                  >
                    초대권이 있으신가요?
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === PageView.PAID && (
          <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="mb-10">
              <span className="text-purple-600 font-bold">일반 신청</span>
              <h2 className="text-3xl font-black text-gray-900 mt-2">AI 업무 혁신 과정 (4주)</h2>
              <p className="text-gray-600 mt-4">
                단돈 {COURSE_PRICE.toLocaleString()}원으로 평생 쓰는 AI 업무 스킬을 마스터하세요.<br/>
                신청서를 작성하시면 입금 안내 계좌가 나타납니다.
              </p>
            </div>
            <RegistrationForm type="paid" />
          </div>
        )}

        {currentPage === PageView.FREE && (
          <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="mb-10">
              <span className="text-green-600 font-bold">초대권 소지자 전용</span>
              <h2 className="text-3xl font-black text-gray-900 mt-2">VIP 무료 등록</h2>
              <p className="text-gray-600 mt-4">
                전달받으신 쿠폰 코드를 입력하여 무료로 등록하세요.<br/>
                모든 커리큘럼과 자료가 동일하게 제공됩니다.
              </p>
            </div>
            <RegistrationForm type="free" />
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default App;