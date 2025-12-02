import React from 'react';
import { Link } from 'react-router-dom';

const PostDetail: React.FC = () => {
  // 定义页面专属颜色 (蓝色系)
  const primary = "text-[#3498DB]";
  const bgPrimary = "bg-[#3498DB]";
  const borderPrimary = "border-[#3498DB]";
  const hoverPrimary = "hover:text-[#3498DB]";
  const bgPrimaryLight = "bg-[rgba(52,152,219,0.1)]";

  return (
    <div className="flex w-full justify-center p-4  min-h-screen">
      <div className="flex w-full max-w-7xl gap-8">
        
        {/* Left Column: Post and Comments */}
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-6 rounded-xl bg-white dark:bg-[#2d231a]">
            
            {/* Breadcrumbs */}
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <Link className="text-gray-500 dark:text-gray-400 hover:text-[#3498DB]" to="/">首页</Link>
              <span className="material-symbols-outlined text-sm text-gray-500 dark:text-gray-400">chevron_right</span>
              <Link className="text-gray-500 dark:text-gray-400 hover:text-[#3498DB]" to="/community">本地社区</Link>
              <span className="material-symbols-outlined text-sm text-gray-500 dark:text-gray-400">chevron_right</span>
              <span className="truncate text-[#333333] dark:text-[#e0e0e0]">大丰麋鹿自然保护区游记</span>
            </div>

            {/* Page Heading */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-[#333333] dark:text-[#e0e0e0]">
                大丰麋鹿自然保护区游记：与神兽的近距离接触
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">发布于 2023年10月26日</p>
            </div>

            {/* Author Info Bar */}
            <div className="flex items-center justify-between border-y border-[#F0F2F5] dark:border-[#3e3226] py-4">
              <div className="flex items-center gap-4">
                <div 
                  className="h-12 w-12 rounded-full bg-cover bg-center" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAc0PxjkTLW6EHxhzh9yxnMkScD8gLKIQ8a_s0dRj42jLv8hc2AGzqtnNxasauRriWa-uhKwWTFooI049Mnx8Ex62a-51YPskkOc1c1kswCrOUlXxfjLSXPD5O5BMTNY94cow_rW-pTZiqL3gXPKSsoYTUKFi2kVGgJezLZZ-4FLH0G1Mb3uZ26FbIM0_FPCTO7u7S5GS2Z0LTPklg-enYCCGhhduDHXPfPwS0n7RGD8m0_jHV4n95Tr2VaC9fl1ufLvYD_MeL0ggfQ")' }}
                ></div>
                <div className="flex flex-col">
                  <p className="font-bold text-[#333333] dark:text-[#e0e0e0]">爱旅游的小鹿</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">资深驴友</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className={`flex h-9 min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border ${borderPrimary} px-4 text-sm font-medium ${primary} hover:${bgPrimaryLight}`}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
                  <span className="truncate">关注</span>
                </button>
                <button className="flex h-9 min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-[#F0F2F5] dark:border-[#3e3226] bg-[#F8F7F5] dark:bg-[#221910] px-4 text-sm font-medium text-gray-500 dark:text-gray-400 hover:border-gray-400 transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>mail</span>
                  <span className="truncate">私信</span>
                </button>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none text-[#333333] dark:text-[#e0e0e0] dark:prose-invert prose-img:rounded-lg leading-relaxed">
              <p className="mb-4">上周末，我和家人一起去了心心念念的大丰麋鹿自然保护区，那真是一次难忘的经历！盐城作为麋鹿的故乡，这里的自然风光和生态环境都让人叹为观止。我们看到了成群的麋鹿在滩涂上悠闲地觅食、嬉戏，场面非常壮观。</p>
              <figure className="mb-4">
                <img 
                  className="w-full rounded-lg" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmI8pRnTNAVoiv4BEJrlKdOt06zULdhg354Y-HxpaLSIO0U6laIVmsl_UDckR4lFCIG98WsfpLRaXiqSKw-0iAum4YwU_stFrn5eIeroezSJyZwSdGONKIU6FiHtX3ihtPfZSug9D2mLFTP8ublfHM-paMDcyPCPXfKY9FMRX-fQnJv_feLJdZY8iPknxW2z9rgJVqyIVzeVGZun9tXZjyqVlLG63GHpkPmsBkSd-mJmOqGc1nXF6liyP_oNBj4P5mJyP9KfTtZ8Ft" 
                  alt="麋鹿群"
                />
                <figcaption className="text-center text-sm text-gray-500 mt-2">成群的麋鹿在水中嬉戏</figcaption>
              </figure>
              <p className="mb-4">保护区很大，建议乘坐观光车游览。沿途的风景美不胜收，除了麋鹿，还能看到丹顶鹤、白鹭等多种珍稀鸟类。空气清新，远离城市喧嚣，感觉整个身心都得到了放松。对于喜欢自然和动物的朋友们，这里绝对是必游之地。</p>
              <p>小贴士：最佳观赏季节是春秋两季，天气宜人。记得带上望远镜，可以更清楚地观察远处的动物们。另外，保护区内的蚊虫较多，请做好防蚊措施。</p>
            </article>

            {/* Attachments */}
            <div className="flex flex-col gap-3 rounded-lg border border-[#F0F2F5] dark:border-[#3e3226] p-4">
              <h3 className="text-md font-bold text-[#333333] dark:text-[#e0e0e0]">附件 (2)</h3>
              <ul className="space-y-2">
                {[
                  { name: "大丰麋鹿保护区游览路线图.pdf", icon: "description" },
                  { name: "本次旅行高清照片集.zip", icon: "photo_library" }
                ].map((file, idx) => (
                  <li key={idx} className="flex items-center justify-between rounded-md bg-[#F8F7F5] dark:bg-[#221910] p-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#F39C12]">{file.icon}</span>
                      <span className="text-sm font-medium text-[#333333] dark:text-[#e0e0e0]">{file.name}</span>
                    </div>
                    <a className={`text-sm font-bold ${primary} hover:underline`} href="#">下载</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-center gap-4 border-t pt-4">
              <button className={`flex items-center gap-2 rounded-full ${bgPrimaryLight} px-4 py-2 text-sm font-medium ${primary} transition-colors hover:bg-[#3498DB]/20`}>
                <span className="material-symbols-outlined">thumb_up</span>
                <span>赞 (128)</span>
              </button>
              <button className="flex items-center gap-2 rounded-full bg-[#F8F7F5] dark:bg-[#221910] px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors hover:bg-gray-200 dark:hover:bg-[#3e3226]">
                <span className="material-symbols-outlined">bookmark</span>
                <span>收藏 (42)</span>
              </button>
              <button className="flex items-center gap-2 rounded-full bg-[#F8F7F5] dark:bg-[#221910] px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors hover:bg-gray-200 dark:hover:bg-[#3e3226]">
                <span className="material-symbols-outlined">share</span>
                <span>分享</span>
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-[#2d231a] p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#333333] dark:text-[#e0e0e0]">评论 (3)</h3>
            
            {/* Comment List */}
            <div className="flex flex-col gap-6">
              {[
                { name: "盐城美食家", time: "2小时前", content: "写得真好！照片拍得太美了，勾起了我上次去玩的回忆。那里的生态环境确实保护得不错。", likes: 15, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn3N-VV9zTNhJW4f8l5w_w8485g0zFAqZl9464YWXWb5WhA_Mfo_cefoiCq-KSU6Gf4ugUspFzKX04kdOK-Zc5cLiMc4bdtVQYhtEZDmoo8RQLWp6NW-NKgXKaF2rusqdQejbY-safoizkUwcQYSFq0GbgbPj15NjBh1kR3bQtyfS6Y1ESuv6Dl6vbO38j5jJmC0Opt8VEynHm5FEgGBMNny3M-qJtHFSVdGk0VrbGK-INcm3NkpMQWCJx0K6PQ7C2SbTlMQNN6onJ" },
                { name: "风一样的男子", time: "1小时前", content: "感谢楼主的分享和提醒！正准备下周去，防蚊措施这个小贴士太有用了！", likes: 8, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMILLyom-1tc4aO5g4fgJLHjn8Wvr0paFCILPmFp88BnIX6InlPaVVAXccOqfaeOGbeHXHw5k3qIetbp6F7ot_9HCV4_isO2HT4AzV2vW9-yWG3Gwj8zd9FB40dm18bnCLBG424DX26Pc4af2hMmIKG6CpadrNygNtzUIT4q5q5zA71TSKnG2gkdv3LXX3y8P_aX4vGehwn67pSVkr2wOtDphHMQFaEDn4Uff93IrW0M8uThGPcQNW77Nl89_CWcp8WmfZOUXEwlBB" }
              ].map((comment, idx) => (
                <div key={idx} className="flex gap-4 border-b border-[#F0F2F5] dark:border-[#3e3226] pb-4">
                  <div className="mt-1 h-10 w-10 flex-shrink-0 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${comment.avatar}')` }}></div>
                  <div className="flex flex-grow flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#333333] dark:text-[#e0e0e0]">{comment.name}</span>
                        <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">1楼 · {comment.time}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <button className={`flex items-center gap-1 text-sm text-gray-500 hover:${primary} transition-colors`}>
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>thumb_up</span>
                          <span>{comment.likes}</span>
                        </button>
                        <button className={`flex items-center gap-1 text-sm text-gray-500 hover:${primary} transition-colors`}>
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>reply</span>
                          <span>回复</span>
                        </button>
                      </div>
                    </div>
                    <p className="text-base leading-relaxed text-[#333333] dark:text-[#e0e0e0]">{comment.content}</p>
                  </div>
                </div>
              ))}

              {/* Nested Comment Example */}
              <div className="flex gap-4">
                <div className="mt-1 h-10 w-10 flex-shrink-0 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQfJYMiqr8gvJu84bGQMAu276d8L7Q3Zu5fpR8QsxBxeVTe4BnGycgcjRpqMt-NxBq5ZCweLTHt52lZ6dcXKVcdzyeq4B1zOhYgjT5v8jKJFsP0gjiYX7dx2JpNtVreqIaCzWobf57zIqVj-fpVY0RhGToyl--flYHiWPeVlQFDk4TggZGNgVjmgcp6u2mzIQzC_o-ra-72N3CskK_Ill76eLzDN6Iai_z1PAf_zOJEaTcwio9OL2XOFRjjB8id6b_7u01wEVBAeJG")' }}></div>
                <div className="flex flex-grow flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#333333] dark:text-[#e0e0e0]">摄影爱好者</span>
                      <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">3楼 · 30分钟前</span>
                    </div>
                    {/* ... actions ... */}
                  </div>
                  <p className="text-base leading-relaxed text-[#333333] dark:text-[#e0e0e0]">请问楼主，用的是什么镜头拍的照片？焦段多少？想参考一下。</p>
                  
                  {/* Reply */}
                  <div className="mt-4 flex gap-3 rounded-lg bg-[#F8F7F5] dark:bg-[#221910] p-4">
                    <div className="mt-1 h-8 w-8 flex-shrink-0 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARTCwF5q1JiR-MdXYi3Ah2tXF8FhFKGS5wgTZftHtWeUiYlmgm7iIuNlGxr8qHfn2CYA3Hf-X0_hquiO9a572KtT2HeidVKvy5DVIUuojyPmnPjV0PfE77906Zj2MqpRq1drK67XFFcsg2L6j4ZviovWs6KV0-osxH7nUeJChctO4ohxwGWWMv6ApchyCNq-382Ovs8zDXCU4enjdus8g_9lsGWM7UMRDO5Yw14IqFio34wJ3Crpr4iLPn5LL9199cyg7ZLCd--hgr")' }}></div>
                    <div className="flex flex-grow flex-col gap-2">
                      <div>
                        <span className="font-bold text-[#333333] dark:text-[#e0e0e0]">爱旅游的小鹿</span>
                        <span className={`ml-1 rounded ${bgPrimaryLight} px-1.5 py-0.5 text-xs font-medium ${primary}`}>作者</span>
                        <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">回复 @摄影爱好者 · 10分钟前</span>
                      </div>
                      <p className="text-sm leading-relaxed text-[#333333] dark:text-[#e0e0e0]">我用的是70-200mm的长焦镜头，拍远处的麋鹿特写效果比较好！</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment Input */}
            <div className="sticky bottom-0 flex flex-col gap-4 rounded-xl bg-white dark:bg-[#2d231a] p-4 shadow-inner border-t border-gray-100 dark:border-[#3e3226]">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPNrwqnp2mQCNxF9-WGQnM5UDCmI5ovxI2kz0u8OV7Ipip1-CsGlVkGP987L3Lyizz9hk_t6w4AYz8y-_Wbp1Qa8KQDEHlrbfmlldzlDt0PJBM6NvQU3fB11he3qTEc-rKv9WnfPqutvI7iTPPDLwSIHByIsHx5PMTUz_99lGf_vqdAtLMOAoGlDzBi_j3OC-YTDxd91MVnxNWfOv5gr0xuwe-OVaTzfTauXS1kE_qW4WqjmFqwIFlQKetWkQ422pm7ef5jDhwDNOE")' }}></div>
                <div className="flex w-full flex-col gap-3">
                  <textarea 
                    className={`min-h-[100px] w-full rounded-lg border border-[#F0F2F5] dark:border-[#3e3226] bg-[#F8F7F5] dark:bg-[#221910] p-3 text-sm placeholder:text-gray-400 focus:border-[#3498DB] focus:ring-[#3498DB] focus:ring-1 outline-none text-[#333333] dark:text-[#e0e0e0]`} 
                    placeholder="写下你的想法..."
                  ></textarea>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-[#3e3226]">
                        <span className="material-symbols-outlined">sentiment_satisfied</span>
                      </button>
                      <button className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-[#3e3226]">
                        <span className="material-symbols-outlined">image</span>
                      </button>
                    </div>
                    <button className={`flex h-10 min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full ${bgPrimary} px-6 text-sm font-bold text-white hover:opacity-90 transition-opacity`}>
                      <span>发布评论</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="hidden w-1/3 flex-col gap-6 lg:flex">
          {/* Author Card */}
          <div className="rounded-xl bg-white dark:bg-[#2d231a] p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-[#333333] dark:text-[#e0e0e0]">关于作者</h3>
            <div className="flex flex-col items-center gap-4 text-center">
              <div 
                className="h-20 w-20 rounded-full bg-cover bg-center" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDencykZ8UaPmyCFR6C8Vipy_-Ti3nhPOFMr4pG7w3tlrtFf-1VaDQ9wCE9ooFos9FjePX8sTZA7eHrYUSmEoNUDf5SyNS5Mtuh3nFYBsKJRmffbtYujPxId9sOuY21qebpQU_sT4QUWph1C3TlH1WCDSGZYg5pdQ0WyA39ZDDseh8eHFEcahgmENF1IRx16ylK6WZJx-gp2ZpJKzoOxOStuXWMpZ4TlkCIQ-KRNfuXpxBAceAWWzr2iiqk5Hl5y7NZs2XVJvpJjNyI")' }}
              ></div>
              <div>
                <p className="text-lg font-bold text-[#333333] dark:text-[#e0e0e0]">爱旅游的小鹿</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">记录生活，分享美好</p>
              </div>
              <div className="flex w-full gap-4">
                <button className={`flex h-10 flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-full ${bgPrimary} text-sm font-bold text-white hover:opacity-90`}>关注</button>
                <button className="flex h-10 flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[#F0F2F5] dark:border-[#3e3226] bg-[#F8F7F5] dark:bg-[#221910] text-sm font-medium text-gray-500 dark:text-gray-400 hover:border-gray-400 transition-colors">私信</button>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="rounded-xl bg-white dark:bg-[#2d231a] p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-[#333333] dark:text-[#e0e0e0]">相关帖子</h3>
            <ul className="space-y-4">
              {[
                { title: "探秘盐城八大碗，寻找舌尖上的记忆", stats: "128 赞 · 45 评论" },
                { title: "周末好去处：荷兰花海一日游攻略", stats: "99 赞 · 21 评论" },
                { title: "盐城串场河，一条河读懂一座城", stats: "87 赞 · 18 评论" }
              ].map((post, i) => (
                <li key={i} className="group">
                  <a className={`font-medium text-[#333333] dark:text-[#e0e0e0] ${hoverPrimary} transition-colors`} href="#">{post.title}</a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{post.stats}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default PostDetail;