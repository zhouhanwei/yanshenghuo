/*
 * @Author: zhouhanwei sgzhouhanwei@163.com
 * @Date: 2025-12-02 15:40:39
 * @LastEditors: zhouhanwei sgzhouhanwei@163.com
 * @LastEditTime: 2025-12-02 16:36:34
 * @FilePath: /yxc-ssr/src/pages/TraditionalArts.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Link } from 'react-router-dom';

const FestivalData = [
    {
        title: "大丰荷兰花海郁金香文化月",
        desc: "每年3-5月举办。拥有“中国郁金香第一花海”美誉，3000多万株郁金香竞相绽放，异域风情浓郁，是盐城春季旅游的顶流名片。",
        // 郁金香花海的高清图
        img: "https://images.unsplash.com/photo-1520013583274-1a5e78c8c7c9?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "黄海湿地麋鹿文化节",
        desc: "依托世界自然遗产——黄海湿地举办。在这里可以近距离观赏野生麋鹿群奔腾的壮观景象，感受人与自然和谐共生的生态之美。",
        // 湿地与鹿的高清图
        img: "https://images.unsplash.com/photo-1484406566174-9da000c245dd?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "东台西溪七夕文化节",
        desc: "源于国家级非遗“董永传说”。每年七夕，古镇西溪灯火璀璨，举办大型实景演出与民俗活动，演绎千古爱情绝唱。",
        // 古镇夜景与灯笼的高清图，符合七夕氛围
        img: "https://images.unsplash.com/photo-1533499752589-9e8c3725c404?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "丹顶鹤国际湿地生态旅游节",
        desc: "盐城是“丹顶鹤的故乡”。冬季时节，数万只候鸟飞抵盐城越冬。该节日旨在宣传湿地保护，是摄影爱好者和观鸟者的盛会。",
        // 丹顶鹤或湿地飞鸟的高清图
        img: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=2187&auto=format&fit=crop"
    },
    {
        title: "大纵湖大闸蟹美食节",
        desc: "金秋十月，蟹肥菊黄。在里下河水乡大纵湖，游客不仅能品尝到顶级的大闸蟹，还能体验“芦荡迷宫”的渔家风情。",
        // 湖景或秋季水乡的高清图
        img: "https://images.unsplash.com/photo-1616854619379-38b811802951?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "黄海森林音乐节",
        desc: "在华东地区最大的平原森林公园中举办。结合森林、草地、音乐与露营，是现代年轻人释放活力、回归自然的年度狂欢。",
        // 森林音乐节/露营氛围的高清图
        img: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2070&auto=format&fit=crop"
    }
];

const TraditionalArts: React.FC = () => {
    return (
        <div className="layout-content-container flex flex-col max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-10 md:py-16">

            {/* 标题区域 */}
            <div className="flex flex-wrap justify-between gap-4 py-8 text-center md:text-left">
                <div className="flex w-full flex-col gap-3 items-center">
                    <h2 className="text-[#1f2937] dark:text-[#e5e7eb] text-4xl md:text-5xl font-black tracking-tighter">节庆活动</h2>
                    <p className="text-[#4b5563] dark:text-[#9ca3af] text-base md:text-lg font-normal leading-normal max-w-2xl">
                        探寻盐阜大地的非物质文化遗产与传统艺术瑰宝
                    </p>
                </div>
            </div>

            {/* 艺术列表 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                {FestivalData.map((item, index) => (
                    <div
                        key={index}
                        className="group flex flex-col gap-4 pb-4 overflow-hidden rounded-xl bg-white dark:bg-gray-800/50 shadow-sm transition-shadow hover:shadow-xl dark:hover:shadow-[#c83c23]/10 border border-gray-200 dark:border-gray-700/50"
                    >
                        {/* 图片区域 */}
                        <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                                style={{ backgroundImage: `url("${item.img}")` }}
                            ></div>
                        </div>

                        {/* 文字区域 */}
                        <div className="px-5">
                            <h3 className="text-[#1f2937] dark:text-[#e5e7eb] text-xl font-bold leading-tight">{item.title}</h3>
                            <p className="text-[#4b5563] dark:text-[#9ca3af] text-sm font-normal leading-normal mt-2">{item.desc}</p>
                        </div>

                        {/* 链接按钮 */}
                        <div className="px-5 mt-auto">
                            <Link
                                className="inline-block text-[#c83c23] text-sm font-semibold group-hover:underline"
                                to="/festivals/detail" // 修改这里
                            >
                                了解更多 →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TraditionalArts;