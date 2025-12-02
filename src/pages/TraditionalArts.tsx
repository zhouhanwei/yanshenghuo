/*
 * @Author: zhouhanwei sgzhouhanwei@163.com
 * @Date: 2025-12-02 15:40:39
 * @LastEditors: zhouhanwei sgzhouhanwei@163.com
 * @LastEditTime: 2025-12-02 15:47:25
 * @FilePath: /yxc-ssr/src/pages/TraditionalArts.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Link } from 'react-router-dom';

const ArtsData = [
    {
        title: "淮剧",
        desc: "源远流长的地方戏曲，被誉为“南方的梆子”。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsdnrONV1mMuZxnWGN9t8pbMCXsuKBwqR1aL3GixME0RUxznI5keqbbyGAcUL24EtPKdr3JzRYCBr_ZlzsjMO8Lk_Ov-fSw8xhKBqWr0FvlYG9OGpO6VwnB3CF6Qa3SNzR0NzIwvKPvSO_blt15yIpvG3y0NCf9GC2zDuJXj-Rma3Z-OpnMhEUtjG3nQHLANbDI7Pz21wuj63MdGvHBgLuLoQhrulnsZKqoE2zU7GC84J5bKmmC-W0XTVwvArlKpVvCxfmC4VZDAf9"
    },
    {
        title: "东台发绣",
        desc: "以发代线，素有“东方一绝”之称的珍贵刺绣工艺。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzGYIRg8ZOs2DSJG8x_z4fCLPsiRHFDqrn_RAteUXxEDK3wDqq4uFQneVgyfBX6WK9WkdwV3E0dx5LQaHofjGZDD_GFpC5JE8R9fPtg7cxLh1RAvCZYZ9RAcnj3ufTGqbTnnA5SUDmffsjdVx4LSwxtrhs-qvp5D5bRxKbXIEnfzBpn7tKodyE3TCkBpxDDGhcQXpzQg9MCsnT2lQSNfahqZRfP_7cuqk9OvglrXcFWKLyBQdguwTT_oFjkbZFwKXvGfDaYGZZgVa4"
    },
    {
        title: "建湖瓷刻",
        desc: "在瓷器上以刀代笔，展现书画神韵的独特艺术。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-fP4aSuM1mUw0YOJ75fPpb5-kSwbL0DeN6Spf5-y1WyQA4dasSe57ysEa5P2gpJtaegT58xAhfekxbReB7difZ4_Saa6v7jfUD8C_r7Mes3GSQyux5gKiUcGvsElBbWkLOwUoumCJv6N8h6s8o2faMnamicbsjwFMKp3svIwN8tw_8VrAFYZlqAHTU4R2nLHU0GAohdg_YJaxgaeQKfyE7By6Eahf3qOCMrPfExy4ivvac3ESuBaNNKTdD7VfLTBb6UozT7-spk-h"
    },
    {
        title: "大丰农民画",
        desc: "风格淳朴，色彩明快，富有浓郁的乡土气息。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB__byU5h0rHtithxHxFWcgTHBKIL51PHlOJJ4kVUCRu_aULyOq1JntXuywlgUzGZf6u-qv57ZWFMsCRK0tTqRCsvJiQInRdUCqpboB2pEoPKJJ2cOxIHtwTzyAfOwJuRmwsaVydX0gY5EoEnNz668h_DS1v_4TPVj2IIv3xZokD7ZkvQA6bf40zN7wB-i-DgqE5HNsjuM5_2Coq_xxUcsK7fG7ArnAs51x8Ec8VLVeETR1ttYrU2YKS793qa1PwB5AhkNQ0DLz8D0V"
    },
    {
        title: "阜宁面塑",
        desc: "以面粉为原料，塑造出各种生动形象的民间工艺。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM32EU3ZBr3QiLNM4XMPTfdWppjClkp_Shn8eF5x7ROeFiAB-4w5Urzi8tQpTz-wExScBq_zMTmc9ZoStxR8grkypDoave9g41JwQ5sTTU-DO4hcJx7a6lLk8AVhXqg6HqwXjgRrhKWllRDpuPd53qroqUT0DIV9w6M0eZh0SBpW52EX5dbzWG_6cd8NsjdyudOav3hEmiGAB5o_CqZEllDZeihVJgihldBxxFcJ5Ne-UCEg4M9x8KztN_KPG5yJZafhcOGBffMvWK"
    },
    {
        title: "伍佑泥塑",
        desc: "历史悠久，造型古朴，是江苏省非物质文化遗产。",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx1wCnP2OiGeRrFvrEF1M32kPdpqkNsrgCTNSrhHg1eJWueZceIKuTpvIOPEg7pT1YPG40JTpPxp5jNOMF4CM67E-5mUC0AuolX3n9gDPo-S98RWQFi8JXybkmDB8d-5NEm5k1T4cAaONS7USiWp3KZVSeqTVr3abHXGB4qf_TnFHtwxZMNrvt5b_sSnhpnCMoiEfyYI-5Xf8qceP-bjen8mzm7a6otkFAwz0LQcxTa6ST9jvqtDUmmz--fXwyl2Ra-75MoOQGiIdd"
    }
];

const TraditionalArts: React.FC = () => {
    return (
        <div className="layout-content-container flex flex-col max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-10 md:py-16">

            {/* 标题区域 */}
            <div className="flex flex-wrap justify-between gap-4 py-8 text-center md:text-left">
                <div className="flex w-full flex-col gap-3 items-center">
                    <h2 className="text-[#1f2937] dark:text-[#e5e7eb] text-4xl md:text-5xl font-black tracking-tighter">匠心神韵</h2>
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
                                to="/arts/detail" // 修改这里
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