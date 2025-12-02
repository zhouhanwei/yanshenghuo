import React from 'react';
import { Link } from 'react-router-dom';

const HistoryDetail: React.FC = () => {
  // 定义页面专属的深红色，方便复用
  const primaryColor = "text-[#8C3B3B]";
  const borderPrimary = "border-[#8C3B3B]";

  return (
    <div className="flex flex-1 justify-center py-5 sm:py-10">
      <div className="layout-content-container flex flex-col w-full px-4 sm:px-6 lg:px-8">
        
        {/* 1. Hero Image */}
        <div 
          className="w-full h-[300px] sm:h-[500px] bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl shadow-lg" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuv5ttB6ObW0GM7Sc89deWv4kxaGEjK0Q9R0prHbUqi-s8GLpndowcD5mPH8A5xks-3H0n1bMxT_WXirbXdW302X8jxq5-1Jbf6sV72h3Za_qF0lnudEDtl7yHsjxR4x4gLyo_g13pyXxF7iPhNvz8Lyt2hWvgdx7WJL3SPhOV_iJODtRlfKnPXbZMcIxUG6ZUZdcWX9Lcati7KUau2AaXkKsA2TxjAqroNUzk4apEB0qxyw-QYx1N1luewk6cB4UktornYvGqbin6")' }}
        >
        </div>

        {/* 2. Breadcrumbs */}
        <div className="flex flex-wrap gap-2 py-6">
          <Link className="text-gray-500 dark:text-gray-400 hover:text-[#8C3B3B] text-sm font-medium leading-normal" to="/">首页</Link>
          <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
          <Link className="text-gray-500 dark:text-gray-400 hover:text-[#8C3B3B] text-sm font-medium leading-normal" to="/history">历史遗迹</Link>
          <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
          <span className="text-[#1a2e2e] dark:text-[#d0e0e0] text-sm font-medium leading-normal">永宁寺</span>
        </div>

        {/* 3. Title Header */}
        <div className="flex flex-wrap justify-between gap-4 pb-8 border-b border-black/10 dark:border-white/10">
          <div className="flex flex-col gap-3">
            {/* 使用 font-serif 模拟衬线体风格 */}
            <h1 className="font-serif text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#1a2e2e] dark:text-[#d0e0e0]">永宁寺</h1>
            <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed max-w-3xl">
              永宁寺，始建于东晋，是盐城地区现存最古老的佛教寺庙之一。它不仅是宗教活动的中心，更是历史变迁的见证者，承载着深厚的文化底蕴与艺术价值。
            </p>
          </div>
        </div>

        {/* 4. Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          
          {/* Left Column: Article */}
          <div className="md:col-span-2 space-y-12">
            {/* Tabs (Visual only) */}
            <div className="w-full">
              <div className="flex border-b border-black/10 dark:border-white/10 gap-8">
                <a className={`flex flex-col items-center justify-center border-b-[3px] ${borderPrimary} ${primaryColor} pb-3 pt-2`} href="#">
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">历史沿革</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 hover:text-[#8C3B3B] pb-3 pt-2 transition-colors" href="#">
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">文化价值</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 dark:text-gray-400 hover:text-[#8C3B3B] pb-3 pt-2 transition-colors" href="#">
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">建筑特色</p>
                </a>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none text-[#1a2e2e]/90 dark:text-[#d0e0e0]/90 leading-loose">
              <p className="mb-4">永宁寺，原名护国寺，位于古盐渎县城东门外。据《盐城县志》记载，该寺始建于东晋孝武帝时期，由高僧法显的弟子所创。初为草舍，后经南朝梁武帝敕令扩建，规模宏大，香火鼎盛，成为江淮地区重要的佛教中心。</p>
              <p className="mb-4">寺庙历经唐、宋、元、明、清各代，屡毁屡建。唐代鉴真和尚东渡日本前曾在此驻锡讲法。宋代，著名文学家苏轼过访盐城，曾留下赞美永宁寺的诗篇。明代倭寇侵扰，寺庙遭严重破坏，后在当地士绅的资助下得以重建。清康熙年间再次修葺，奠定了今日之格局。</p>
              <p>如今的永宁寺，虽不复旧时之宏伟，但其主体建筑大雄宝殿仍保留着明清时期的建筑风格，殿内供奉的佛像庄严肃穆，具有极高的艺术价值。寺内的古银杏树，据传已有千年历史，是这段漫长岁月最忠实的见证。</p>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <aside className="space-y-6">
            {/* Info Box */}
            <div className="bg-[#f0f7f7] dark:bg-[#0a1a1a] p-6 rounded-lg border border-black/5 dark:border-white/5">
              <h3 className="font-serif text-xl font-bold mb-4 text-[#1a2e2e] dark:text-[#d0e0e0]">实用信息</h3>
              <ul className="space-y-4 text-sm">
                {[
                  { icon: 'schedule', label: '开放时间', val: '每日 08:00 - 17:00' },
                  { icon: 'location_on', label: '地理位置', val: '江苏省盐城市亭湖区人民中路10号' },
                  { icon: 'hourglass_top', label: '建议游览时长', val: '1 - 2 小时' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`material-symbols-outlined ${primaryColor} mt-0.5`}>{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">{item.label}</p>
                      <p className="text-gray-600 dark:text-gray-400">{item.val}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Box */}
            <div className="bg-[#f0f7f7] dark:bg-[#0a1a1a] p-6 rounded-lg border border-black/5 dark:border-white/5">
              <h3 className="font-serif text-xl font-bold mb-4 text-[#1a2e2e] dark:text-[#d0e0e0]">图库</h3>
              <div className="grid grid-cols-2 gap-2">
                <img className="rounded-md aspect-square object-cover w-full h-full cursor-pointer hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpZRaR73BjAs-r3ivlelMKgnX0nAelW8qb6cUPB8lJ0ffFBwciJGa9PpCgK0TbvqesFYf4fpDZK4A48X5uQdqWH8BaQQ5jmx4CiSreNKt5Mz0eFW0NisMob2v0w_XFImvE_hQv8VlPT6ZogEoUEW8KxtLVZzAdI06YE4nm8BizoEfe3hIYkPgGsi0II8P4H1eQ_ZfcK536B65eadNyQ2SIzb-dquMPTVRNYmJqxkwzmMWAQNS_v-GmgoWcB_9YlCv26joNEyUf5sRn" alt="Roof" />
                <img className="rounded-md aspect-square object-cover w-full h-full cursor-pointer hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlvI36PYIhqDrCw7CwUrfoLpKxAwjwcmGJkSh8RNBiVIhdxAjIBko3eS3dTXE-gmGIKamIgyxXFdt4HCiDy49r1DXMoWs7Ony13a-jLqYYSeRFGuPxmVmUZHG-Lp9vDwbpRYXkta7a7aaNRTtRS8w9pvjbrNiCz_i3nQPvrbxk3dlNR6s_mccxj-VpGLHvCMpuX_Z2Egk4kN9GFVMLP16zQKwYQPOB_M38hIKwQ30vwokRt2yM_n1A2Fy818i1bFZrrwjIs9Vr2uqP" alt="Lion" />
                <img className="rounded-md aspect-square object-cover w-full h-full cursor-pointer hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyO6wP75PipHsmoUc7tGRx5rQMgI85cJ42f4z_SPiXsrNQLLOhqw4r2eah_R2zvP9RaHGo-Rnp-l-HfANScWcX1eL1pvM3Wy2IszGCO_oSOG3yCVrKOhj4KoD5MboeJIOUwHNWmQESknpyiw-2Mr2DNp-Y_b5bLBpKoCJu3DmwDYysUepVDYFWqkztUwV0bZ1NXi2gprekAdwcyDjqbozydTfev63g2pweAX3DSVxxmqCsSYagKpb9M4FZyU8tWWHqcyNFJVyCpGIt" alt="Path" />
                <div className="rounded-md aspect-square bg-black/10 dark:bg-white/10 flex items-center justify-center cursor-pointer hover:bg-black/20 dark:hover:bg-white/20 transition-colors">
                  <span className="text-gray-600 dark:text-gray-400 text-xs font-semibold">+ 12 张</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* 5. Explore More */}
        <div className="mt-20 pt-10 border-t border-black/10 dark:border-white/10">
          <h2 className="font-serif text-3xl font-bold text-center mb-8 text-[#1a2e2e] dark:text-[#d0e0e0]">探索更多盐城古迹</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "盐城古城墙遗址",
                desc: "明代所建，见证了城市的沧桑变迁，是研究古代城防体系的重要实物。",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAARrZhO-Y3sk5jQU6_MBmKELc3qttALHhRdFHZrv3p914LKqZ4nQ5KojoIBAob0KyEaH3CqMC8Lx8GaI5iunNOND1ndgk-ge6ereFd1KCfEXZX9LSovhfZR5iB-DfrL4Qdj9y1MOBRxBWthRzrTTdglWAXd7ywVLzSaZEi0Q7JmNgehK8LUR_abmrDCVsCxE5tPYcmJQqsfxm4tTrAsnTxt3RtGjkF0lT_U7DTLaRg8wLn2GebEJCyY5059pVM5oF9l6JWeiqF-sBy"
              },
              {
                title: "陆公祠",
                desc: "为纪念宋代抗金名将陆秀夫而建，祠内陈列着其生平事迹与遗物。",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_6YepzT50mWzU2ALsZt9bemr3gOJF8xUjfl0FlL6mnlnNsI2WB1r_PydZrBKeT_LUzUVVKhv6IAvH6qBwRFIWk5MemvWCPf122ejkN_6Tm8Y2vQasjyO9ytaO4rOLGpSs8jzE9qBayFdor74Bg0LCbA9Gkhpsm4MSZ1X7xEow4STL0PGbg76I9ykiruX994VdzqF6m06t--m9VmqH-Lv38gP-CdV8xF66nHoCWBwN53KTirr22-s1BTLjL5eZk-hNcAMiLiOfUzX6"
              },
              {
                title: "伍佑古镇",
                desc: "保存完好的水乡古镇，石板路、古桥流水，尽显江南水乡风情。",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB65sJIDZJwukvcj4ow68eyPkAvLLOJEp_8U6BAKB98fQ2MiQJqrC0xzGoaCGHSFGWoo3484bvCgR1gG5TMt-Sa_LlLcElZITKYTb5TJSUfNtxfQ_HCDvY-9Ojl_TVYS_4dHlIm7YwDmOMmqKkPX_WWtmojHFDKrqHE2KZSoTCoW6O9OlbSVvogYTRh2TFYVdxVfO0KsgdDD1epbqykNGSaV1-Mwd-zP2bJ46--mjANyMXSinkSmoTOvq1oKkPv2wg1JPYIREjPdZcN"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col bg-white dark:bg-[#1f2937] border border-black/10 dark:border-white/10 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                <img className="h-48 w-full object-cover" src={item.img} alt={item.title} />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl font-bold mb-2 text-[#1a2e2e] dark:text-[#d0e0e0]">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{item.desc}</p>
                  <Link className={`text-sm font-semibold ${primaryColor} group-hover:underline`} to="#">了解更多 →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HistoryDetail;