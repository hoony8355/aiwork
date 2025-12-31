import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
          {/* Company Info */}
          <div>
            <p className="text-lg font-bold text-gray-900 mb-4">언더독스 주식회사</p>
            <div className="space-y-1">
              <p>대표자 : 김정헌</p>
              <p>사업자등록번호 : 693-88-00061</p>
              <p>주소 : 서울특별시 종로구 돈화문로 88-1, 2층</p>
              <p className="mt-4 text-xs text-gray-400">Copyright © Underdogs Co., Ltd. All rights reserved.</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:text-right">
            <p className="text-lg font-bold text-gray-900 mb-4">CONTACT</p>
            <div className="space-y-1">
              <p>
                <span className="inline-block w-20 font-medium">법인 문의</span>
                <span className="text-gray-800">02-6384-3222</span>
              </p>
              <p>
                <span className="inline-block w-20 font-medium">창업 교육</span>
                <span className="text-gray-800">02-3675-6422</span>
              </p>
              <p>
                <span className="inline-block w-20 font-medium">MICE</span>
                <span className="text-gray-800">070-4414-5959</span>
              </p>
              <p className="mt-2">
                <a href="mailto:contact@underdogs.co.kr" className="text-purple-600 hover:underline hover:text-purple-800 transition-colors">
                  contact@underdogs.co.kr
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;