/*
 * @Author: zhouhanwei sgzhouhanwei@163.com
 * @Date: 2025-12-02 14:40:59
 * @LastEditors: zhouhanwei sgzhouhanwei@163.com
 * @LastEditTime: 2025-12-02 15:31:57
 * @FilePath: /yxc-ssr/src/components/Footer.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black/5 dark:bg-white/5 mt-10">
      <div className="max-w-[1280px] mx-auto px-10 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="text-[#111812] dark:text-white text-lg font-bold leading-tight">盐城风情</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-3">与世界分享盐城丰富的文化和遗产。</p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#111812] dark:text-white">探索</h3>
            <ul className="space-y-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
              <li><Link className="hover:text-primary transition-colors" to="#">美食</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="#">艺术</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="#">历史</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="#">活动</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#111812] dark:text-white">关于</h3>
            <ul className="space-y-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
              <li><Link className="hover:text-primary transition-colors" to="#">关于我们</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="#">联系方式</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="#">媒体</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#111812] dark:text-white">法律</h3>
            <ul className="space-y-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
              <li><Link className="hover:text-primary transition-colors" to="#">隐私政策</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="#">服务条款</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-black/10 dark:border-white/10 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2024 盐城风情. 版权所有.</p>
        </div>
      </div>
    </footer>
  );
}