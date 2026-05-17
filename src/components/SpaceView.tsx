/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  MessageSquare, 
  Bookmark, 
  X
} from 'lucide-react';
import { SubMenuDropdown } from './SubMenuDropdown';
import { InteractivePostCard } from './InteractivePostCard';
import { formatTimeAgo } from '../lib/utils';

interface SpaceViewProps {
  id: string;
  pageIcon: string;
  pageTitle: string;
  bannerTitle: any;
  heroTitle: string;
  heroContentShort: any;
  heroContentFull: any;
  gridPosts: any[];
  onShowToast: (msg: string) => void;
  subMenus: any[];
  lang: string;
  t: (vi: string, en: string) => string;
}

export const SpaceView: React.FC<SpaceViewProps> = ({ 
  id, 
  pageIcon, 
  pageTitle, 
  bannerTitle, 
  heroTitle, 
  heroContentShort, 
  heroContentFull, 
  gridPosts, 
  onShowToast, 
  subMenus, 
  lang, 
  t 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem(`v2_${id}_likes`);
    return saved !== null ? parseInt(saved, 10) : 0;
  });
  const [isLiked, setIsLiked] = useState(() => localStorage.getItem(`v2_${id}_isLiked`) === 'true');
  const [commentsList, setCommentsList] = useState<any[]>(() => {
    const saved = localStorage.getItem(`v2_${id}_comments`);
    return saved !== null ? JSON.parse(saved) : [];
  });
  const [isBookmarked, setIsBookmarked] = useState(() => localStorage.getItem(`v2_${id}_isBookmarked`) === 'true');
  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => { localStorage.setItem(`v2_${id}_likes`, likes.toString()); }, [likes, id]);
  useEffect(() => { localStorage.setItem(`v2_${id}_isLiked`, isLiked.toString()); }, [isLiked, id]);
  useEffect(() => { localStorage.setItem(`v2_${id}_comments`, JSON.stringify(commentsList)); }, [commentsList, id]);
  useEffect(() => { localStorage.setItem(`v2_${id}_isBookmarked`, isBookmarked.toString()); }, [isBookmarked, id]);

  const handleLike = () => {
    if (isLiked) { setLikes(p => p - 1); setIsLiked(false); } 
    else { setLikes(p => p + 1); setIsLiked(true); }
  };

  const handleAddComment = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newCommentText.trim() !== '') {
      const newComment = { id: Date.now(), author: t('Học viên Solo', 'Solo Student'), time: formatTimeAgo(Date.now(), undefined, lang), timestamp: Date.now(), role: t('Thành viên', 'Member'), content: newCommentText.trim() };
      setCommentsList([...commentsList, newComment]);
      setNewCommentText('');
    }
  };

  const toggleBookmark = () => {
    const newValue = !isBookmarked;
    setIsBookmarked(newValue);
    if (onShowToast) onShowToast(newValue ? t('Đã lưu', 'Saved') : t('Đã bỏ lưu', 'Removed'));
  };

  const renderHeroPostContent = (isFS: boolean) => (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-8 relative overflow-hidden flex flex-col items-center justify-center border-b border-purple-100">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 font-extrabold text-xl md:text-2xl mb-4 tracking-wide relative z-10 uppercase drop-shadow-sm text-center">
          SoloStartup Vietnam Academy
        </p>
        <div className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center max-w-3xl leading-tight relative z-10">
          {bannerTitle}
        </div>
      </div>

      <div className="p-6 md:p-10 max-w-3xl mx-auto w-full">
         {isFS && (
           <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-slate-900 max-w-xl">{heroTitle}</h2>
              <div className="flex items-center space-x-4 text-slate-400">
                <button className={`hover:text-slate-800 transition-colors ${isBookmarked ? 'text-slate-800' : ''}`} title={t('Lưu bài', 'Bookmark')} onClick={toggleBookmark}>
                  <Bookmark size={18} className={isBookmarked ? "fill-current" : ""} />
                </button>
              </div>
           </div>
         )}

         <div className="prose max-w-none text-slate-700 space-y-5 text-[15px] whitespace-pre-line leading-relaxed">
            {isFS ? heroContentFull : heroContentShort}
            {!isFS && (
              <button onClick={() => setIsModalOpen(true)} className="text-slate-500 hover:text-slate-800 font-medium text-sm mt-2 transition-colors focus:outline-none block">
                {t('Xem thêm', 'Read more')}
              </button>
            )}
         </div>

         <div className="flex items-center justify-between border-b border-slate-100 mt-10 pb-6 mb-6">
            <div className="flex items-center space-x-4">
              <button onClick={handleLike} className={`transition-colors ${isLiked ? 'text-pink-500' : 'text-slate-400 hover:text-pink-500'}`}>
                <Heart size={22} className={isLiked ? 'fill-current' : ''} />
              </button>
              <button className="text-slate-400 hover:text-green-600 transition-colors" onClick={() => {if(!isFS) setIsModalOpen(true)}}>
                <MessageSquare size={22}/>
              </button>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-500">
              {likes > 0 && <div className="flex -space-x-2"><div className="w-7 h-7 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-[10px]">{t('Y', 'Y')}</div></div>}
              <span>{likes} {t('lượt thích', 'likes')} • {commentsList.length} {t('bình luận', 'comments')}</span>
            </div>
         </div>

         {isFS && (
           <div className="space-y-6">
              {commentsList.length === 0 ? (
                <div className="text-center py-6"><p className="text-slate-400 text-sm">{t('Chưa có bình luận nào.', 'No comments yet.')}</p></div>
              ) : (
                commentsList.map(comment => (
                  <div key={comment.id} className="flex space-x-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="w-10 h-10 rounded-full bg-pink-400 text-white flex items-center justify-center font-bold text-sm shrink-0">{(comment.author || 'Y')[0]}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                         <div>
                           <span className="font-bold text-slate-900 text-sm">{comment.author}</span>
                           <span className="text-xs text-slate-400 ml-2 font-medium">{formatTimeAgo(comment.timestamp, comment.time, lang)}</span>
                         </div>
                      </div>
                      <p className="text-[11px] text-slate-500 mb-2 font-medium">{comment.role}</p>
                      <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-lg rounded-tl-none inline-block border border-slate-100">{comment.content}</p>
                    </div>
                  </div>
                ))
              )}
           </div>
         )}
      </div>
    </div>
  );

  const renderCommentInput = () => (
    <div className="p-4 px-6 border-t border-slate-100 bg-white flex items-center space-x-4 shrink-0 rounded-b-2xl">
       <div className="w-10 h-10 rounded-full bg-pink-400 text-white flex items-center justify-center font-bold shrink-0">{t('Y', 'Y')}</div>
       <input 
         type="text" 
         value={newCommentText} 
         onChange={(e) => setNewCommentText(e.target.value)} 
         onKeyDown={handleAddComment} 
         placeholder={t('Viết bình luận... (Enter)', 'Write a comment... (Enter)')} 
         className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all hover:bg-slate-100 focus:bg-white" 
       />
    </div>
  );

  if (isFullScreen) {
    return (
      <div className="fixed inset-0 z-[150] bg-[#f8f9fa] overflow-y-auto">
        <div className="max-w-4xl mx-auto py-8 px-4 w-full">
          <button onClick={() => setIsFullScreen(false)} className="flex items-center text-slate-500 hover:text-slate-800 mb-6 font-medium text-sm transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            {t('Quay lại', 'Back')}
          </button>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden min-h-[60vh]">
            {renderHeroPostContent(true)}
            {renderCommentInput()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 w-full">
      <div className="flex items-center space-x-2 mb-6">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
           <span className="text-yellow-500">{pageIcon}</span> {pageTitle}
        </h1>
      </div>
      
      {subMenus && subMenus.length > 0 && (
        <div className="flex items-center space-x-1 overflow-x-auto pb-4 mb-4 hide-scrollbar">
          {subMenus.map((menu, idx) => (
            <SubMenuDropdown key={idx} title={menu.title} items={menu.items} />
          ))}
        </div>
      )}

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-8">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-24 px-8 relative overflow-hidden flex flex-col items-center justify-center border-b border-purple-100">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 font-extrabold text-2xl md:text-3xl mb-6 tracking-wide relative z-10 drop-shadow-sm uppercase text-center">
            SoloStartup Vietnam Academy
          </p>
          <div className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight text-center max-w-4xl leading-tight relative z-10">
            {bannerTitle}
          </div>
        </div>
        
        <div className="p-8 md:p-10">
          <div className="flex justify-between items-start mb-6">
             <h2 className="text-2xl font-bold text-slate-900 max-w-xl cursor-pointer hover:text-green-600 transition-colors" onClick={() => setIsModalOpen(true)}>
               {heroTitle}
             </h2>
             <button 
               onClick={toggleBookmark}
               className={`flex items-center space-x-1 hover:text-slate-700 text-sm font-medium border border-slate-200 px-3 py-1.5 rounded-lg transition-colors ${isBookmarked ? 'bg-slate-100 text-slate-800' : 'text-slate-500'}`}
             >
               <Bookmark size={14} className={isBookmarked ? 'fill-current' : ''} /><span>{t('Lưu bài', 'Save')}</span>
             </button>
          </div>
          
          <div className="prose max-w-none text-slate-700 space-y-4 whitespace-pre-line leading-relaxed">
            {heroContentShort}
            <button onClick={() => setIsModalOpen(true)} className="text-slate-500 hover:text-slate-800 font-medium text-sm mt-2 transition-colors focus:outline-none block">
              {t('Xem thêm', 'Read more')}
            </button>
          </div>
          
          <div className="flex items-center justify-between border-t border-slate-100 mt-8 pt-6">
            <div className="flex items-center space-x-4">
              <button onClick={handleLike} className={`transition-colors ${isLiked ? 'text-pink-500' : 'text-slate-400 hover:text-pink-500'}`}>
                <Heart size={18} className={isLiked ? 'fill-current' : ''} />
              </button>
              <button className="text-slate-400 hover:text-green-600 transition-colors" onClick={() => setIsModalOpen(true)}>
                <MessageSquare size={18}/>
              </button>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-500">
              {likes > 0 && <div className="flex -space-x-2"><div className="w-7 h-7 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-[8px]">{t('Y', 'Y')}</div></div>}
              <span>{likes} {t('lượt thích', 'likes')} • {commentsList.length} {t('bình luận', 'comments')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gridPosts.map(post => (
          <InteractivePostCard key={post.id} post={post} layout="grid" onShowToast={onShowToast} lang={lang} t={t} />
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 px-6 border-b border-slate-100 bg-white shrink-0">
              <h2 className="text-lg font-bold text-slate-900 truncate pr-4">{heroTitle}</h2>
              <button className="text-slate-400 hover:text-red-500 transition-colors" onClick={() => setIsModalOpen(false)}><X size={22}/></button>
            </div>
            <div className="flex-1 overflow-y-auto">
               {renderHeroPostContent(true)}
            </div>
            {renderCommentInput()}
          </div>
        </div>
      )}
    </div>
  );
};
