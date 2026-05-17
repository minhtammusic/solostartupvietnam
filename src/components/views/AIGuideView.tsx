/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Bot, Sparkles, MessageSquare, Terminal, Zap, Star } from 'lucide-react';

interface AIGuideViewProps {
  isMasterclass: boolean;
  onShowToast: (msg: string) => void;
  t: (vi: string, en: string) => string;
}

export const AIGuideView: React.FC<AIGuideViewProps> = ({ isMasterclass, onShowToast, t }) => {
  const tools = [
    { name: 'Gemini', desc: t('Luyện tập Pitching 24/7', 'Pitching practice 24/7'), icon: <Sparkles className="text-purple-500" /> },
    { name: 'Cursor', desc: t('Xây dựng MVP không cần code', 'Build MVP without code'), icon: <Terminal className="text-slate-700" /> },
    { name: 'Perplexity', desc: t('Nghiên cứu thị trường dữ liệu thực', 'Real data market research'), icon: <Zap className="text-emerald-500" /> }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 w-full">
      <div className="flex items-center space-x-2 mb-6">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
           <Bot className="text-purple-600 w-7 h-7" /> 
           {isMasterclass ? t('Thực hành AI Đầu tư', 'AI Investor Practice') : t('Thực hành cùng AI', 'AI Practice')}
        </h1>
      </div>

      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl mb-10">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-black mb-4 leading-tight">
            {t('AI là Co-founder đỉnh nhất của bạn!', 'AI is your best Co-founder!')}
          </h2>
          <p className="text-purple-100 text-lg mb-8 font-medium">
            {t('Đừng làm việc cật lực, hãy làm việc thông minh. Dùng AI để x10 tốc độ thực thi dự án.', 'Don\'t just work hard, work smart. Use AI to x10 your execution speed.')}
          </p>
          <button 
            onClick={() => onShowToast(t('BOT đang khởi động...', 'BOT is starting...'))}
            className="px-8 py-4 bg-white text-purple-700 font-black rounded-2xl hover:bg-purple-50 transition-all flex items-center gap-3 shadow-lg"
          >
            <MessageSquare size={20} /> {t('Bắt đầu Chat với AI Mentor', 'Start Chatting with AI Mentor')}
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map(tool => (
          <div key={tool.name} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-purple-300 transition-colors shadow-sm">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 text-2xl">
              {tool.icon}
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-1">{tool.name}</h3>
            <p className="text-sm text-slate-500">{tool.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
         <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
               <Star className="text-amber-500 fill-current w-5 h-5" />
               {t('Thư viện Prompt mẫu (Master)', 'Master Prompt Library')}
            </h3>
            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">{t('Độc quyền', 'Exclusive')}</span>
         </div>
         <div className="p-8 space-y-4">
            {[
              t('Prompt: Luyện tập Pitching 10 slide', 'Prompt: Practice 10-slide Pitching'),
              t('Prompt: Xác thực BMC (Business Model Canvas)', 'Prompt: Validate BMC'),
              t('Prompt: Viết content Go-to-market viral', 'Prompt: Writing viral GTM content')
            ].map(prompt => (
              <div key={prompt} className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between group hover:bg-slate-100 transition-colors cursor-pointer">
                <span className="font-medium text-slate-700">{prompt}</span>
                <button className="text-purple-600 font-bold text-sm bg-white px-3 py-1.5 rounded-lg border border-purple-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('Copy', 'Copy')}
                </button>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};
