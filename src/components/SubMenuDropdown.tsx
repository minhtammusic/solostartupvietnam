/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, Link2 } from 'lucide-react';

interface MenuItem {
  label: string;
  link?: string;
}

interface SubMenuDropdownProps {
  title: string;
  items: MenuItem[];
}

export const SubMenuDropdown: React.FC<SubMenuDropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`flex items-center space-x-1.5 px-4 py-2 text-[12px] font-bold uppercase tracking-wider rounded-lg transition-colors ${isOpen ? 'text-slate-900 bg-slate-100' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
      >
        <span>{title}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-[90]" onClick={() => setIsOpen(false)}></div>
          <div className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
            {items.map((item, idx) => (
              <a 
                key={idx} 
                href={item.link || '#'} 
                target={item.link ? '_blank' : '_self'} 
                rel="noreferrer" 
                className="w-full flex items-center space-x-3 px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors text-left" 
                onClick={() => setIsOpen(false)}
              >
                <span className="text-slate-400 shrink-0"><Link2 size={16} /></span>
                <span className="truncate font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
