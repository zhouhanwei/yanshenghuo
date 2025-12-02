/*
 * @Author: zhouhanwei sgzhouhanwei@163.com
 * @Date: 2025-12-02 15:40:39
 * @LastEditors: zhouhanwei sgzhouhanwei@163.com
 * @LastEditTime: 2025-12-02 16:20:59
 * @FilePath: /yxc-ssr/src/pages/TraditionalArts.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Link } from 'react-router-dom';

const ArtsData = [
    {
        title: "东台鱼汤面",
        desc: "汤白汁浓，滴点成珠，清爽不腻。源于清乾隆年间，是盐城早餐文化的代表。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCN4MF5_1oQpANQIeEge8JQTsSUKpBi1aXBLSgNJj2_v86cOYLemAsIAkqaYskxKjI2BD29AQdmaBkbroMzksl9hnCvRB-e2xe1uOGgxeBzjNkauFz0_OVpiBbCPVO3HU8Thtc9SfQQfuqODbslGGrVqXmUUZDHADnvTi3LAEr7JlhezWm-HvCy3qjMjyfZMusdxr8rRVElcr2pbPmoFdxJ6Urzkm7SBNH672iI_pdtL5mvUjepDZbSWt8jU2kAq-qgle5mo7A-sXJ"
    },
    {
        title: "阜宁大糕",
        desc: "色白如雪，片薄如纸，香甜软糯。寓意“步步高升”，是节日庆典的必备佳品。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABZ9bnFdkcUwOMobq1JmD1gNTln0yI4eAG3ca7OrhrFlwfE6r598mJpmWO3aOnjosdYlMJbSTwTmRF0mPglmfWrnyKwu3FCIVIKzUoy6QC2-T5eu0HcTyRPGfTJ9-X59Lx4W-XqgwA81DYI3_wYZQQ25NpeLi2wANUKDFtEuvdFX23CCfaYba4svHWAoLW4FY0DLviPGWHM0vvMwVtmu5YH4b453EH8GLII4srAjvTHbVTLgiTXA1KLxDRe4sTryfzEDIIj_kBq-2u"
    },
    {
        title: "建湖猪肉丸",
        desc: "肉质紧实，Q弹多汁，通常红烧或煲汤，口感鲜美，是淮扬菜系中的家常名菜。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQqU-mnlQDz5Lf-hkwFNl84pQHwG3ycAjo6IrdU63v18CvzpfErn6W1FOqVsLguvKAAeuek-yfz_sRAy88MPupI5blXIwaTirJbUT9oyxpTQkt4ubEfNCPLrW2_EGyL7idAA6K716rmp_0noT012xFUVmlTnLSuDdazskH3-WZ8xIQOYaCyI4mudV4nhPWvkTnYvyjixyhdVW1W_NgF08yCw67Q8Hwg7c_MZn4aSHUCy6S_G6f9uQ45AcA0fWivNv9MUmJsRd7q2cU"
    },
    {
        title: "射阳米饼",
        desc: "采用优质射阳大米制作，两面金黄，外脆内软，带有一股浓郁的天然米香。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV2MsAwO6jyvUweD11QHtXLMv96CnMNL5KfUjYBNhPykSJyDO9nlTFOvcRg64BzgjVz3sy-q_BMpB8fyf5DhAbr_nt45hNkaZYLqPph_-turyPEf7AYZ6j7-jEALcW8EdKhgafNOSNREKtZv5OXlRf01VFJkVGqm7q5e-J3n41poMSJsX_LCC5RreeeOyyki56-127Ec9E3hckrH60TWnQ9UL0Aq0W4WRAPV5Ssi_q6ZzAH5IEIZ-3aFXXRb2FWyh-CR6aCX3J-7Lq"
    },
    {
        title: "盐城八大碗",
        desc: "半汤半菜，如红烧肉、鸡丝粉丝等，体现了里下河地区淳朴、豪爽的待客之道。",
        // 这是一个高质量的宴席占位图，风格与美食相符
        img: "https://images.unsplash.com/photo-1541544744-cc6f03a6bc01?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "伍佑醉蟹",
        desc: "选用大纵湖清水大闸蟹，辅以陈年花雕醉制，蟹黄丰满，酒香扑鼻，风味独特。",
        // 这是一个高质量的螃蟹占位图
        img: "https://images.unsplash.com/photo-1565618451939-f8319ba11b5e?q=80&w=2070&auto=format&fit=crop"
    }
];

const TraditionalArts: React.FC = () => {
    return (
        <div className="layout-content-container flex flex-col max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-10 md:py-16">

            {/* 标题区域 */}
            <div className="flex flex-wrap justify-between gap-4 py-8 text-center md:text-left">
                <div className="flex w-full flex-col gap-3 items-center">
                    <h2 className="text-[#1f2937] dark:text-[#e5e7eb] text-4xl md:text-5xl font-black tracking-tighter">本地美食</h2>
                    <p className="text-[#4b5563] dark:text-[#9ca3af] text-base md:text-lg font-normal leading-normal max-w-2xl">
                        探寻盐阜大地的非物质文化遗产与传统艺术瑰宝
                    </p>
                </div>
            </div>

            {/* 艺术列表 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                {ArtsData.map((item, index) => (
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
                                to="/cuisine/detail" // 修改这里
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