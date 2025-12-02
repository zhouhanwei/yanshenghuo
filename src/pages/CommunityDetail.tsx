import React, { useState } from 'react'; // 1. 引入 useState
import { Link, useNavigate } from 'react-router-dom';
import CreatePostModal from '../components/CreatePostModal'; // 2. 引入 Modal 组件

const CommunityDetail: React.FC = () => {
  // 定义页面专属颜色
  const primary = "text-[#f48c25]";
  const bgPrimary = "bg-[#f48c25]";
  const borderPrimary = "border-[#f48c25]/20";
  const bgSurface = "bg-white dark:bg-[#221910]";
  const navigate = useNavigate();

   // 3. 定义弹窗开关状态
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-1 justify-center py-5 w-full">
      <div className="layout-content-container flex flex-col w-full flex-1 p-4">
        
        {/* --- 新增：面包屑导航 (Start) --- */}
        <div className="pb-4">
          <div className="flex flex-wrap gap-2 text-sm font-medium">
            <Link to="/" className="text-gray-500 hover:text-[#f48c25] transition-colors">首页</Link>
            <span className="text-gray-400">/</span>
            <Link to="/community" className="text-gray-500 hover:text-[#f48c25] transition-colors">本地圈子</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#f48c25] font-bold">盐城美食探店</span>
          </div>
        </div>
        {/* --- 新增：面包屑导航 (End) --- */}

        {/* Header Image */}
        <div className="w-full">
          <div 
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[280px]" 
            style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKlxL8UuEjfW1BjrTQ_WAWAmatr6GmpzG5SLnu3Tsyj-ifBi3Vxx3QX43eewkACOa_vDqemD91xkrFY308niDbqYKWVY7U0QzkziesSDsCIG59epZFK8eR1xxFThNP28HRo0xydjXyEXkx48zBsSOM7nJ4Y2Dnnc9UjBOo-Lf4hfVewZXjvvRP4Qf-2UB0uIKtMqU_tdZrP8KTVDTnCsYSO2WXy88-c_12tkstDr2mehGV3V0byjJyOSmhZkz6nW3TPClg9rkot30m")' }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between p-6">
              <p className="text-white tracking-light text-4xl font-bold leading-tight">盐城美食探店</p>
              <div className="mt-4 md:mt-0">
                <button className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 ${bgPrimary} text-white gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]`}>
                  <span className="material-symbols-outlined">add</span>
                  <span className="truncate">加入圈子</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Intro Text */}
        <div className="mt-4 px-4 py-3 bg-[#f48c25]/10 dark:bg-[#f48c25]/20 rounded-xl">
          <p className="text-base font-normal leading-relaxed text-[#1c140d] dark:text-[#fcfaf8]">
            欢迎来到盐城美食探店圈！这里是所有美食爱好者的聚集地。分享你最爱的餐厅、街头小吃，发现隐藏的美味，一起交流烹饪心得。让我们共同探索盐城的美食地图！
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          
          {/* Center Column: Post Feed */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Create Post Input */}
            <div className={`${bgSurface} p-4 rounded-xl border ${borderPrimary} dark:border-[#f48c25]/30`}>
              <div className="flex items-start gap-4">
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsUL7tZgWMHHjyuxhng0atMfNgaqUDHNdOEyX-QJn1PmGLYQfVgm8o3BXNO7mSgexWqEtOdFOkIUU8Yyq0teWcrth75TVAJTLoICWeGxh8wKZyvvxMejpQaH0jz9uRmXEjr-NdiPHcpf35lp2cuFVBr9oa6gNM0M9i2-R6fwKwa8_N9rfMUQmIit77AAgZ4-WMrWL99SNQqXhRUJdC7DG6HhhBg7BPHR0jhbaqNNMXYMNfkOxJs1n1BB0Tk9FH_ixXTbKyvKupqMDG")' }}
                ></div>
                <textarea className="w-full p-2 rounded-lg bg-[#f8f7f5] dark:bg-[#f48c25]/20 border border-[#f48c25]/20 focus:ring-[#f48c25] focus:border-[#f48c25] placeholder:text-[#9c7349] dark:placeholder:text-[#f48c25]/70 text-[#1c140d] dark:text-[#fcfaf8]" placeholder="分享你的美食发现..." rows={3}></textarea>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-4 text-[#9c7349] dark:text-[#f48c25]/80 text-sm">
                  <button className="flex items-center gap-2 hover:text-[#f48c25] transition-colors"><span className="material-symbols-outlined text-lg">image</span>图片</button>
                  <button className="flex items-center gap-2 hover:text-[#f48c25] transition-colors"><span className="material-symbols-outlined text-lg">videocam</span>视频</button>
                  <button className="flex items-center gap-2 hover:text-[#f48c25] transition-colors"><span className="material-symbols-outlined text-lg">location_on</span>地点</button>
                </div>
                <button onClick={() => setIsModalOpen(true)}  className={`flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 ${bgPrimary} text-white text-sm font-bold leading-normal`}>发布</button>
              </div>
            </div>

            {/* Post Card 1 */}
            <div className={`${bgSurface} p-5 rounded-xl border ${borderPrimary} dark:border-[#f48c25]/30`}>
              <div className="flex items-start gap-4">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 flex-shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNy9PI7GTOjcNZK8UKxYSOec3sYVRsk3bomgtVUY78ujEpCA4FJ23F_fLCN07t1fjRVju7IzaoavKZ-TldtfFljo9Yvl0LSmBs43R_zsVSGYjaC9SSnLIE6JyBwpjso8WCiimZLjnleKt7IvMlE70iMcKOXG_bLWGMkCyabRaFJyxGIAKsmdTxTwLXLQt3Tlj8R2fOUMzu3zLHsjRhWHIvVKmhGk0UsB-NXfVd4GFjYqE1W22qP77HEOKAstskue9W2q09p3SPMFQh")' }}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-base text-[#1c140d] dark:text-[#fcfaf8]">爱吃的盐小城</p>
                      <p className="text-xs text-[#9c7349] dark:text-[#f48c25]/80">2小时前</p>
                    </div>
                    <button className="text-[#9c7349] dark:text-[#f48c25]/80"><span className="material-symbols-outlined">more_horiz</span></button>
                  </div>
                  <Link to="/community/post" className="mt-3 text-base leading-relaxed text-[#1c140d] dark:text-[#fcfaf8]">
                    今天打卡了城南新开的一家淮扬菜馆，那个蟹粉狮子头绝了！入口即化，汤汁鲜美，强烈推荐大家去试试！地址就在XX路XX号。
                  </Link>
                  <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
                    <img className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX1sTjaUCkhkqTKE3qkXEQsirEHTTyQ6K5JYNTgIEVfM-sDQKCwP10YFDjXRchuogItaVfZ4dn7748PhZRzx9GyR__7R-tvFS2TuVGOql-dZvxsqerpDy0wVpUOBaL6oyAta3oXtc2gs_7Gn23vGObJCXp7o2KMp0dip6MYSCJ3WSCjqwOK__XOdK8tKTSfSnGtfrZdHla4hSXs7gU6q92z7vv6Zx3RnQ4AsRJ0F887cJpxbDSPCjxxr2U_UavLVlAA4bpHcwOlnQM" alt="Food 1" />
                    <img className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYdx5QJbZenBs012DNuVK3wgZT4H1dMs4YZiblsYRJLdZ5_cFMU_mKaP7YcBS2mnehgATaFQjvsZokHBnK8SASgB0o0Et8sYZSA6Pew_XpuaaPCqJlyScQfitrnGnzFzgy9nncOkCgqx70boCFD9Hb7dovo2qVIEZpIJeQ3NYyucKYE4tSR_ZaVNCk_RFhRqPDS2CwoadZT7VeBY7n3lcbV3hGC2i7XOZPkz45Fn88E6Wb2Ys0fzuJLz4yn0JByUfG0oXIBNZTMABB" alt="Food 2" />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[#9c7349] dark:text-[#f48c25]/80 text-sm">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-1.5 hover:text-[#f48c25] transition-colors"><span className="material-symbols-outlined text-lg">favorite</span> 128</button>
                      <button className="flex items-center gap-1.5 hover:text-[#f48c25] transition-colors"><span className="material-symbols-outlined text-lg">chat_bubble</span> 34</button>
                    </div>
                    <button className="flex items-center gap-1.5 hover:text-[#f48c25] transition-colors"><span className="material-symbols-outlined text-lg">share</span> 分享</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Post Card 2 */}
            <div className={`${bgSurface} p-5 rounded-xl border ${borderPrimary} dark:border-[#f48c25]/30`}>
              <div className="flex items-start gap-4">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 flex-shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC11aQCg-HDdQUs7zKV02U4T4p9K_pkp3X7WjIabpAwpCPkrqx6vO486dAx5Vq4pUlRRShSaN296jxd6_G0QHK8cSfkenzVgTII1dYF07-LigdzXwcyaJqQg0dafWyePURNjTgawV7f3VSeBNSLSDiUzjARNhT62-M3Hyemcqnt0ALpkEzriGvwmP_FRk5n1FezgDzS2BwFHFcRHEIS1X-cxrWnerGhgXz2cxICtBH9K2pOpFVrq4snO5iZbdVZjOsUV-N1pgnwpTVf")' }}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-base text-[#1c140d] dark:text-[#fcfaf8]">海风摄影师</p>
                      <p className="text-xs text-[#9c7349] dark:text-[#f48c25]/80">1天前</p>
                    </div>
                    <button className="text-[#9c7349] dark:text-[#f48c25]/80"><span className="material-symbols-outlined">more_horiz</span></button>
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-[#1c140d] dark:text-[#fcfaf8]">
                    大家有推荐的适合情侣约会的餐厅吗？环境要好一点，菜品有特色，人均200左右。
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[#9c7349] dark:text-[#f48c25]/80 text-sm">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-1.5 hover:text-[#f48c25] transition-colors"><span className="material-symbols-outlined text-lg">favorite</span> 45</button>
                      <button className="flex items-center gap-1.5 hover:text-[#f48c25] transition-colors"><span className="material-symbols-outlined text-lg">chat_bubble</span> 59</button>
                    </div>
                    <button className="flex items-center gap-1.5 hover:text-[#f48c25] transition-colors"><span className="material-symbols-outlined text-lg">share</span> 分享</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Members Widget */}
            <div className={`${bgSurface} p-4 rounded-xl border ${borderPrimary} dark:border-[#f48c25]/30`}>
              <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-3 text-[#1c140d] dark:text-[#fcfaf8]">圈子成员 (2,345)</h3>
              <div className="grid grid-cols-5 gap-3">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-center bg-no-repeat aspect-square bg-cover rounded-full bg-gray-200" style={{ backgroundImage: `url("https://source.unsplash.com/random/100x100?face&sig=${i}")` }}></div>
                ))}
                <Link to="#" className="flex items-center justify-center bg-[#f48c25]/20 dark:bg-[#f48c25]/30 aspect-square rounded-full text-sm font-bold text-[#f48c25] dark:text-[#f48c25]/90 hover:bg-[#f48c25]/30 dark:hover:bg-[#f48c25]/40 transition-colors">全部</Link>
              </div>
            </div>

            {/* Related Groups Widget */}
            <div className={`${bgSurface} p-4 rounded-xl border ${borderPrimary} dark:border-[#f48c25]/30`}>
              <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-3 text-[#1c140d] dark:text-[#fcfaf8]">相关圈子</h3>
              <div className="space-y-4">
                {[
                  { name: "鹤乡摄影爱好者", desc: "分享盐城风光，交流摄影技巧", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTa1OFBuvXJv9Hfe85qhUw-C_4enu4er6JEAVD3LxgryHL5gnhLzbBE6Q0hft7EGQTZkEE4QqsmaCUjZlhVnKIU1eO2L4sP7sO07DhVEGoALjsmwUgAWlBFK8AFA_P4OS5XDGbZVR15fYU3KvUwVwxeteT9k5B-w2-fZL1sghRXF0wjJelm-bDd_Qyb03d5M7lNjuL2_gS3w4E-I4gIukJdC60A66rZqQEN_0p_8b7FxBRQ5BAkxNttTtPMh71uwOL1CWVYuGm31_l" },
                  { name: "盐城周末去哪儿", desc: "发现周末好去处，遛娃、探店、露营", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD37QuiUIhoBhdPQlpIn4nBsbqkO2aS7QXqbGFmedgAuCO75KgKV2M9dY_XFKe9Y8OWaKzhQWoxrRajcnOKU81SPinA2BzMKXDEbWRP5jr6K1NVBG7w5SZV9b0gWCkpWn_PCUXXF_zOMiMyz1BHROLWeg3mJzPMp79RBtMpWdvIJhPBQ9y8YfUhOojlkthVKWS550joK5LFYW9XiLBOKT7sdGrctM61jdWN3jxdehXs_6BymvtPmmuJenvIUGlZTehZu0HoBIaqWMC6" }
                ].map((group, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 flex-shrink-0" style={{ backgroundImage: `url("${group.img}")` }}></div>
                    <div className="flex-1">
                      <p className="font-bold text-[#1c140d] dark:text-[#fcfaf8]">{group.name}</p>
                      <p className="text-xs text-[#9c7349] dark:text-[#f48c25]/80 line-clamp-1">{group.desc}</p>
                    </div>
                    <button className={`flex items-center justify-center rounded-full h-8 px-3 bg-[#f48c25]/20 dark:bg-[#f48c25]/30 text-xs font-bold text-[#f48c25] dark:text-[#f48c25]/90 hover:bg-[#f48c25]/30 dark:hover:bg-[#f48c25]/40 transition-colors`}>加入</button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <CreatePostModal 
        open={isModalOpen} 
        onCancel={() => setIsModalOpen(false)} 
        onSuccess={() => {
          setIsModalOpen(false);
          // 这里可以添加刷新列表的逻辑
          alert("发布成功！");
        }}
      />
    </div>
  );
};

export default CommunityDetail;