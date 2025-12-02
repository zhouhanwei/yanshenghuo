import React from 'react';
import { Link } from 'react-router-dom';

const FestivalDetail: React.FC = () => {
    // 定义页面专属颜色
    const primary = "text-[#c82b36]";
    const bgPrimary = "bg-[#c82b36]";
    const borderPrimary = "border-[#c82b36]";
    const secondary = "text-[#f7d065]";

    return (
        <div className="flex-1 w-full">
            {/* 1. Hero Video/Image Section */}
            <section className="container mx-auto px-6 mt-8">
                <div className="flex flex-wrap gap-2 py-6">
                    <Link className="text-gray-500 dark:text-gray-400 hover:text-[#8C3B3B] text-sm font-medium leading-normal" to="/">首页</Link>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                    <Link className="text-gray-500 dark:text-gray-400 hover:text-[#8C3B3B] text-sm font-medium leading-normal" to="/festivals">节庆活动</Link>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                    <span className="text-[#1a2e2e] dark:text-[#d0e0e0] text-sm font-medium leading-normal">建湖淮剧节</span>
                </div>
                <div
                    className="relative flex items-center justify-center bg-gray-800 bg-cover bg-center aspect-video rounded-xl overflow-hidden shadow-lg"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtho5c_HKfk50ADaaqmXw6mdaZ-tiqC3aznJhxg8tn7sOpM-fzY2wMEUapYJOEcoPvnQ_ax9kzm313-zIZ83ewu9B_cS5tIMgnqN4Co_o9Nmhq6Ee4gPnPD7bFKnV7exkhHyjnutxOkWQ1UIOneX9wYCEuVQTKTmyyv1CgcBj2N4mb56NdGTTkuv8Hy7etYwt8xckgWnZtLrX_UVMk-vUcBOd5Eos4COaM6fxme-n2HZUxttUdpaGGwMf5AK1xtIYsCF9ydpl6aGD_")' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <button className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer">
                        <span className="material-symbols-outlined !text-5xl">play_arrow</span>
                    </button>
                </div>
            </section>

            {/* 2. Title Section */}
            <section className="container mx-auto px-6 mt-12">
                <div className="text-center">
                    <h1 className="text-5xl font-black leading-tight tracking-tight text-[#333333] dark:text-[#e0e0e0]">建湖淮剧节</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">一场融合传统与现代的视听盛宴，感受淮剧艺术的独特魅力。</p>
                </div>
            </section>

            {/* 3. Main Content Grid */}
            <div className="container mx-auto px-6 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Details */}
                    <div className="lg:col-span-2">
                        {/* 历史渊源 */}
                        <div className="mb-10">
                            <h2 className={`text-2xl font-bold tracking-tight text-[#333333] dark:text-[#e0e0e0] border-l-4 ${borderPrimary} pl-4 mb-4`}>历史渊源</h2>
                            <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
                                淮剧，作为江苏省地方戏曲剧种之一，发源于盐城建湖。建湖淮剧节不仅是淮剧爱好者的盛会，更是展示地方文化、促进文化交流的重要平台。节日期间，名家荟萃，新秀辈出，共同演绎经典与创新剧目，传承百年艺术精髓。
                            </p>
                        </div>

                        {/* 主要活动 */}
                        <div className="mb-10">
                            <h2 className={`text-2xl font-bold tracking-tight text-[#333333] dark:text-[#e0e0e0] border-l-4 ${borderPrimary} pl-4 mb-4`}>主要活动</h2>
                            <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
                                节庆期间，将上演多场经典淮剧剧目，如《赵五娘》、《祥林嫂》等。同时，还将举办青年淮剧演员大赛，发掘新生力量。此外，文化集市、名家讲座和戏曲工作坊等活动也将同步进行，为游客提供沉浸式的文化体验。
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <img className="rounded-lg object-cover w-full h-48 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyS3Dr9i1s4DP7hKRWi9s_YCaGtV8QV_WKXhlav8OatyzTqmhg5fXr7JMMLOMJdTXLRVNcZ4gdaG9mLbCWwKpa5ecLXCIRAM8K4u1zGQReV59E9LArzHC3qWr9xeWKMhzyxA0kbL0Y-cpxNDVOlvtnk0KDjFkWDdikMOn81g17R_RP12ELyYJyARizKf4KF9jM8bK9OL17tp6ywuAYQp62-9Bs25r4Mt0U9cpCGZlElH0m6i-HgeP6kHon0vThC2qpjivXTyTVJjEF" alt="Makeup" />
                                <img className="rounded-lg object-cover w-full h-48 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4wA_TsBOfzON4-56OFmo2XJLELOBxnLlGFE-a88_lpZNKBj04kGk2PhN4Qm6EIzjOIVUuPtc-9PVlS-qqYHDBLbnyopuJTr8z5zjYv95PGTk102mvflr1W6xRZ28uGJW7MKsPpN_KLzQXUv2pFxMq6VIVgzVNT6Y3vci_EYxASmkSNI4FbBFJkyxkWhjNPW1VBSKhsQXURm9MpFEow4x0yWpwGr1Yhw8L5QItDqB8Q7t2aRdMc8al4rJvU6iz0NOjQFIvVeHzdBg8" alt="Costume" />
                            </div>
                        </div>

                        {/* 文化意义 */}
                        <div className="mb-10">
                            <h2 className={`text-2xl font-bold tracking-tight text-[#333333] dark:text-[#e0e0e0] border-l-4 ${borderPrimary} pl-4 mb-4`}>文化意义</h2>
                            <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
                                建湖淮剧节不仅是对传统艺术的致敬，更是文化自信的体现。它加强了地区文化认同感，促进了旅游业发展，让古老的淮剧在新时代焕发出新的光彩，成为连接过去与未来的文化桥梁。
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Sticky Sidebar */}
                    <aside className="lg:sticky top-24 h-fit">
                        <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl border border-gray-200 dark:border-[#333333] shadow-lg">
                            <h3 className="text-xl font-bold mb-6 text-[#333333] dark:text-[#e0e0e0]">活动信息一览</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className={`material-symbols-outlined ${primary} !text-2xl mt-0.5`}>calendar_month</span>
                                    <div>
                                        <p className="font-semibold text-[#333333] dark:text-[#e0e0e0]">活动日期</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">每年10月18日至10月22日</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className={`material-symbols-outlined ${primary} !text-2xl mt-0.5`}>location_on</span>
                                    <div>
                                        <p className="font-semibold text-[#333333] dark:text-[#e0e0e0]">活动地点</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">盐城市建湖县文化艺术中心</p>
                                        <div
                                            className="w-full h-32 bg-gray-200 dark:bg-gray-700 mt-2 rounded-md bg-cover bg-center"
                                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzD-xzdzskhqzQBQp-OPrrdr180y7DO2Y6L9IDEvBKYmziOakY6Dd4o-qTfH8w8la0YiA_WtPJbMR99dXcTCIP0xoFaYDKy15jIabedLqd8bwVSqWqaMd2dYVlCHGxr3f5qN4D-Gq8Pj34_N-EwA5yawMbfQ4oPr1JawOuycrS6jOA1u4pF0Tetdw9QerFvnZiOsh3nTgpEGSU51ayfEQsc7j_v4ZHimNZxO6RXRs6hyiJKijQE4yUHgK8ZNs63d15NO8ZEGwpkL-q')" }}
                                        ></div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className={`material-symbols-outlined ${primary} !text-2xl mt-0.5`}>confirmation_number</span>
                                    <div>
                                        <p className="font-semibold text-[#333333] dark:text-[#e0e0e0]">参与方式</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">部分演出需购票，多数户外活动免费开放</p>
                                    </div>
                                </li>
                            </ul>
                            <button className={`mt-8 w-full ${bgPrimary} hover:opacity-90 text-white font-bold py-3 px-4 rounded-lg transition-colors`}>
                                立即预订门票
                            </button>
                        </div>
                    </aside>
                </div>
            </div>

            {/* 4. Explore More */}
            <section className="py-20 bg-[#f8f9fa]/80 dark:bg-[#121212]/80 backdrop-blur-sm mt-16 border-t border-gray-200 dark:border-[#333333]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-[#333333] dark:text-[#e0e0e0]">探索更多节庆</h2>
                        <p className="mt-3 max-w-2xl mx-auto text-md text-gray-600 dark:text-gray-400">盐城四季精彩不断，发现更多值得期待的文化盛事。</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                date: "每年5月",
                                title: "大丰麋鹿节",
                                desc: "观赏珍稀麋鹿，体验自然生态之美。",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMjtSUg4dW1rgLBOGQ5kDdT8QHxZDwW9L7oZFjtQW52tXJ-TStw2EK74ntIBdjVmWdkAXxhJXYs6mR1CehhjN-fzr6Tj6EihGCdMajTlfQLH40-9IftFl4Lh2fu4zis7DzwtxNPRUK2OQSa2w2dFZ7kNbpErnB-9CS9tN6dA3wBOmGnhgJhYOHHwbVmkdWCO3HK2qmQ_WpcyqX6pQPVs5SAYyopLoNrGn-aEuLniksYy5Wzu8CkslgyxrTPlFE51Lxl0d67Dc87Zg8"
                            },
                            {
                                date: "每年11月",
                                title: "射阳丹顶鹤艺术节",
                                desc: "冬季观鸟盛会，领略鹤舞滩涂的诗意画卷。",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAidsS1W4C6QMpt_H1FFh4mja1GYK3UNI7pPOZ5yuheJOnnG-gzbd3ZE7H-bk9WUSyslATmWH3w8w-Rr0r_88KLT_4E4EzzD8JHqV7Bi5pCMEBtTKSnwqS7sGjIMUQjmzdLN91xg5rKY-fP8VLFEl06rfoyXOCsXLak7BYLLbVO9yevvZa63VBHpu12iNj0oOszQGaXsQqhrCdbUVkks7GB0RF16ur2JEoeWYV5pttp3W7Z-Jyw4OUU7pSBdu8uUxOcfMszd06JXd-M"
                            },
                            {
                                date: "每年6月",
                                title: "东台西瓜节",
                                desc: "品尝甜脆西瓜，享受夏日田园的清凉与欢乐。",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqH4kIOKxYk-LxBVP2BlcEsAjdzZYlqLBqvd8VeF7sezGE_9DQuteKuv_-M6OFFw8NxhynJaNUAJoTnm43CArqhUGrRdSIXT-wuawE9rc3pUL6dj3GWibEHKpG5_39Zjj1k2wYCzqTr1eiZonZg6dQwezqlB1Yw6AHZPlvNbsbcQ9nnC_S9TRDqkjxXxF_r-qZ_gxB8lIEM1yr7cmHHjWizTVuGWNaetacbzDdhBlCwfLA-DhnP9VMwQIwUS16YlY4vWsrsaKeJvLt"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white dark:bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 group">
                                <img className="w-full h-48 object-cover" src={item.img} alt={item.title} />
                                <div className="p-6">
                                    <p className={`text-sm font-medium ${secondary}`}>{item.date}</p>
                                    <h3 className="text-xl font-bold mt-2 text-[#333333] dark:text-[#e0e0e0]">{item.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{item.desc}</p>
                                    <Link className={`inline-block mt-4 ${primary} font-semibold text-sm group-hover:underline`} to="#">了解详情 →</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FestivalDetail;