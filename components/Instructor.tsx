import React from 'react';
import { MAIN_INSTRUCTOR } from '../constants';

const Instructor: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-200 rounded-full blur-2xl opacity-50 transform translate-y-4"></div>
              <img 
                src={MAIN_INSTRUCTOR.image} 
                alt={MAIN_INSTRUCTOR.name} 
                className="relative w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold mb-4">
              총괄 디렉터
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-2">{MAIN_INSTRUCTOR.name} <span className="text-xl font-medium text-gray-500 ml-2">{MAIN_INSTRUCTOR.title}</span></h2>
            <div className="w-12 h-1 bg-purple-600 mx-auto md:mx-0 mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
              {MAIN_INSTRUCTOR.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;