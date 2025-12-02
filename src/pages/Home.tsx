import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="p-4 md:p-6 lg:p-8">
        <div className="@container">
          <div className="@[480px]:p-0">
            <div
              className="flex min-h-[60vh] max-h-[720px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl items-center justify-center p-4 text-center"
              style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFfd3ZAB4HCSLITvWHljeZWj3iDwMvQ4jP6gHK3NzWZHS76P0zPsr0C4q3Y5w63UW2V7CUTP8aprBI5Oh3P1rczmfTHAsytb9qAymeLxJCWwBGmIk7Lm3BWT8nlGuYsRPLjOijQb2kd59-fzO87zVpK0vKYAOsHa_kGGXiTdmEjMFakeNYvQmUPlMa3KwlD4Xivdlg23DrJLLvURNwinw42E9Ryw6U3vQdYDSBJCt4D78PCj-Pk_lkHCVxl0nghRIlXqCGI6Ze6lpo")' }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">发现盐城之美</h1>
                <h2 className="text-white/90 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal max-w-2xl mx-auto">探索古老的传统，壮丽的风景，以及使盐城成为独特目的地的充满活力的当地文化。</h2>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-[#111812] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:opacity-90 transition-opacity">
                <span className="truncate">了解更多</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section Title */}
      <div className="px-4 md:px-6 lg:px-8">
        <h2 className="text-[#111812] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">探索盐城文化</h2>
      </div>

      {/* Grid Section */}
      <div className="px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
          {[
            { title: "本地美食", desc: "品味该地区独特的风味和烹饪传统。", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0WkS4OLyqC25oIXyPIUmKaMeuYPkCHZ_O8iCR1tY1gKcEfuZ3aVv_wPiiAQcN6oGwX6ncq8Fq9hbu2gBepFs0Y8rbeqIyHdGveL-5xv9WhPap3J1fxemb4eB0TT42lkWy3ORw8D7Bc783CVKZdDIC5rHldMSO51dUGFFb9W6jlDuHETgXNnz6v89GmOJxkWRrZak86b6FHqwwQ2XG2zXGLlne6miom-5blyrw-7gcuR8a9IK2z3G8RdShdktP_YAPLuEeTUQhmYy_" },
            { title: "传统艺术", desc: "欣赏淮剧、杂技和地方手工艺之美。", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaC1zxaaQTjc-6rGXsVW0W8tx0DaBerYVtNqaZt3u4FJGHCjSdcScmdVplcvTK0Nn7G2kZHmMo4WcVh6Uvph1GKLK_z9nUfZ117Fo57vh5W3toER_fDPqWyiSePqwjGRTo1iZbStjTEt1tw4yvSXVyAqb8SPXLWuLEiNM_q7CICPe3tRyzrqfSQ_SSJMHEouvo-llKUGZum918YiAkW2nyoHS4nLx0mkC8btsEO3kAWwA7bDFPTXS_bjF6XAt2focCPxdYoILj5aXi" },
            { title: "历史遗迹", desc: "在重要的地标和纪念馆中穿越时空。", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-paBHW6z07CwjnRsJzb4k4oqhZmeLSbUHoLdebhJ-Jp-pWdtZkWrFO8U7aZlD2rpGewKva5L0cqNG_iK9p5XT13XqB0v5By28ex45z5ejoJxhM6riujSFlS9SIteiOTPH7Hr3bBpFJas7XYDxzCZtNahwf7JGwpFd1nHb6kYxDKeT3kWQIGhIH60U45BTPShsyzSBnWKNp0JAMiH1Zqxo8TH6IEJusC3x__u98b2K_7SD03-7jGhaLvWjG6CbjG-6RAq1Dy2rkH72" },
            { title: "节庆活动", desc: "加入标志着城市日历的充满活力的庆祝活动。", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdCvwL0T4eRSwW-tQju8C4w-6owXrdYRs24F0ZIMlKRISEReu1jLIz1_qZUfdjt4sW9RD0zwh-pwFdho_8WYm2uk5e3-C94G8V-Pr9rSX5yAoW-gnuUyjm_yxbP3hJPr9oxgBR7DK8L2ZpWYXPomBMVC1y8H3E7MEdepn8-wsMij25cYF3o47CAcTAsEgS9NKhfLWftjflQedWHCVu7Al-cGxeXOl0f7I3pvDgWuZf3OeaZ6t1kywE1VTsN5avVjTOC0l6HczV50eF" }
          ].map((item, index) => (
            <Link key={index} className="flex flex-col gap-3 pb-3 group" to="#">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden">
                <div
                  className="w-full h-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url("${item.img}")` }}
                ></div>
              </div>
              <div>
                <p className="text-[#111812] dark:text-white text-base font-bold leading-normal group-hover:text-primary">{item.title}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Story Title */}
      <div className="px-4 md:px-6 lg:px-8">
        <h2 className="text-[#111812] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">精选故事</h2>
      </div>

      {/* Featured Story Content */}
      <div className="p-4 md:p-6 lg:p-8 pt-0 md:pt-0 lg:pt-0">
        <div className="p-4 bg-black/5 dark:bg-white/5 rounded-xl">
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 rounded-lg">
            <div className="flex flex-[1.5_1.5_0px] flex-col gap-4 justify-center">
              <div className="flex flex-col gap-1">
                <p className="text-[#111812] dark:text-white text-xl font-bold leading-tight">盐城的麋鹿</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">发现中国传说中“麒麟”的不可思议的故事，它们在盐城的沿海湿地从灭绝的边缘被拯救回来。这是韧性和自然之美的象征。</p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-background-light dark:bg-background-dark text-[#111812] dark:text-white text-sm font-medium leading-normal w-fit hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                <span className="truncate">阅读全文</span>
              </button>
            </div>
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOlC-Cq1sJiY3PPaC2-vCODcLlnjiiwAhlwuVzPQIshWMJhAb2MZGDoQOQ2dJJFgfyT8ja8ughf0yBUXMK-N40WootyNeEDzEXIweFREu1Uy_VXZZX9us2kMpH80SBjcamGUhwEYu1Wu-CDY32NvI_Hjr6wxooW7FtbtGRPIawctt_s6jRqW2tPeQLBYOgRyPwjWIUUCQBinthIpyAoBIapGkiGeiu2zIbgZ6D11Rf7RdKz0ACM9MCUdHJbnF56BXEJVelagYzjwBJ")' }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;