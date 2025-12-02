import React from 'react';
import { Link } from 'react-router-dom';

const CuisineDetail: React.FC = () => {
    return (
        <div className="px-6 sm:px-10 py-8">

            <div className="flex flex-wrap gap-2 py-6">
                <Link className="text-gray-500 dark:text-gray-400 hover:text-[#8C3B3B] text-sm font-medium leading-normal" to="/">首页</Link>
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                <Link className="text-gray-500 dark:text-gray-400 hover:text-[#8C3B3B] text-sm font-medium leading-normal" to="/cuisine">本地美食</Link>
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                <span className="text-[#1a2e2e] dark:text-[#d0e0e0] text-sm font-medium leading-normal">阜宁大糕</span>
            </div>
            {/* 3. Title Header */}
            <div className="flex flex-wrap justify-between gap-4 pb-8 border-b border-black/10 dark:border-white/10">
                <div className="flex flex-col gap-3">
                    {/* 使用 font-serif 模拟衬线体风格 */}
                    <h1 className="font-serif text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#1a2e2e] dark:text-[#d0e0e0]">阜宁大糕</h1>
                    <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed max-w-3xl">
                        阜宁大糕是江苏盐城的传统美食，拥有超过200年的历史。
                    </p>
                </div>
            </div>
            {/* Hero Banner Section */}
            <div className="@container">
                <div className="@[480px]:px-4 @[480px]:py-3">
                    <div
                        className="bg-cover bg-center flex flex-col justify-end overflow-hidden @[480px]:rounded-xl min-h-96"
                        style={{
                            backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuABZ9bnFdkcUwOMobq1JmD1gNTln0yI4eAG3ca7OrhrFlwfE6r598mJpmWO3aOnjosdYlMJbSTwTmRF0mPglmfWrnyKwu3FCIVIKzUoy6QC2-T5eu0HcTyRPGfTJ9-X59Lx4W-XqgwA81DYI3_wYZQQ25NpeLi2wANUKDFtEuvdFX23CCfaYba4svHWAoLW4FY0DLviPGWHM0vvMwVtmu5YH4b453EH8GLII4srAjvTHbVTLgiTXA1KLxDRe4sTryfzEDIIj_kBq-2u")'
                        }}
                    >
                        {/* <div className="flex p-6 md:p-8">
                            <p className="text-white tracking-light text-4xl md:text-5xl font-bold leading-tight">阜宁大糕</p>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">

                {/* Left Column: Description & Tabs */}
                <div className="lg:col-span-2">
                    <div className="pb-3">
                        <div className="flex border-b border-black/10 dark:border-white/10 px-4 gap-8">
                            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#ee6c2b] text-black dark:text-white pb-[13px] pt-4" href="#">
                                <p className="text-sm font-bold leading-normal tracking-[0.015em]">历史</p>
                            </a>
                            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-black/60 dark:text-white/60 pb-[13px] pt-4 hover:text-[#ee6c2b] transition-colors" href="#">
                                <p className="text-sm font-bold leading-normal tracking-[0.015em]">食材</p>
                            </a>
                            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-black/60 dark:text-white/60 pb-[13px] pt-4 hover:text-[#ee6c2b] transition-colors" href="#">
                                <p className="text-sm font-bold leading-normal tracking-[0.015em]">制作方法</p>
                            </a>
                        </div>
                    </div>
                    <p className="text-black dark:text-white/90 text-base font-normal leading-relaxed pb-3 pt-4 px-4">
                        阜宁大糕是江苏盐城的传统美食，拥有超过200年的历史。它起源于清朝，曾是进贡朝廷的贡品。阜宁大糕以其细腻的甜味和入口即化的柔软口感而闻名，象征着吉祥如意，常在节日和庆典中分享。这道糕点由糯米、糖和各种坚果、果脯精心制作而成，代表了代代相传的丰富文化遗产。其独特的制作工艺包括多道蒸煮和压制工序，从而形成了其独特的层次感和令人满意的口感。
                    </p>
                </div>

                {/* Right Column: Ratings */}
                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-black/20 rounded-xl p-6">
                        <h3 className="text-lg font-bold text-black dark:text-white mb-4">评分与评价</h3>
                        <div className="flex flex-wrap gap-x-8 gap-y-6">
                            <div className="flex flex-col gap-2">
                                <p className="text-black dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">4.8</p>
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4].map(i => (
                                        <span key={i} className="material-symbols-outlined text-[#ee6c2b]" style={{ fontSize: '18px' }}>star</span>
                                    ))}
                                    <span className="material-symbols-outlined text-[#ee6c2b]" style={{ fontSize: '18px' }}>star_half</span>
                                </div>
                                <p className="text-black/60 dark:text-white/60 text-base font-normal leading-normal">142 条评价</p>
                            </div>

                            {/* Rating Bars */}
                            <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
                                {[
                                    { star: 5, pct: '85%' },
                                    { star: 4, pct: '10%' },
                                    { star: 3, pct: '3%' },
                                    { star: 2, pct: '2%' },
                                    { star: 1, pct: '0%' }
                                ].map((item) => (
                                    <React.Fragment key={item.star}>
                                        <p className="text-black dark:text-white/90 text-sm font-normal leading-normal">{item.star}</p>
                                        <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                                            <div className="rounded-full bg-[#ee6c2b]" style={{ width: item.pct }}></div>
                                        </div>
                                        <p className="text-black/60 dark:text-white/60 text-sm font-normal leading-normal text-right">{item.pct}</p>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <button className="mt-6 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-[#ee6c2b]/20 dark:bg-[#ee6c2b]/30 text-[#ee6c2b] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#ee6c2b]/30 dark:hover:bg-[#ee6c2b]/40 transition-colors">
                            <span className="truncate">留下评价</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Other Cuisines Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-black dark:text-white mb-6">其他著名盐城美食</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "东台鱼汤面",
                            desc: "浓郁奶白的鱼汤配上鲜嫩的面条，是早餐的绝佳选择。",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCN4MF5_1oQpANQIeEge8JQTsSUKpBi1aXBLSgNJj2_v86cOYLemAsIAkqaYskxKjI2BD29AQdmaBkbroMzksl9hnCvRB-e2xe1uOGgxeBzjNkauFz0_OVpiBbCPVO3HU8Thtc9SfQQfuqODbslGGrVqXmUUZDHADnvTi3LAEr7JlhezWm-HvCy3qjMjyfZMusdxr8rRVElcr2pbPmoFdxJ6Urzkm7SBNH672iI_pdtL5mvUjepDZbSWt8jU2kAq-qgle5mo7A-sXJ",
                            rating: "4.7",
                            count: "98",
                            stars: 4.5
                        },
                        {
                            title: "建湖猪肉丸",
                            desc: "多汁味美的肉丸，通常用咸香的酱油炖制而成。",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQqU-mnlQDz5Lf-hkwFNl84pQHwG3ycAjo6IrdU63v18CvzpfErn6W1FOqVsLguvKAAeuek-yfz_sRAy88MPupI5blXIwaTirJbUT9oyxpTQkt4ubEfNCPLrW2_EGyL7idAA6K716rmp_0noT012xFUVmlTnLSuDdazskH3-WZ8xIQOYaCyI4mudV4nhPWvkTnYvyjixyhdVW1W_NgF08yCw67Q8Hwg7c_MZn4aSHUCy6S_G6f9uQ45AcA0fWivNv9MUmJsRd7q2cU",
                            rating: "4.9",
                            count: "112",
                            stars: 5
                        },
                        {
                            title: "射阳米饼",
                            desc: "香脆可口、略带甜味的米饼，是绝佳的零食选择。",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV2MsAwO6jyvUweD11QHtXLMv96CnMNL5KfUjYBNhPykSJyDO9nlTFOvcRg64BzgjVz3sy-q_BMpB8fyf5DhAbr_nt45hNkaZYLqPph_-turyPEf7AYZ6j7-jEALcW8EdKhgafNOSNREKtZv5OXlRf01VFJkVGqm7q5e-J3n41poMSJsX_LCC5RreeeOyyki56-127Ec9E3hckrH60TWnQ9UL0Aq0W4WRAPV5Ssi_q6ZzAH5IEIZ-3aFXXRb2FWyh-CR6aCX3J-7Lq",
                            rating: "4.3",
                            count: "76",
                            stars: 4
                        }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col bg-white dark:bg-black/20 rounded-xl overflow-hidden group cursor-pointer">
                            <img
                                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src={item.img}
                                alt={item.title}
                            />
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-black dark:text-white">{item.title}</h3>
                                <p className="text-sm text-black/70 dark:text-white/70 mt-2 flex-grow">{item.desc}</p>
                                <div className="flex items-center gap-2 mt-4">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <span
                                                key={star}
                                                className={`material-symbols-outlined ${star <= item.stars ? 'text-[#ee6c2b]' : 'text-black/20 dark:text-white/20'}`}
                                                style={{ fontSize: '16px' }}
                                            >
                                                {star <= Math.floor(item.stars) ? 'star' : (star === Math.ceil(item.stars) && item.stars % 1 !== 0 ? 'star_half' : 'star')}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-xs text-black/60 dark:text-white/60 font-medium">{item.rating} ({item.count} 评价)</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CuisineDetail;