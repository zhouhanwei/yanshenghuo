import React from 'react';
import { Link } from 'react-router-dom';

const ArtDetail: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 sm:gap-12 md:gap-16 p-4 sm:p-6 md:p-10">
      
      {/* 1. 顶部面包屑与标题 */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-2 font-sans">
          <Link className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-normal hover:text-[#ee6c2b]" to="/">首页</Link>
          <span className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
          <Link className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-normal hover:text-[#ee6c2b]" to="/arts">传统艺术</Link>
          <span className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
          <span className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal">盐城漆器</span>
        </div>
        <div className="flex flex-wrap justify-between gap-3">
          <h1 className="text-gray-900 dark:text-gray-100 text-4xl lg:text-5xl font-black leading-tight tracking-tight">盐城漆器</h1>
        </div>
      </div>

      {/* 2. 主图/视频区域 */}
      <div 
        className="relative flex items-center justify-center bg-cover bg-center aspect-video w-full rounded-xl overflow-hidden shadow-lg" 
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB57vF5iLY900STGYc3pTCyPkT4UxwN7H1uYlRN3Bis6sOJTgeqoo0lZwtbWt2OnJfrQvmw55EjW3Iehb45lw4nAYUvMqWcV4fyq4PNQPao_AJOeuUmdjr4UNE-iCccYXXHLLcDaI2A0BoBgRoJ8XeERa9b8h1UrjtJDfgTBwmTlGaDT-RGlsgVsTIR3JuVUaL5LaJ1L6W0vitQvAtyQ0nXzGBpe9aFGiGilrW71q5LLPHFtiQpZ_DihBfWaYAafWfyaaQIbXrRSjbt")' }}
      >
        <button className="flex shrink-0 items-center justify-center rounded-full size-16 bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-4xl">play_arrow</span>
        </button>
      </div>

      {/* 3. 详情内容与侧边栏 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* 左侧文章 */}
        <div className="md:col-span-2 flex flex-col gap-8">
          <section>
            <h2 className="text-gray-900 dark:text-gray-100 text-2xl font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-gray-200 dark:border-gray-800">起源与历史</h2>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mt-4 font-sans">
              盐城漆器拥有一千多年的悠久历史，起源于唐代。在明清时期达到鼎盛，以其独特的“填嵌”工艺而闻名。这种艺术形式最初是为宫廷和贵族所专享，象征着地位和高雅的品味。每一件作品都讲述着一个故事，见证了这座城市丰富的文化遗产和代代相传的工匠技艺。
            </p>
          </section>
          <section>
            <h2 className="text-gray-900 dark:text-gray-100 text-2xl font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-gray-200 dark:border-gray-800">技艺与文化意义</h2>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mt-4 font-sans">
              盐城漆器的制作过程一丝不苟，涉及数十道工序。胎体通常由精选木材制成，经过精心塑形和打磨。然后，从漆树上采集的天然大漆被一层层薄薄地涂上，每一层都需要干燥和抛光后才能进行下一步。独特的“填嵌”技术是在漆面上雕刻出精美的图案，然后用彩漆或金粉填充，最终形成一个光滑、鲜艳且具有立体感的饰面，既耐用又精美绝伦。
            </p>
          </section>
        </div>

        {/* 右侧信息卡片 */}
        <aside className="md:col-span-1 flex flex-col gap-6 bg-[#f9fafb] dark:bg-[#1f2937] p-6 rounded-lg border border-gray-200 dark:border-gray-800 h-fit">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">核心信息</h3>
          <ul className="space-y-4 font-sans text-sm text-gray-700 dark:text-gray-300">
            {[
              { icon: 'history', label: '起源：', value: '唐代 (公元618-907年)' },
              { icon: 'palette', label: '主要技艺：', value: '填嵌工艺' },
              { icon: 'emoji_nature', label: '材料：', value: '天然大漆、木材、金粉' },
              { icon: 'school', label: '地位：', value: '国家级非物质文化遗产' }
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#ee6c2b] text-lg mt-0.5">{item.icon}</span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{item.label}</span> {item.value}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* 4. 底部推荐 "探索其他" */}
      <section className="mt-8">
        <h2 className="text-gray-900 dark:text-gray-100 text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">探索其他传统艺术</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "东台发绣",
              desc: "一种古老的艺术形式，用人的头发创作出精致生动的刺绣画。",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwR_h3kEVoVo8KBfuJWfWN6xOP-MX4nbc0dQpIQ0674yC03fvszDqDFh0f8H0P9sW_cqhQRu1vL9REUJBGiIo9SnoUWA3FkLXf65xLH-q_0MPmKyKCobQ3SGlbbTdTHAbxMDXRaF7urBSb4hkmf9rHXE-qPc3S97UmEW30fzR7LseF-zA4RXpeGEoZjMbA6ZPp7mqeTtxsu0dbqsjrI4RrX0m47kQ6i4VYvCCwzVgc0mWaWQ6aAVHlKIzNadAM5VQ2XiEwAdoK1Er_"
            },
            {
              title: "射阳农民画",
              desc: "色彩鲜艳、富有想象力的画作，反映了该地区的乡村生活和习俗。",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNTRDMHF3-H2zR9X-_7eAbuUJboPxLPLqXfeXt_9bnv-q962tfUoFhOM96FdxayIQD7lGJE8qCHZTMZ2LwXLaKeFOcYlPqnFOhafBfSkQ0FzFnX9yj9brb5enrTEFu8an6HxxTfENDJMF699fGWg7QpEya51fCZPVh1NO2d_lwjPqwEK_VGztWFzzV97I1e0ohFVpplAISKdKzjLkM4Bx38oWUYZ_uNCxbKskdkddjHjqIjIUUXhIYh1JtN89k9YEIsDQGwUXyrIJj"
            },
            {
              title: "阜宁剪纸",
              desc: "用纸剪出复杂图案的艺术，常用于节日装饰。",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuZB5tPP3M_BKRYyBvDFBgJ2XDOkOsAUmLJeZMIV40jrwDhuNp8IxKZi4G79xWeBqCyAATRDSLF3FYJAqea0lradUR8qh8xQKWcQFQc_WMAZ4iShLYAte0tmDyi2badzNzyFEH0x35nFpfQSXsb9z02cAqO5LdclENK8bhcZnIiRkZn2t9X3M1AJv1AkLaVt9ibTaEg-tmzSO0M7jQwY8g8fsSbhrqzUZDlUAuGkPrK7bGSGE-VD5dWzPRuMFXbfemp09wDNyCS-5D"
            }
          ].map((item, index) => (
            <Link key={index} className="group flex flex-col bg-[#f9fafb] dark:bg-[#1f2937] rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-800" to="#">
              <div className="overflow-hidden">
                <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src={item.img} alt={item.title} />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm flex-grow font-sans">{item.desc}</p>
                <span className="mt-4 text-[#ee6c2b] font-bold text-sm font-sans self-start">了解更多 →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtDetail;