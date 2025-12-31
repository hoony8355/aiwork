import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = (page: PageView) => 
    `cursor-pointer text-sm font-medium transition-colors hover:text-purple-600 ${
      currentPage === page ? 'text-purple-600 font-bold' : 'text-gray-600'
    }`;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => setCurrentPage(PageView.HOME)}
          >
            <span className="text-2xl font-black text-gray-900 tracking-tighter">
              AI<span className="text-purple-600">WORK</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => setCurrentPage(PageView.HOME)} className={navClass(PageView.HOME)}>
              프로그램 소개
            </button>
            <button onClick={() => setCurrentPage(PageView.PAID)} className={navClass(PageView.PAID)}>
              수강신청 (일반)
            </button>
            <button onClick={() => setCurrentPage(PageView.FREE)} className={navClass(PageView.FREE)}>
              수강신청 (쿠폰소지자)
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button 
              onClick={() => { setCurrentPage(PageView.HOME); setIsMobileMenuOpen(false); }} 
              className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md"
            >
              프로그램 소개
            </button>
            <button 
              onClick={() => { setCurrentPage(PageView.PAID); setIsMobileMenuOpen(false); }} 
              className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md"
            >
              수강신청 (일반)
            </button>
            <button 
              onClick={() => { setCurrentPage(PageView.FREE); setIsMobileMenuOpen(false); }} 
              className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md"
            >
              수강신청 (쿠폰소지자)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;