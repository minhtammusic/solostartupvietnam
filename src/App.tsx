/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Award, 
  Search, 
  Bell, 
  Menu,
  X,
  LogOut,
  Sprout,
  Trophy,
  Rocket,
  Globe,
  UserCheck,
  MessageCircle,
  Mail
} from 'lucide-react';

// Models & Data
import { getMockData } from './data/mockData';

// Components
import { SubMenuDropdown } from './components/SubMenuDropdown';
import { InteractivePostCard } from './components/InteractivePostCard';
import { MentorsView } from './components/MentorsView';
import { SpaceView } from './components/SpaceView';
import { ProfileView } from './components/views/ProfileView';
import { CertificatesView } from './components/views/CertificatesView';
import { AIGuideView } from './components/views/AIGuideView';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [lang, setLang] = useState('vi');
  const t = (viText: string, enText: string) => lang === 'en' ? enText : viText;
  
  const mockData = getMockData(t);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('feed');
  const [activeCategory, setActiveCategory] = useState(t('Tất cả', 'All'));
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [isNotiOpen, setIsNotiOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const filteredModules = activeCategory === t('Tất cả', 'All') 
    ? mockData.courseModules 
    : mockData.courseModules.filter(m => m.category === activeCategory);

  const renderLoginView = () => (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-4 right-4 z-50">
        <button onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} className="flex items-center gap-1.5 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full shadow-sm border border-slate-200 font-bold text-slate-600 hover:text-slate-900 hover:bg-white transition-all">
          <Globe size={18} /> {lang === 'vi' ? 'English' : 'Tiếng Việt'}
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob"></div>
        <div className="absolute top-48 -right-24 w-[300px] h-[300px] bg-pink-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/3 w-[500px] h-[500px] bg-green-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-md w-full space-y-8 bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white relative z-10 animate-in fade-in zoom-in duration-500">
        <div className="text-center">
          <div className="mx-auto h-20 w-20 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 mb-6">
            <Sprout size={40} className="text-white -rotate-3" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            SoloStartup <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Vietnam</span>
          </h2>
          <p className="mt-4 text-sm text-slate-600 font-medium bg-slate-100/80 border border-slate-200 inline-block px-4 py-2 rounded-full">
            {t('Nền tảng học tập Khởi nghiệp dành cho học sinh, sinh viên và người mới 🌱', 'Startup Learning Platform for students, beginners and innovators 🌱')}
          </p>
        </div>
        
        <div className="mt-10 space-y-4">
          <button onClick={() => setIsLoggedIn(true)} className="w-full flex items-center justify-center space-x-3 py-3.5 px-4 border border-slate-200 rounded-xl shadow-sm bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all">
            <svg className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            <span>{t('Đăng nhập với Google', 'Login with Google')}</span>
          </button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-slate-400">{t('Hoặc', 'Or')}</span></div>
          </div>
          <button onClick={() => setIsLoggedIn(true)} className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl shadow-sm text-sm font-bold text-white bg-green-600 hover:bg-green-700 transition-all">
            {t('Tham gia Cộng đồng', 'Join the Community')}
          </button>
        </div>
        <p className="text-center text-xs text-slate-400 mt-8">{t('Sản phẩm phát triển bởi đội ngũ SoloStartup', 'Developed by SoloStartup Team')}</p>
      </div>
    </div>
  );

  const renderHeader = () => (
    <header className="h-[70px] bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 sticky top-0 z-40 shadow-sm">
      <div className="flex items-center space-x-4">
        <button className="md:hidden text-slate-500" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu />
        </button>
        <div className="hidden md:flex items-center space-x-3 cursor-pointer">
          <div className="w-9 h-9 bg-gradient-to-tr from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
             <Sprout size={20} className="text-white" />
          </div>
          <div className="flex flex-col leading-none justify-center">
            <span className="font-extrabold text-slate-800 text-[15px] mb-0.5">SoloStartup</span>
            <span className="font-bold text-slate-600 text-[14px]">Vietnam</span>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-3xl px-4 hidden md:flex justify-center h-full">
        <div className="flex items-center space-x-4 lg:space-x-6 text-[14px] font-semibold text-slate-500 h-full">
          <button onClick={() => setActiveTab('feed')} className={`h-full px-2 transition-colors border-b-[3px] flex items-center ${activeTab === 'feed' ? 'text-emerald-600 border-emerald-600' : 'border-transparent hover:text-slate-800'}`}>
            {t('Trang chủ', 'Home')}
          </button>
          <button onClick={() => setActiveTab('courses-menu')} className={`h-full px-2 transition-colors border-b-[3px] flex items-center ${activeTab === 'courses-menu' ? 'text-emerald-600 border-emerald-600' : 'border-transparent hover:text-slate-800'}`}>
            {t('Khóa học', 'Courses')}
          </button>
          <button onClick={() => setActiveTab('events-menu')} className={`h-full px-2 transition-colors border-b-[3px] flex items-center ${activeTab === 'events-menu' ? 'text-emerald-600 border-emerald-600' : 'border-transparent hover:text-slate-800'}`}>
            {t('Sự kiện', 'Events')}
          </button>
          <button onClick={() => setActiveTab('leaderboard-menu')} className={`h-full px-2 transition-colors border-b-[3px] flex items-center text-center leading-tight ${activeTab === 'leaderboard-menu' ? 'text-emerald-600 border-emerald-600' : 'border-transparent hover:text-slate-800'}`}>
            {t('Bảng xếp hạng', 'Leaderboard')}
          </button>
          <button onClick={() => setActiveTab('zalo-community')} className={`h-full px-2 transition-colors border-b-[3px] flex items-center ${activeTab === 'zalo-community' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-slate-800'}`}>
            {t('Nhóm Zalo', 'Zalo Group')}
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4 md:space-x-5 relative z-50">
        <button onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')} className="hidden md:flex items-center gap-1 text-slate-500 hover:text-slate-800 font-bold text-sm bg-slate-100 px-3 py-1.5 rounded-full">
          <Globe size={16}/> {lang === 'vi' ? 'EN' : 'VI'}
        </button>
        <div className="relative hidden xl:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input type="text" placeholder={t('Tìm kiếm...', 'Search...')} className="pl-9 pr-4 py-1.5 bg-slate-100 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-40 transition-all" />
        </div>
        
        <div className="relative">
          <button onClick={() => {setIsNotiOpen(!isNotiOpen); setIsProfileOpen(false);}} className="text-slate-500 hover:text-slate-800 transition-colors relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </button>
          {isNotiOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsNotiOpen(false)}></div>
              <div className="absolute right-0 mt-4 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-4 py-3 border-b border-slate-50 flex justify-between items-center">
                  <span className="font-bold text-slate-800">{t('Thông báo', 'Notifications')}</span>
                  <span className="text-xs text-blue-600 font-medium cursor-pointer hover:underline">{t('Đánh dấu đã đọc', 'Mark all read')}</span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 transition-colors relative">
                    <div className="absolute left-2 top-4 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p className="text-sm text-slate-800 font-bold pl-2">{t('Chào mừng bạn đến với SoloStartup!', 'Welcome to SoloStartup!')}</p>
                    <p className="text-xs text-slate-500 mt-1 pl-2">{t('Hãy bắt đầu bằng việc cập nhật hồ sơ và tham gia nhóm Zalo nhé.', 'Start by updating your profile and joining the Zalo group.')}</p>
                    <p className="text-[10px] text-slate-400 mt-2 pl-2">1 {t('giờ trước', 'hours ago')}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="relative">
          <div onClick={() => {setIsProfileOpen(!isProfileOpen); setIsNotiOpen(false);}} className="w-9 h-9 rounded-full bg-pink-400 flex items-center justify-center cursor-pointer overflow-hidden border-2 border-white shadow-sm text-white font-bold hover:ring-2 hover:ring-pink-300 transition-all">
            {t('Y', 'Y')}
          </div>
          {isProfileOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)}></div>
              <div className="absolute right-0 mt-4 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {t('Y', 'Y')}
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-bold text-slate-800 text-sm truncate">{t('Học viên Solo', 'Solo Student')}</p>
                    <p className="text-xs text-slate-500 truncate">hocvien@solostartup.vn</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <button onClick={() => {setActiveTab('profile'); setIsProfileOpen(false);}} className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center space-x-3">
                    <UserCheck size={16} className="text-slate-400" /> <span>{t('Hồ sơ của tôi', 'My Profile')}</span>
                  </button>
                  <button onClick={() => {setActiveTab('certificates'); setIsProfileOpen(false);}} className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center space-x-3">
                    <Award size={16} className="text-slate-400" /> <span>{t('Chứng chỉ của tôi', 'My Certificates')}</span>
                  </button>
                  <button onClick={() => {setIsProfileOpen(false); setIsLoggedIn(false);}} className="w-full text-left px-3 py-2 text-sm font-bold text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center space-x-3 mt-2 border-t border-slate-50 pt-2">
                    <LogOut size={16} /> <span>{t('Đăng xuất', 'Log out')}</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );

  const renderSidebar = () => (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 md:translate-x-0 md:relative h-screen flex flex-col ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}>
      <div className="p-4 flex items-center justify-between md:hidden border-b border-slate-200 bg-white font-bold">
        <span>SoloStartup</span>
        <button onClick={() => setIsMobileMenuOpen(false)}><X size={20}/></button>
      </div>

      <div className="p-3 flex-1 overflow-y-auto">
        <div className="space-y-1 mb-6 mt-2">
          <button onClick={() => {setActiveTab('feed'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'feed' ? 'bg-green-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}>
            <Home size={16} /> <span>{t('Bảng tin', 'Feed')}</span>
          </button>
        </div>

        <div className="mb-6">
          <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">{t('CỘNG ĐỒNG KHỞI NGHIỆP', 'STARTUP COMMUNITY')}</p>
          <div className="space-y-1">
            <button onClick={() => {setActiveTab('welcome'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'welcome' ? 'bg-green-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>
              <Bell size={16} /> <span>{t('Bắt đầu tại đây', 'Start Here')}</span>
            </button>
            <button onClick={() => {setActiveTab('hub'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'hub' ? 'bg-green-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>
              <BookOpen size={16} /> <span>{t('Chuyện Khởi nghiệp', 'Startup Hub')}</span>
            </button>
            <button onClick={() => {setActiveTab('projects'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'projects' ? 'bg-green-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>
              <Rocket size={16} /> <span>{t('Dự án tiêu biểu', 'Featured Projects')}</span>
            </button>
            <button onClick={() => {setActiveTab('mentors'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'mentors' ? 'bg-green-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>
              <UserCheck size={16} /> <span>{t('Mạng lưới Chuyên gia', 'Mentors Network')}</span>
            </button>
          </div>
        </div>

        {mockData.COURSE_CONFIG.map(course => (
          <div key={course.id} className="mb-6">
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">{course.title}</p>
            <div className="space-y-1">
              {course.tabs.map(tab => (
                <button key={`${course.id}-${tab.id}`} onClick={() => {setActiveTab(`${course.id}-${tab.id}`); setIsMobileMenuOpen(false); }} className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === `${course.id}-${tab.id}` ? `${course.activeBg} text-white` : `text-slate-600 ${course.hoverClass}`}`}>
                  <span className={`w-2 h-2 rounded-full ${activeTab === `${course.id}-${tab.id}` ? 'bg-white' : tab.dotColor}`}></span>
                  <span className="truncate">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-slate-200">
        <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-red-500 transition-colors">
          <LogOut size={16} /><span>{t('Đăng xuất', 'Logout')}</span>
        </button>
      </div>
    </div>
  );

  return (
    !isLoggedIn ? renderLoginView() :
    <div className="flex h-screen bg-[#f8f9fa] font-sans text-slate-800 overflow-hidden relative">
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/40 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
      {renderSidebar()}
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {renderHeader()}
        <main className="flex-1 overflow-y-auto w-full flex justify-center">
          
          {activeTab === 'feed' && (
            <div className="max-w-6xl mx-auto py-8 px-4 w-full flex gap-6">
              <div className="flex-1 max-w-3xl">
                <div className="flex items-center space-x-2 mb-6"><h1 className="text-2xl font-bold text-slate-900">{t('Bảng tin', 'Feed')}</h1></div>
                <div className="space-y-4">
                  {mockData.feedPosts.map(post => <InteractivePostCard key={post.id} post={post} layout="feed" onShowToast={showToast} lang={lang} t={t} />)}
                </div>
              </div>
              <div className="hidden lg:block w-80 pt-14">
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-24">
                  <h3 className="font-bold text-slate-800 text-sm mb-4">{t('Bài viết nổi bật', 'Trending Posts')}</h3>
                  <div className="space-y-4">
                    {mockData.trendingPosts.map(item => (
                      <div key={item.id} className="flex items-start space-x-3 group cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{item.icon}</div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800 line-clamp-2 leading-snug group-hover:text-green-600 transition-colors">{item.title}</p>
                          <p className="text-xs text-slate-500 mt-1">{item.author}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'hub' && (
            <div className="max-w-5xl mx-auto py-8 px-4 w-full">
              <div className="flex items-center space-x-2 mb-6"><h1 className="text-2xl font-bold text-slate-900">{t('Chuyện Khởi nghiệp', 'Startup Hub')}</h1></div>
              <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-4 hide-scrollbar">
                {mockData.categories.map(cat => (
                  <button key={cat} onClick={() => setActiveCategory(cat)} className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${activeCategory === cat ? 'bg-slate-900 text-white shadow-sm' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-100'}`}>
                    {cat}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredModules.map(module => <InteractivePostCard key={module.id} post={module} layout="grid" onShowToast={showToast} lang={lang} t={t} />)}
              </div>
            </div>
          )}

          {activeTab === 'welcome' && <SpaceView id="welcome" pageIcon="🔔" pageTitle={t('Bắt đầu tại đây', 'Start Here')} bannerTitle={t('Từ hạt mầm ý tưởng đến dự án thực chiến', 'From ideas to real projects')} heroTitle={t('Chào mừng bạn đến với cộng đồng SoloStartup Vietnam', 'Welcome to SoloStartup Vietnam')} heroContentShort={<><p>{t('Chào bạn,', 'Hello,')}</p><p>{t('Hệ thống hiện đang hỗ trợ hàng trăm học viên phát triển tư duy kinh doanh và biến ý tưởng thành hiện thực...', 'We support hundreds of students to develop business mindsets and turn ideas into reality...')}</p></>} heroContentFull={<p>{t('Hành trình khởi nghiệp luôn đi kèm với rủi ro và sự mông lung. Nhưng tại đây, bạn sẽ không đi một mình.', 'Startup journey always comes with risks. But here, you are not alone.')}</p>} gridPosts={mockData.welcomePosts} onShowToast={showToast} subMenus={[]} lang={lang} t={t} />}

          {activeTab === 'projects' && <SpaceView id="projects" pageIcon="🚀" pageTitle={t('Dự án tiêu biểu', 'Featured Projects')} bannerTitle={t('Khám phá các Dự án Khởi nghiệp xuất sắc', 'Discover Excellent Startup Projects')} heroTitle={t('Niềm tự hào của SoloStartup Vietnam', 'Pride of SoloStartup Vietnam')} heroContentShort={<p>{t('Dưới đây là tập hợp các dự án tiêu biểu do chính các bạn học sinh, sinh viên trong cộng đồng phát triển.', 'Below are the typical projects developed by students in the community.')}</p>} heroContentFull={<p>{t('Dưới đây là tập hợp các dự án tiêu biểu do chính các bạn học sinh, sinh viên trong cộng đồng phát triển.', 'Below are the typical projects developed by students in the community.')}</p>} gridPosts={mockData.featuredProjectsPosts} onShowToast={showToast} subMenus={[]} lang={lang} t={t} />}

          {activeTab === 'mentors' && <MentorsView mentorsData={mockData.mentorsData} bookingGuidePost={mockData.bookingGuidePost} t={t} />}
          
          {activeTab === 'leaderboard-menu' && (
            <div className="max-w-4xl mx-auto py-8 px-4 w-full">
              <div className="flex items-center space-x-2 mb-6"><h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><Trophy className="text-amber-500 w-7 h-7" /> {t('Bảng Xếp Hạng', 'Leaderboard')}</h1></div>
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 md:p-10">
                <div className="space-y-4">
                  {mockData.leaderboardData.map((user, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-2xl ${index === 0 ? 'bg-amber-50 border border-amber-100' : 'bg-slate-50'}`}>
                      <div className="flex items-center space-x-4">
                        <span className="font-bold text-slate-400 w-6">#{index + 1}</span>
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700">{user.name.charAt(0)}</div>
                        <div>
                          <p className="font-bold text-slate-800">{user.name}</p>
                          <p className="text-xs text-slate-500">{user.team}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-black text-slate-800">{user.points}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{user.badge}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'zalo-community' && (
            <div className="max-w-4xl mx-auto py-8 px-4 w-full">
              <div className="flex items-center space-x-2 mb-6"><h1 className="text-2xl font-bold text-slate-900">{t('Cộng đồng Zalo', 'Zalo Community')}</h1></div>
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-10 text-center flex flex-col items-center">
                <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mb-6">
                  <MessageCircle size={48} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">{t('Tham gia nhóm Zalo kết nối', 'Join Zalo Community')}</h2>
                <p className="text-slate-600 max-w-lg mb-8">{t('Nơi thảo luận trực tiếp cùng các Founder và Mentor 24/7.', 'Discuss directly with Founders and Mentors 24/7.')}</p>
                <a href="https://zalo.me" target="_blank" rel="noreferrer" className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition-all">
                  {t('Tham gia ngay', 'Join Now')}
                </a>
              </div>
            </div>
          )}

          {activeTab === 'profile' && <ProfileView t={t} />}
          {activeTab === 'certificates' && <CertificatesView t={t} onShowToast={showToast} />}
          {activeTab.endsWith('-aibot') && <AIGuideView isMasterclass={activeTab.startsWith('masterclass')} onShowToast={showToast} t={t} />}

          {activeTab.endsWith('-start') && (
             <div className="max-w-4xl mx-auto py-8 px-4 w-full">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-10 text-center">
                  <h2 className="text-3xl font-black text-slate-900 mb-6">{t('Đăng ký Khóa học', 'Register Course')}</h2>
                  <p className="text-slate-600 mb-10">{t('Hành trình khởi nghiệp của bạn bắt đầu từ đây.', 'Your startup journey starts here.')}</p>
                  <a href="https://docs.google.com/forms" target="_blank" rel="noreferrer" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-lg hover:bg-emerald-600 transition-all">
                    {t('Điền Form Đăng Ký', 'Fill Registration Form')}
                  </a>
                </div>
             </div>
          )}

        </main>
      </div>

      {toastMessage && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-xl shadow-2xl z-[999] animate-in fade-in slide-in-from-bottom-5 duration-300 text-center">
          <p className="text-sm font-bold">{toastMessage}</p>
        </div>
      )}
      <Analytics />
    </div>
  );
}
