/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User, Mail, Globe, MapPin, Calendar, Award, Rocket, TrendingUp } from 'lucide-react';

interface ProfileViewProps {
  t: (vi: string, en: string) => string;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ t }) => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 w-full">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="h-48 bg-gradient-to-r from-emerald-400 to-teal-500 relative">
          <div className="absolute -bottom-16 left-8">
            <div className="w-32 h-32 rounded-3xl bg-pink-400 border-4 border-white flex items-center justify-center text-white text-5xl font-bold shadow-lg">
              {t('Y', 'Y')}
            </div>
          </div>
        </div>
        
        <div className="pt-20 px-8 pb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-900">{t('Học viên Solo', 'Solo Student')}</h1>
              <p className="text-slate-500 font-medium flex items-center gap-2 mt-1">
                <Mail size={16} /> hocvien@solostartup.vn
              </p>
            </div>
            <button className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-md">
              {t('Chỉnh sửa hồ sơ', 'Edit Profile')}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 text-emerald-600 mb-2">
                < Award size={20} />
                <span className="font-bold text-sm uppercase tracking-wider">{t('Điểm tích lũy', 'Points')}</span>
              </div>
              <p className="text-3xl font-black text-slate-900">300</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 text-blue-600 mb-2">
                <Rocket size={20} />
                <span className="font-bold text-sm uppercase tracking-wider">{t('Dự án', 'Projects')}</span>
              </div>
              <p className="text-3xl font-black text-slate-900">1</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 text-purple-600 mb-2">
                <TrendingUp size={20} />
                <span className="font-bold text-sm uppercase tracking-wider">{t('Thứ hạng', 'Rank')}</span>
              </div>
              <p className="text-3xl font-black text-slate-900">#7</p>
            </div>
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-4">{t('Thông tin cá nhân', 'Personal Information')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin size={18} className="text-slate-400" />
                  <span>Đà Nẵng, Việt Nam</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Globe size={18} className="text-slate-400" />
                  <span>solostartup.vn</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Calendar size={18} className="text-slate-400" />
                  <span>{t('Tham gia từ tháng 05/2026', 'Joined May 2026')}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-4">{t('Dự án đang triển khai', 'Active Projects')}</h3>
              <div className="p-4 border border-slate-200 rounded-2xl flex items-center justify-between hover:border-emerald-500 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold">
                    EB
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">EcoBite</p>
                    <p className="text-xs text-slate-500">Nền tảng phân phối thực phẩm xanh</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full uppercase">Seed Stage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
