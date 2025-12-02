import React from 'react';
import { Link } from 'react-router-dom';

const CommunitiesData = [
    {
        title: "盐城美食探店",
        desc: "分享盐城最好吃的餐厅与小吃",
        stats: "成员: 1.2k | 帖子: 5.6k",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV44sE4QgDjACrSQnCvVSPlc7ed9yJEF9ld88dh6AR9fqstA2iB5Vm8Yp1qzAZuDU2kpNLR8oZzabq5mlfLyrCr-k7kd6uJeUL9SPb7H5ftRkUBJDoNud0PuC98j4VwyydYYhtS6LP8MUesivYr-RDbsLwEaQ4OfRkCJZ--bTeDJ1oLlY8Jhobai__ixnKvbV5bM3X4yorHbYpL6u8Lb-mxKjADcA8noxFxClsSE7bFnMZPtpCIbC1HSainfthurYMx6m2b6bFSfQ6"
    },
    {
        title: "丹顶鹤摄影协会",
        desc: "用镜头捕捉丹顶鹤的优雅瞬间",
        stats: "成员: 875 | 帖子: 2.1k",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg4zrFNZz9kltLvtvO4DWnATfV5InHgEhA6QXPVs1OR2SBaDTk-4ieTtydBdkMkvmRk-cN_Emkllk_Xitkv_URLnfRN2oOE0cpKsrdGmHqWcQClHt0cJmg9dCvODDz3p0HWbsmSd5Vbk26-5VKoTsp_jwS4VmENE2htsXmY757HfqaZGuuaBY0I0iI35dT5JZ4oGKAdFyngewNRw9RlUjRzzkVwMIiHC6UH1hsp32Ea0a4AHBbkrpDlvo1pgIVyvf9mmRvD2DRc8uE"
    },
    {
        title: "周末徒步/骑行",
        desc: "一起探索盐城的自然风光",
        stats: "成员: 2.3k | 帖子: 9.8k",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW2xPG3CNME88w9Y0tyislrTDOVedUla27PR-gi_trN2Szeyq5otFNiMuygL74e9L9IxyvwCAmCPm64xePTHJKphIn3eJe9R8euTA_4992j0MNIMtZaMckSltLcsusEesIsX7YjzhEDyuY9X9Wu5jkgn56WjsgBoNRm8IDK7h2qh5dO6n_xMvELa_geIFpSspck04aANynDm9mGRENyiaBDICF6gvwQEGXfmHoJRlXTBTMrlbOLDGjon6aCnvvDo2tNk8GB8G_xoS4"
    },
    {
        title: "本地亲子活动",
        desc: "分享遛娃好去处和育儿经验",
        stats: "成员: 1.5k | 帖子: 3.4k",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3hZVQ9uidTd6AlyHSderLMu0bJIDT6OLUaNCh1Q_cCeRDhgCSBkVt-0TwgCQsQ52-mFuDjLKAiWkvUN-OfWSpjYTnNzCceaGc2qnwlwfxljNKo4Jeg4166YnLfvuc0l25rja35TAPQXw0NS3F40_2f2UvF9wWL43sPTQ2WylBStvb61XxsFiLAHUKwU9HmJkSufkFnnDDukUS-0ouWPg6M2jQV9mNeyMXFf_0J2ZCsjbfix3-7RZ8TtfZvSd7eW-UrDKwxCdeIh50"
    },
    {
        title: "二手闲置分享",
        desc: "让闲置物品流动起来，环保生活",
        stats: "成员: 3.1k | 帖子: 12.5k",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaLUe8__FmdmInOu61pA9_QA2oYbZvT4x8h8od5rSkjDcTFw5St1P6iSm0t4UkTsGTNMWqxel2cTi_T5F3ZKW9XcnL6dCP9yySHNrdctG_-J-ZEGblAYx8j36fnYF0wP9dOd7ZY_CCseLbt8FG9N_rh6KS6nyLL0Fn7BAke1Kiy-uqDVEWVuYBuxM8A7d4GCas5g6DWqEb9zIl1bos8MLD4acqFXP3C3BGAbDmofXlU6nv_3pLOnJ1pbbDgdCDgzWD_34rJolcYVqB"
    },
    {
        title: "盐城历史文化研究",
        desc: "一同探寻盐城的历史与文脉",
        stats: "成员: 450 | 帖子: 1.2k",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD278sGBnfgTMsfldIxQmzEeeeKTUQ5kA270SxaKWQOfrd6uaS1AnR0UXK2mG6YKNIzL83gkrpGK6FfVGZUX9xFmqzOflrR8zC9LsGPPJ3hgw_fw33zIAWynKXN9mnAru9PadUVJc2oTjLZzB2byMo-RubPx6BRks6tUpZFjpReb5ElmGIjkQ2VkfmbcDqAJz3jcFvWpiI_Y9mBmafq5g7Gkv32ZNkTjBqjoUflHGLIfasWsOI0H-t4S7FLW7WaTBlgpd94qxpgxox"
    },
    {
        title: "宠物交流中心",
        desc: "铲屎官们的聚集地，分享养宠乐趣",
        stats: "成员: 980 | 帖子: 4.2k",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSrHaY7AJNyA9U2zRRXVL9UfkA10nFNCWvA2ERRrpa-5fRAPHcphzcypcb6v6x3K87Bxi-ZOPJJ0BMZfH2dlmV1Vxr44MEEfDUWG55eYn570QzoGX5PhaTRGbrfkl0fUhQSP-Lhw3moCeLA9FJSbZj14jXjH7LEr4NeHTixkJp7Wq23Sx1ZeB0evaPmmdbTWLKq7YRY1wwaIo4X4QgJcDuEkVoIp8JX65vlldmTgkUAz_OuDBl8pBvvAYytZXuhGtDNfl4nGcSCCmv"
    },
    {
        title: "篮球爱好者",
        desc: "无兄弟，不篮球！周末约球走起",
        stats: "成员: 1.8k | 帖子: 6.7k",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyo0wvHslo4nvhw9QRVXG7naBdIIqxHW7JCoUmxxkl730DwqK3LoGAQ16l4E10UWhF7AQiEzDvHqmyYVTCoBrqqg_4Djjr059pNBKELqcrAXXfE4yW0bllv7mIdS8ZTXkSsPcUK0RRRLqNHz-NeHS2VJj9fWGSzVIHtaYlmhKOziwdrNQ-2Uk_lfsR0IDorqAVC8N4GOhkJkUT_ikkgF_gaUZMvzmV2WW4O8_UVpnIH3t4UWD5oV8jcOk-CBp9s1ka7W6ZFvC6Z8cK"
    }
];

const LocalCommunity: React.FC = () => {
    return (
        // 使用原设计的暖色背景 (#f8f7f5)
        <div className="flex flex-col flex-1 w-full  dark:bg-[#221910] min-h-screen">

            <div className="flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col flex-1 w-full gap-6">

                    {/* Page Heading */}
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <div className="flex min-w-72 flex-col gap-2">
                            <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#1c140d] dark:text-[#fcfaf8]">
                                发现属于你的盐城圈子
                            </p>
                            <p className="text-base font-normal leading-normal text-[#9c7349] dark:text-[#a88e73]">
                                探索和加入你感兴趣的本地社群
                            </p>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="px-4 py-3">
                        <label className="flex flex-col min-w-40 h-12 w-full">
                            <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                                <div className="text-[#9c7349] dark:text-[#a88e73] flex bg-[#f4ede7] dark:bg-[#2a2218] items-center justify-center pl-4 rounded-l-xl border-r-0">
                                    <span className="material-symbols-outlined">search</span>
                                </div>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-[#1c140d] dark:text-[#fcfaf8] focus:outline-0 focus:ring-2 focus:ring-[#f48c25]/50 border-none bg-[#f4ede7] dark:bg-[#2a2218] h-full placeholder:text-[#9c7349] dark:placeholder:text-[#a88e73] px-4 pl-2 text-base font-normal leading-normal"
                                    placeholder="搜索圈子名称或关键词..."
                                    defaultValue=""
                                />
                            </div>
                        </label>
                    </div>

                    {/* Chips */}
                    <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar">
                        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f48c25]/20 text-[#f48c25] dark:bg-[#f48c25]/30 dark:text-[#f48c25] px-4">
                            <p className="text-sm font-medium leading-normal">默认排序</p>
                            <span className="material-symbols-outlined text-base">expand_more</span>
                        </button>
                        {["成员最多", "最新创建", "最活跃"].map((label) => (
                            <button
                                key={label}
                                className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f4ede7] dark:bg-[#2a2218] hover:bg-[#f48c25]/20 dark:hover:bg-[#f48c25]/30 text-[#1c140d] dark:text-[#fcfaf8] hover:text-[#f48c25] dark:hover:text-[#f48c25] transition-colors px-4"
                            >
                                <p className="text-sm font-medium leading-normal">{label}</p>
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                        {CommunitiesData.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-3 pb-3 bg-[#f4ede7] dark:bg-[#2a2218] p-3 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1"
                            >
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                                    style={{ backgroundImage: `url("${item.img}")` }}
                                ></div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-base font-bold leading-normal text-[#1c140d] dark:text-[#fcfaf8]">{item.title}</p>
                                    <p className="text-sm font-normal leading-normal text-[#9c7349] dark:text-[#a88e73]">{item.desc}</p>
                                    <p className="text-xs font-normal leading-normal text-[#9c7349] dark:text-[#a88e73]">{item.stats}</p>
                                </div>
                                <Link
                                    to="/community/detail"
                                    className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-lg h-9 px-3 bg-[#f48c25] text-white text-sm font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity"
                                >
                                    进入圈子
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center p-4">
                        <nav className="flex items-center gap-2">
                            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f4ede7] dark:bg-[#2a2218] text-[#9c7349] dark:text-[#a88e73] hover:bg-[#f48c25]/20 hover:text-[#f48c25] transition-colors">
                                <span className="material-symbols-outlined text-xl">chevron_left</span>
                            </button>
                            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f48c25] text-white text-sm font-bold">1</button>
                            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f4ede7] dark:bg-[#2a2218] text-[#1c140d] dark:text-[#fcfaf8] hover:bg-[#f48c25]/20 hover:text-[#f48c25] transition-colors text-sm font-medium">2</button>
                            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f4ede7] dark:bg-[#2a2218] text-[#1c140d] dark:text-[#fcfaf8] hover:bg-[#f48c25]/20 hover:text-[#f48c25] transition-colors text-sm font-medium">3</button>
                            <span className="text-[#9c7349] dark:text-[#a88e73]">...</span>
                            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f4ede7] dark:bg-[#2a2218] text-[#1c140d] dark:text-[#fcfaf8] hover:bg-[#f48c25]/20 hover:text-[#f48c25] transition-colors text-sm font-medium">10</button>
                            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f4ede7] dark:bg-[#2a2218] text-[#9c7349] dark:text-[#a88e73] hover:bg-[#f48c25]/20 hover:text-[#f48c25] transition-colors">
                                <span className="material-symbols-outlined text-xl">chevron_right</span>
                            </button>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LocalCommunity;