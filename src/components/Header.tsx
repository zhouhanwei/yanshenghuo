import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// 1. NavLink 组件：增加了 onClick 处理点击后关闭菜单
const NavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode; 
  onClick?: () => void; 
}) => {
  const location = useLocation();

  // 首页精确匹配，其他页面前缀匹配
  const isActive = to === '/' 
    ? location.pathname === to 
    : location.pathname.startsWith(to);

  return (
    <Link
      to={to}
      onClick={onClick} // 点击链接时触发（用于关闭菜单）
      className={`text-sm leading-normal transition-colors block py-2 md:py-0 ${
        isActive 
          ? 'font-bold text-primary' 
          : 'font-medium text-[#111812] dark:text-white hover:text-primary' 
      }`}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  // 控制移动端菜单开关的状态
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-black/10 dark:border-white/10 transition-all duration-300">
      <div className="flex items-center justify-between px-4 sm:px-10 py-3 relative">
        
        {/* 左侧 Logo */}
        <div className="flex items-center gap-8">
          <Link className="flex items-center gap-4 text-[#111812] dark:text-white" to="/" onClick={closeMenu}>
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
              </svg>
            </div>
            {/* 移动端屏幕极窄时隐藏文字，防止挤压 */}
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] hidden xs:block">盐城风情</h2>
          </Link>

          {/* --- 桌面端导航 (md 以上显示) --- */}
          <nav className="hidden md:flex items-center gap-9">
            <NavLink to="/">首页</NavLink>
            <NavLink to="/cuisine">本地美食</NavLink>
            <NavLink to="/arts">传统艺术</NavLink>
            <NavLink to="/history">历史遗迹</NavLink>
            <NavLink to="/festivals">节庆活动</NavLink>
            <NavLink to="/community">本地圈子</NavLink>
            <NavLink to="/entertainment">娱乐休闲</NavLink>
            <NavLink to="/tools">实用工具</NavLink>
          </nav>
        </div>

        {/* 右侧功能区 */}
        <div className="flex items-center gap-4">
          
          {/* 搜索框 (小屏幕隐藏) */}
          <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-gray-500 dark:text-gray-400 flex bg-black/5 dark:bg-white/10 items-center justify-center pl-3 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined" data-icon="MagnifyingGlass">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111812] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-black/5 dark:bg-white/10 h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                placeholder="搜索"
                defaultValue=""
              />
            </div>
          </label>

          <button className="flex min-w-[60px] sm:min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#111812] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">登录</span>
          </button>

          {/* --- 移动端菜单切换按钮 (md 以下显示) --- */}
          <button 
            className="md:hidden flex items-center justify-center p-2 text-[#111812] dark:text-white hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* --- 移动端下拉菜单区域 --- */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-black/10 dark:border-white/10 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-2">
          <NavLink to="/" onClick={closeMenu}>首页</NavLink>
          <NavLink to="/cuisine" onClick={closeMenu}>本地美食</NavLink>
          <NavLink to="/arts" onClick={closeMenu}>传统艺术</NavLink>
          <NavLink to="/history" onClick={closeMenu}>历史遗迹</NavLink>
          <NavLink to="/festivals" onClick={closeMenu}>节庆活动</NavLink>
          <NavLink to="/community" onClick={closeMenu}>本地圈子</NavLink>
          <NavLink to="/entertainment" onClick={closeMenu}>娱乐休闲</NavLink>
          <NavLink to="/tools" onClick={closeMenu}>实用工具</NavLink>
        </nav>
      </div>
    </header>
  );
}