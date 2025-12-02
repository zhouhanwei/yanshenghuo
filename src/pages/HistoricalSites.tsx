import React from 'react';
import { Link } from 'react-router-dom';

const SitesData = [
    {
        title: "永宁寺",
        desc: "始建于东晋，是盐城地区最为古老的寺庙之一，历史悠久，香火鼎盛。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQWtgxuOk2b4Q-UGXg1NU-zzK3hIs75vEDMrUK4rsNqOSbIVP4J8GLbpTTS2WxHC_bybMTlwFjbge8prO22hRMBzE-qvM_9-DiJuyEAcdX7nP2gwox8sRNAWBxcZfkUvwa-p4jtTfdZBHRyJHzbufpk6Urnbh22vlarjpmrKA2vMLIHm-PSNwqwA6GcygVjZ30rEJPe8TdXvgscMymeOQG8RZWDGRNVdVKf7H6cfhix6n3ndvBrcaV_Ekc7JqujeyD7PTVWI0jw3uJ"
    },
    {
        title: "盐城水街",
        desc: "再现古代盐商生活风貌的仿古建筑群，集旅游观光、餐饮休闲于一体。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGZPPbyvdtVNr2Cz_LqYMhUhJGqpM10b_SEQtbw9Jix__aZT-Sq2IUVeyt_Gag76frllF3-yhNmM350g0rR5eZX9_gexlA0Y1pKhPa2eLNNc2jWRHuIKzl3t3qgqNR82IhV9E9liLcp3T6AJApqs43hdwHD-HOHgXN3aEhcfa5jwlvgDCC7P_oR3xritW-AOn126RCFEmkvBgxYU4dXp84jFX5CtWKvlG-dDWNWKHhbUvJ0o9S2CSwpJcEU--2HAqImZbA2-Ooq1jQ"
    },
    {
        title: "陆公祠",
        desc: "为纪念宋代抗元民族英雄陆秀夫而修建的祠堂，是爱国主义教育的重要基地。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6nSvMcVwFNM3pH85wzFkUlYd5DqjLsJJvNYmW_2so01x8AE4bgga1UhQQxCvA8P7-aLPdKIBucDTXbnp3xSg_aMXVYbqjrcFnhWFStlL_9MZRRegVwv5LwsOTnlIp_5ER1yDAVK3m4ZXsL-Tq5yNOkBVsheTu9FVV0GDWLGRnK0y2df_zOJKvNnFo462HWWYQRgZONmZqqI4jqrzXiYEtl8WWM6ztAOoh6V5rJkIfZ-QJbaBOHhoAjW_Ab37DF7TWAlA5NdFGiGMx"
    },
    {
        title: "海盐历史文化景区",
        desc: "全面展示了古代海盐生产的完整流程和盐文化的独特魅力。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkMrvEaTxkY-DFve_TxFnOsRZL0g3heBVx-1pZFhx5qF4kpi6fNAMJR4h_3vZ02-7Z4cdetKTFIRhFoheXqd-V156qEOehlKlIPwyrFyQTn74r6QIoedKBs1UXy4Vw7T53bFFG82eVF1ellG609o_ZV6ZCsJxVa_Fx4jfVl_huJhTf4XKyLcxHyNJrWD88Zu8LUftpOucXRdqRPe6FcY2zC1Nv7YJKNjYqhQ6ui3DKrBPdJtzLsCQ4mnpaAwZLvvXWcflzIBvw6nOR"
    },
    {
        title: "安丰古镇",
        desc: "拥有千年历史的古镇，保留了大量明清时期的古建筑和传统风貌。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDop223u2xhGBIkPjTogLWF-4dcgUJTwLFyH8WSI1MZDN5t97gQpWuOZFsKyhO0UwcALoQaiUDIUhLDkrGKRoP9BMbpkMDCBJP_kekMIri9xa8yV565n6O6m2l24gwrwVD2iQHUMJStDWoK5aARWJUT_S-M27i2TwWRise82yqh5KZAce2QYmI6LAkguMJXPyxU6iKwG2T11-dBLatOxF1v23e8WOCjTcaJG-2_jENT_QNtHmPv0kQtdYlBT6IAFRtl0wOrKwtpLH9_"
    },
    {
        title: "泰山寺",
        desc: "位于盐城阜宁县，是一座历史悠久的佛教寺庙，以其深厚的文化底蕴而闻名。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF7MaAa6oliwkh61cg2f3gExcg_g-ZNFBqQeNTMWWupug6sQzj5aBp_Ges3_m0D4UVitNC1z-E36Ieiox8htCiy3zCux6FV5CcDtn8qNwSuoqtbju5czeAg-rZW11qMMzJuI_GZC5GPz6-z6QaUV6ov_xmqQ8FkZHRv-G5WcIRMBPFMo41UflDqks3o3Vpk4eO0czp1gWwi1fg8ORKHJvK4sQPmniRRuf-dPwOf011PKU762mu_-wVoeYYhZKxi4Kv_d3z1RmwQjAk"
    }
];

const HistoricalSites: React.FC = () => {
    return (
        <div className="layout-content-container flex flex-col max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-10 md:py-16">
            {/* 标题区域 */}
            <div className="flex flex-wrap justify-between gap-4 py-8 text-center md:text-left">
                <div className="flex w-full flex-col gap-3 items-center">
                    <h2 className="text-[#1f2937] dark:text-[#e5e7eb] text-4xl md:text-5xl font-black tracking-tighter">
                        历史遗迹
                    </h2>
                    <p className="text-[#4b5563] dark:text-[#9ca3af] text-base md:text-lg font-normal leading-normal max-w-2xl">
                        沉浸在历史的长河中，探索这座城市古老的记忆与不朽的传奇。
                    </p>
                </div>
            </div>

            {/* 卡片 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                {SitesData.map((item, index) => (
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
                                to="/history/detail" // 修改这里
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

export default HistoricalSites;