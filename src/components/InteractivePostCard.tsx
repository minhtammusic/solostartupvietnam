/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Heart, 
  Bookmark, 
  MoreHorizontal,
  Share,
  Maximize2,
  X
} from 'lucide-react';
import { formatTimeAgo } from '../lib/utils';

interface Post {
  id: string;
  author: string;
  authorRole: string;
  avatar: string;
  space: string;
  time: string;
  title: string;
  content: string;
  image?: string;
  likes?: number;
  comments?: number;
  tags?: string[];
  coverColor?: string;
  icon?: string;
}

interface InteractivePostCardProps {
  post: Post;
  layout?: 'feed' | 'grid';
  onShowToast?: (msg: string) => void;
  lang: string;
  t: (vi: string, en: string) => string;
}

export const InteractivePostCard: React.FC<InteractivePostCardProps> = ({ 
  post, 
  layout = 'feed', 
  onShowToast, 
  lang, 
  t 
}) => {
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem(`v2_post_likes_${post.id}`);
    return saved !== null ? parseInt(saved, 10) : post.likes || 0;
  });
  const [isLiked, setIsLiked] = useState(() => localStorage.getItem(`v2_post_isLiked_${post.id}`) === 'true');
  const [commentsList, setCommentsList] = useState<any[]>(() => {
    const saved = localStorage.getItem(`v2_post_comments_${post.id}`);
    return saved !== null ? JSON.parse(saved) : [];
  });
  const [isBookmarked, setIsBookmarked] = useState(() => localStorage.getItem(`v2_post_isBookmarked_${post.id}`) === 'true');
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [newCommentText, setNewCommentText] = useState('');
  const [, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick(t => t + 1), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => { localStorage.setItem(`v2_post_likes_${post.id}`, likes.toString()); }, [likes, post.id]);
  useEffect(() => { localStorage.setItem(`v2_post_isLiked_${post.id}`, isLiked.toString()); }, [isLiked, post.id]);
  useEffect(() => { localStorage.setItem(`v2_post_comments_${post.id}`, JSON.stringify(commentsList)); }, [commentsList, post.id]);
  useEffect(() => { localStorage.setItem(`v2_post_isBookmarked_${post.id}`, isBookmarked.toString()); }, [isBookmarked, post.id]);

  const handleLike = (e?: React.MouseEvent) => {
    if(e) e.stopPropagation();
    if (isLiked) { setLikes(p => p - 1); setIsLiked(false); }
    else { setLikes(p => p + 1); setIsLiked(true); }
  };

  const handleAddComment = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newCommentText.trim() !== '') {
      const newComment = { 
        id: Date.now(), 
        author: t('Học viên Solo', 'Solo Student'), 
        time: formatTimeAgo(Date.now(), undefined, lang), 
        timestamp: Date.now(), 
        role: t('Thành viên', 'Member'), 
        content: newCommentText.trim() 
      };
      setCommentsList([...commentsList, newComment]);
      setNewCommentText('');
    }
  };

  const toggleBookmark = (e?: React.MouseEvent) => {
    if(e) e.stopPropagation();
    const newValue = !isBookmarked;
    setIsBookmarked(newValue);
    if (onShowToast) onShowToast(newValue ? t('Đã lưu bài viết', 'Bookmark saved') : t('Đã bỏ lưu bài viết', 'Bookmark removed'));
    setShowMoreMenu(false);
  };

  const renderPostContent = (isExpanded: boolean) => (
    <div className="flex flex-col h-full bg-white w-full">
      {isExpanded && post.image && (
        <div className="w-full bg-slate-100 relative h-64 md:h-80 border-b border-slate-100 shrink-0">
           <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}
      {isExpanded && !post.image && post.coverColor && (
        <div className={`w-full relative h-64 md:h-80 border-b border-slate-100 bg-gradient-to-br ${post.coverColor} flex items-center justify-center shrink-0`}>
           <span className="text-8xl filter drop-shadow-sm">{post.icon}</span>
        </div>
      )}

      <div className={`p-5 ${isExpanded ? 'md:p-8' : ''}`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-sm">{post.avatar}</div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-slate-900 text-sm">{post.author}</span>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">{post.authorRole}</span>
                {!isExpanded && post.tags && post.tags.map(tag => (
                  <span key={tag} className="hidden sm:flex px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-medium rounded-full items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-1"></span>{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-500 mt-1">
                <span>{t('Đăng trong', 'Posted in')} <span className="font-medium text-slate-600">{post.space}</span></span>
                <span>•</span>
                <span>{post.time}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 relative">
            <button className="flex items-center space-x-1 text-slate-500 hover:text-slate-700 text-xs font-medium" onClick={(e) => e.stopPropagation()} title={t('Chia sẻ', 'Share')}>
              <Share size={14} className="mr-1"/><span className="hidden sm:inline">{t('Chia sẻ', 'Share')}</span>
            </button>
            <button 
              className={`text-slate-400 hover:text-slate-800 transition-colors ${isBookmarked ? "text-slate-800" : ""}`} 
              title={t('Lưu bài viết', 'Bookmark')} 
              onClick={toggleBookmark}
            >
              <Bookmark size={16} className={isBookmarked ? "fill-current" : ""} />
            </button>
            <button className="text-slate-400 hover:text-slate-800 transition-colors" onClick={(e) => { e.stopPropagation(); setShowMoreMenu(!showMoreMenu); }}>
              <MoreHorizontal size={18}/>
            </button>
            {showMoreMenu && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-[200]">
                <button onClick={toggleBookmark} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                  {isBookmarked ? t('Bỏ lưu', 'Remove bookmark') : t('Lưu bài này', 'Bookmark this')}
                </button>
              </div>
            )}
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-3">{post.title}</h2>
        <p className={`text-sm text-slate-700 mb-2 whitespace-pre-line leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>{post.content}</p>
        {!isExpanded && (
          <button className="text-slate-500 text-sm font-medium mb-4 hover:underline" onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}>{t('Xem thêm', 'See more')}</button>
        )}
      </div>
      
      {!isExpanded && layout === 'feed' && (
        <div className="w-full bg-slate-100 relative border-t border-slate-100 h-80 shrink-0 overflow-hidden">
          {post.image ? (
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          ) : post.coverColor ? (
            <div className={`w-full h-full bg-gradient-to-br ${post.coverColor} flex items-center justify-center`}>
               <span className="text-6xl filter drop-shadow-sm">{post.icon}</span>
            </div>
          ) : null}
        </div>
      )}

      <div className={`p-4 border-t border-slate-100 flex flex-col ${isExpanded ? 'md:p-8 mt-auto' : ''}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-slate-500">
            <button onClick={handleLike} className={`flex items-center space-x-1.5 transition-colors px-2 py-1 rounded hover:bg-slate-50 ${isLiked ? 'text-pink-500' : 'hover:text-pink-500'}`} title={t('Thích', 'Like')}>
              <Heart size={18} className={isLiked ? 'fill-current' : ''} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }} className="flex items-center space-x-1.5 text-slate-400 hover:text-green-600 transition-colors px-2 py-1 rounded hover:bg-slate-50" title={t('Bình luận', 'Comment')}>
              <MessageSquare size={18} />
            </button>
          </div>
          <div className="text-sm text-slate-500">
            <span>{likes} {t('lượt thích', 'likes')} • {post.comments !== undefined ? post.comments + commentsList.length : commentsList.length} {t('bình luận', 'comments')}</span>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-8 space-y-6">
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
            {renderPostContent(true)}
            {renderCommentInput()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {layout === 'grid' ? (
        <div 
          className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col group h-full" 
          onClick={() => setIsModalOpen(true)}
        >
          <div className="h-48 w-full bg-slate-100 relative overflow-hidden shrink-0">
            {post.image ? (
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            ) : post.coverColor ? (
              <div className={`absolute inset-0 bg-gradient-to-br ${post.coverColor} flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300`}>
                <span className="text-6xl filter drop-shadow-sm transform group-hover:scale-105 transition-transform duration-300 z-10">{post.icon}</span>
              </div>
            ) : null}
            <div className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-green-600 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold shadow-sm z-20">
              {post.author.substring(0,2).toUpperCase()}
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col bg-white">
            <h3 className="font-bold text-slate-800 text-base leading-snug mb-3 flex-1 group-hover:text-green-600 transition-colors line-clamp-2">{post.title}</h3>
            <div className="text-xs text-slate-500 mb-4 mt-auto">
              <span className="font-semibold text-slate-700">{post.author}</span> {t('đăng', 'posted')} {post.time}
            </div>
            <div className="flex items-center space-x-4 text-slate-400 text-sm mt-auto pt-4 border-t border-slate-50">
              <span className="flex items-center space-x-1.5 hover:text-green-600 transition-colors"><Heart size={16} className={isLiked ? 'fill-current text-pink-500' : ''}/><span className="font-medium">{likes}</span></span>
              <span className="flex items-center space-x-1.5 hover:text-green-600 transition-colors"><MessageSquare size={16}/><span className="font-medium">{post.comments !== undefined ? post.comments + commentsList.length : commentsList.length}</span></span>
            </div>
          </div>
        </div>
      ) : (
        <div 
          className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md cursor-pointer" 
          onClick={() => setIsModalOpen(true)}
        >
          {renderPostContent(false)}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 px-6 border-b border-slate-100 bg-white shrink-0">
              <h2 className="text-lg font-bold text-slate-900 truncate pr-4">{post.title}</h2>
              <div className="flex items-center space-x-4 text-slate-400 shrink-0">
                <button className="hover:text-slate-800 transition-colors" title={t('Phóng to', 'Maximize')} onClick={() => { setIsModalOpen(false); setIsFullScreen(true); }}>
                  <Maximize2 size={18}/>
                </button>
                <button className="hover:text-red-500 transition-colors" onClick={() => setIsModalOpen(false)} title={t('Đóng', 'Close')}><X size={22}/></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto bg-white">
               {renderPostContent(true)}
            </div>
            {renderCommentInput()}
          </div>
        </div>
      )}
    </>
  );
};
