import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface BasicLayoutProps {
  children: React.ReactNode;
}

export default function BasicLayout({ children }: BasicLayoutProps) {
  return (
    // 最外层容器：处理背景色、字体、最小高度
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-[#111812] dark:text-white/90">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          {/* 内容限宽容器 */}
          <div className="layout-content-container flex flex-col w-full">
            
            <Header />
            
            <main className="flex-1  flex-1 w-full max-w-[1280px] mx-auto pt-[72px]">
              {children}
            </main>
            
            <Footer />
            
          </div>
        </div>
      </div>
    </div>
  );
}