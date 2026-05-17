/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  UserCheck, 
  Briefcase, 
  CalendarDays, 
  X
} from 'lucide-react';

interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  tags: string[];
  available: boolean;
  title?: string;
  content: string;
  image?: string;
  bookingLink?: string;
}

interface MentorsViewProps {
  mentorsData: Mentor[];
  bookingGuidePost: any;
  t: (vi: string, en: string) => string;
}

export const MentorsView: React.FC<MentorsViewProps> = ({ mentorsData, bookingGuidePost, t }) => {
  const [selectedMentor, setSelectedMentor] = useState<any>(null);

  const openMentorModal = (mentor: any) => {
    setSelectedMentor({
      id: mentor.id,
      title: mentor.title || mentor.name,
      content: mentor.content,
      image: mentor.image || mentor.avatar,
      author: mentor.author || mentor.name,
      authorRole: mentor.authorRole || t('Chuyên gia', 'Expert'),
      avatarInitials: mentor.avatar && mentor.avatar.length <= 2 ? mentor.avatar : (mentor.author ? mentor.author.substring(0,2).toUpperCase() : (mentor.name ? mentor.name.substring(0,2).toUpperCase() : 'SS')),
      space: mentor.space || t('Mạng lưới Chuyên gia', 'Mentors Network'),
      time: mentor.time || t('Vừa cập nhật', 'Just updated'),
      bookingLink: mentor.bookingLink,
      available: mentor.available !== false
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 w-full relative">
      <div className="flex items-center space-x-2 mb-6">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
           <UserCheck className="text-blue-600 w-7 h-7" /> {t('Mạng lưới Chuyên gia', 'Mentors Network')}
        </h1>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-8 relative overflow-hidden border border-blue-100 shadow-sm flex flex-col md:flex-row items-center">
        <div className="relative z-10 flex-1">
          <span className="px-3 py-1.5 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg mb-4 inline-block shadow-sm">
            Mentoring 1-on-1
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
            {t('Kết nối cùng những', 'Connect with')} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t('Người dẫn đường', 'The Guiding Experts')}</span> {t('xuất sắc', 'excellence')}
          </h2>
          <p className="text-slate-600 font-medium max-w-lg mb-6 leading-relaxed">
            {t('Mạng lưới Mentor tại SoloStartup luôn sẵn sàng lắng nghe, tháo gỡ vướng mắc cho dự án của bạn.', 'Mentors network at SoloStartup is ready to listen and solve problems for your project.')}
          </p>
          <button 
            onClick={() => openMentorModal(bookingGuidePost)}
            className="bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-md"
          >
            {t('Xem Hướng dẫn Đặt lịch', 'View Booking Guide')}
          </button>
        </div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentorsData.map(mentor => (
          <div key={mentor.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col hover:shadow-xl transition-all duration-300 group">
            <div className="h-32 w-full bg-slate-100 relative cursor-pointer" onClick={() => openMentorModal(mentor)}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60 z-10"></div>
              <img src={mentor.avatar} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="mentor"/>
              <div className="absolute top-3 right-3 z-20">
                {mentor.available ? (
                  <span className="px-2 py-1 bg-emerald-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase rounded-md flex items-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> {t('Nhận đặt lịch', 'Available')}
                  </span>
                ) : (
                  <span className="px-2 py-1 bg-slate-800/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase rounded-md">
                    {t('Đang bận', 'Busy')}
                  </span>
                )}
              </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col bg-white relative">
              <h3 
                className="font-bold text-slate-900 text-lg mb-1 cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => openMentorModal(mentor)}
              >
                {mentor.name}
              </h3>
              <p className="text-sm font-medium text-slate-600 mb-1 flex items-center gap-1.5">
                <Briefcase size={14} className="text-slate-400" /> {mentor.role}
              </p>
              <p className="text-xs text-slate-500 mb-4">{mentor.company}</p>
              
              <div className="flex flex-wrap gap-1.5 mb-6">
                {mentor.tags && mentor.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-4 border-t border-slate-100">
                {mentor.available ? (
                  <a 
                    href={mentor.bookingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white transition-colors"
                  >
                    <CalendarDays size={16} />
                    <span>{t('Đặt lịch ngay', 'Book now')}</span>
                  </a>
                ) : (
                  <button 
                    disabled
                    className="w-full py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 bg-slate-50 text-slate-400 cursor-not-allowed"
                  >
                    <CalendarDays size={16} />
                    <span>{t('Kín lịch', 'Fully booked')}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMentor && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedMentor(null)}>
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
             <div className="flex items-center justify-between p-4 px-6 border-b border-slate-100 bg-white shrink-0">
               <h2 className="text-lg font-bold text-slate-900 truncate pr-4">{selectedMentor.title}</h2>
               <button className="text-slate-400 hover:text-red-500 transition-colors" onClick={() => setSelectedMentor(null)}><X size={22}/></button>
             </div>
             <div className="flex-1 overflow-y-auto bg-white flex flex-col">
                <div className="w-full bg-slate-100 relative h-64 md:h-80 border-b border-slate-100 shrink-0">
                   <img src={selectedMentor.image} alt={selectedMentor.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-10 flex-1">
                   <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {selectedMentor.avatarInitials}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-900 text-base">{selectedMentor.author}</span>
                          <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded uppercase">{selectedMentor.authorRole}</span>
                        </div>
                        <div className="text-sm text-slate-500 mt-0.5 font-medium">{t('Đăng trong', 'Posted in')} <span className="font-semibold text-slate-700">{selectedMentor.space}</span> • {selectedMentor.time}</div>
                      </div>
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900 mb-6">{selectedMentor.title}</h2>
                   <div className="prose max-w-none text-slate-700 space-y-4 text-[15px] md:text-[16px] leading-relaxed whitespace-pre-line">
                     {selectedMentor.content}
                   </div>

                   {selectedMentor.bookingLink && selectedMentor.available !== false && (
                      <div className="mt-10 pt-8 border-t border-slate-100 text-center md:text-left">
                        <a href={selectedMentor.bookingLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg w-full md:w-auto">
                          <CalendarDays size={20} />
                          <span>{t('Điền Form Đặt Lịch Ngay', 'Book Appointment Now')}</span>
                        </a>
                        <p className="text-xs text-slate-400 mt-4 md:mt-3 font-medium">
                          {t('Bạn sẽ được chuyển hướng sang biểu mẫu đặt lịch an toàn của Google Forms.', 'You will be redirected to a secure Google Forms booking form.')}
                        </p>
                      </div>
                   )}
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};
