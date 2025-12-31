import React from 'react';
import { LECTURES } from '../constants';
import { Calendar, Clock, MessageSquare, User, Code2, CheckCircle2, AlertCircle } from 'lucide-react';

const Curriculum: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">Curriculum</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-3 mb-6">
            실무에 바로 쓰는<br className="md:hidden" /> 4주 완성 로드맵
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            이론만 늘어놓는 강의가 아닙니다.<br/>
            당장 내일 출근해서 야근을 줄여줄 구체적인 해결책을 가져가세요.
          </p>
        </div>

        <div className="space-y-16">
          {LECTURES.map((lecture) => (
            <div key={lecture.id} className="group relative bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-purple-200 transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-600 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col xl:flex-row">
                {/* Content Section */}
                <div className="flex-1 p-8 md:p-10 lg:p-12">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                      Week {lecture.id}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm font-medium gap-4">
                      <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-md"><Calendar size={16}/> {lecture.date}</span>
                      <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-md"><Clock size={16}/> {lecture.time}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                    {lecture.title}
                  </h3>
                  <p className="text-lg text-purple-700 font-bold mb-6">
                    {lecture.subTitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {lecture.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                      <div className="flex items-center gap-2 mb-4 text-red-700 font-bold">
                        <AlertCircle size={20} />
                        <span>이런 고민이 있다면?</span>
                      </div>
                      <ul className="space-y-3">
                        {lecture.painPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                            <span className="text-red-400 mt-1">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                      <div className="flex items-center gap-2 mb-4 text-blue-700 font-bold">
                        <CheckCircle2 size={20} />
                        <span>이렇게 해결해 드려요</span>
                      </div>
                      <ul className="space-y-3">
                        {lecture.takeaways.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                            <span className="text-blue-500 font-bold">V</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Instructor Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <img 
                      src={lecture.instructor.image} 
                      alt={lecture.instructor.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" 
                    />
                    <div>
                      <p className="text-base font-bold text-gray-900">{lecture.instructor.name} <span className="text-gray-400 font-normal">|</span> <span className="text-purple-600">{lecture.instructor.title}</span></p>
                      <p className="text-sm text-gray-500 line-clamp-1">{lecture.instructor.bio}</p>
                    </div>
                  </div>
                </div>

                {/* Prompt Preview Section (Right Side on XL screens) */}
                <div className="xl:w-[480px] bg-[#1e1e1e] border-l border-gray-800 flex flex-col">
                  <div className="flex items-center justify-between px-6 py-4 bg-[#252526] border-b border-black">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                      <Code2 size={14} className="text-blue-400"/>
                      <span>lecture_{lecture.id}_prompt.json</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6 font-mono text-sm overflow-x-auto relative group-hover:bg-[#1e1e1e] transition-colors">
                    <div className="absolute top-6 right-6 opacity-10">
                      <MessageSquare size={60} className="text-white"/>
                    </div>
                    <pre className="text-[#d4d4d4] leading-relaxed">
                      <code>
                        {JSON.stringify(lecture.promptExample, null, 2)
                          .split('\n')
                          .map((line, i) => (
                            <div key={i} className="flex">
                              <span className="text-[#6e7681] select-none mr-4 w-6 text-right flex-shrink-0">{i + 1}</span>
                              <span className="whitespace-pre-wrap break-all" dangerouslySetInnerHTML={{
                                __html: line
                                  .replace(/"([^"]+)":/g, '<span class="text-[#9cdcfe] font-semibold">"$1"</span>:') // Keys
                                  .replace(/: "([^"]+)"/g, ': <span class="text-[#ce9178]">"$1"</span>') // String Values
                                  .replace(/: \[/g, ': <span class="text-[#ffd700]">[</span>') // Array start
                                  .replace(/\]/g, '<span class="text-[#ffd700]">]</span>') // Array end
                                  .replace(/{/g, '<span class="text-[#da70d6]">{</span>') // Object start
                                  .replace(/}/g, '<span class="text-[#da70d6]">}</span>') // Object end
                              }}></span>
                            </div>
                          ))}
                      </code>
                    </pre>
                  </div>
                  
                  <div className="bg-[#2d2d2d] px-6 py-3 text-xs text-gray-400 border-t border-black flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Verified Prompt
                    </span>
                    <span>JSON • UTF-8</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;