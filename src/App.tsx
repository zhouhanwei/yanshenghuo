/*
 * @Author: zhouhanwei sgzhouhanwei@163.com
 * @Date: 2025-12-02 13:42:42
 * @LastEditors: zhouhanwei sgzhouhanwei@163.com
 * @LastEditTime: 2025-12-02 17:37:57
 * @FilePath: /yxc-ssr/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';
import Home from './pages/Home';
import Cuisine from './pages/Cuisine'; // 确保你之前创建了这个文件
import CuisineDetail from './pages/CuisineDetail'; // 确保你之前创建了这个文件
import TraditionalArts from './pages/TraditionalArts'; // 引入新组件
import ArtDetail from './pages/ArtDetail';
import HistoricalSites from './pages/HistoricalSites';
import HistoryDetail from './pages/HistoryDetail';
import Festivals from './pages/Festivals';
import FestivalDetail from './pages/FestivalDetail'; // 引入新组件
import PracticalTools from './pages/PracticalTools';
import LocalCommunity from './pages/LocalCommunity';
import CommunityDetail from './pages/CommunityDetail';
import PostDetail from './pages/PostDetail';
import './index.css' 

// --- 临时占位组件 (用于还未开发的页面) ---
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-10">
    <span className="material-symbols-outlined text-6xl text-primary mb-4">construction</span>
    <h1 className="text-3xl font-bold mb-2">{title}</h1>
    <p className="text-gray-500">此页面正在开发中，敬请期待...</p>
  </div>
);

export default function App() {
  return (
    <BasicLayout>
      <Routes>
        {/* 1. 首页 */}
        <Route path="/" element={<Home />} />
        
        {/* 2. 本地美食 (已完成) */}
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/cuisine/detail" element={<CuisineDetail />} />
        
        {/* 3. 其他页面 (使用占位符，以后替换成真实组件) */}
        <Route path="/arts" element={<TraditionalArts/>} />
        <Route path="/arts/detail" element={<ArtDetail />} />

        <Route path="/history" element={<HistoricalSites/>} />
        <Route path="/history/detail" element={<HistoryDetail />} />

        <Route path="/festivals" element={<Festivals/>} />
        <Route path="/festivals/detail" element={<FestivalDetail />} /> {/* 详情页 */}

        <Route path="/tools" element={<PracticalTools />} />
    
        <Route path="/community" element={<LocalCommunity />} />
        <Route path="/community/detail" element={<CommunityDetail />} />
        <Route path="/community/post" element={<PostDetail />} /> 
        
        <Route path="/entertainment" element={<PlaceholderPage title="Entertainment & Leisure (娱乐休闲)" />} />
        
        {/* 404 处理 */}
        <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
      </Routes>
    </BasicLayout>
  );
}