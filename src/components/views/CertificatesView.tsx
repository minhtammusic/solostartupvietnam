/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, CheckCircle2, Lock, Download } from 'lucide-react';

interface CertificatesViewProps {
  t: (vi: string, en: string) => string;
  onShowToast: (msg: string) => void;
}

export const CertificatesView: React.FC<CertificatesViewProps> = ({ t, onShowToast }) => {
  const certificates = [
    {
      id: 1,
      title: t('Tư duy Khởi nghiệp Tinh gọn', 'Lean Startup Mindset'),
      issuer: 'SoloStartup Vietnam',
      date: '15/05/2026',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: t('Xác thực Mô hình Kinh doanh', 'Business Model Validation'),
      issuer: 'SoloStartup Vietnam',
      date: t('Đang học', 'In Progress'),
      status: 'locked',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 w-full">
      <div className="flex items-center space-x-2 mb-6">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
           <Award className="text-amber-500 w-7 h-7" /> {t('Chứng chỉ của tôi', 'My Certificates')}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map(cert => (
          <div key={cert.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col group transition-all hover:shadow-md">
            <div className="h-40 bg-slate-100 relative overflow-hidden">
               <img src={cert.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" alt="cert" />
               <div className="absolute inset-0 bg-slate-900/10"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  {cert.status === 'completed' ? (
                    <CheckCircle2 size={48} className="text-emerald-500 bg-white rounded-full p-2" />
                  ) : (
                    <Lock size={48} className="text-slate-400 bg-white/80 rounded-full p-2" />
                  )}
               </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-lg text-slate-900 mb-1">{cert.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{cert.issuer}</p>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">{t('Cấp ngày:', 'Issued:')} {cert.date}</span>
                {cert.status === 'completed' ? (
                  <button 
                    onClick={() => onShowToast(t('Đang chuẩn bị file tải về...', 'Preparing download...'))}
                    className="flex items-center gap-2 text-emerald-600 font-bold text-sm hover:underline"
                  >
                    <Download size={16} /> {t('Tải về', 'Download')}
                  </button>
                ) : (
                  <span className="text-slate-400 text-sm italic">{t('Cần hoàn thành khóa học', 'Complete course to unlock')}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
