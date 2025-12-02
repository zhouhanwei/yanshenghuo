/*
 * @Author: zhouhanwei sgzhouhanwei@163.com
 * @Date: 2025-12-02 16:48:39
 * @LastEditors: zhouhanwei sgzhouhanwei@163.com
 * @LastEditTime: 2025-12-02 16:48:44
 * @FilePath: /yxc-ssr/src/pages/PracticalTools.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Link } from 'react-router-dom';

const ToolsData = [
  {
    title: "图片加水印",
    desc: "为您的图片添加自定义文字或Logo水印。",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVpfTp2rfGiuFKGPtJ04h2c-kdmheDa0RZbs63cyn53nBFdULVqggHzjdSLlJNsytg3ndcEZPqeRe5Xa_YJxuAT4bjlyemlI9Oc57p3kIE-vrLkGDIDUEOso46LYATuhb3IrNLx_pozQT9PXUqA8vyyYWbZwwNch56xIMxcoRxz5KL7eYHYoXiKZgDNv9uBnUqaWuLRv0WNKBWJ-KCnS72PYV0skj4WegKemMAlCTZRZ2lBcuV-NvTw46yUQ0Z64MEG3_HFquSdrd5"
  },
  {
    title: "格式转换",
    desc: "支持多种常见文档和图片格式的在线转换。",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsxTsY_KsTfBlfaF3L56MARa8LcuW2fsqBwcywpRL0np6VQJh5AgvEeJE03CloQ8y0bSEwnChSv7ZzPGfLlwnmTBNeBJhQQQJV5vCC2HH90SNeFVgC6adrO538jcEusqIzhRBUdVhmiChhJjM037qT2N-FnbuN1dxT_lEAoIe26HKhco-Bn3y9mZ00D6D7LYflcM6QHGmxaPgxx9MqWyhWSlsYTsW-W1jr6-4R0OkkkuT13iNeuoQl-8gEYluDoW-5SlXQUY2_FqA4"
  },
  {
    title: "二维码生成器",
    desc: "将文本或网址链接快速生成为二维码图片。",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIT5Zgd3ntuQAjj7YpTt4vreE-DQ2z_2fH5c4GzQWFnbaO3rnZu9vEr34uVqCPb68_bCQqYgD4T0fGycHdo0Yiybw1PvGiEMMHOVHiYEpLaFLjEMcY52L9hFacPeP6O_AfwsKejV5M0HtvQKgzWd6A1lBhjyqIBmm73hvAoXTT0VT2RFGqTOAeQU1Cef0IJZGybm952Jh2koiX9JlMtrft2iuKBndAigOn02KyBiSn37M_ajP7I3LWqRkSZ78Rh53gBTndeFyy_qpf"
  },
  {
    title: "在线文本编辑",
    desc: "简单快捷的在线文本处理与格式化工具。",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8VcKgQ6q4dm3L0SlQrchMHgixqci6V914hCDZUDS6tV-ruWBBiOTOC78RcbaZCIOWD7AR6OE0jt0r8cJjwOd6xkqO-87VCBLWLc_9HFOTKSV456vVYOpUXZB6FQFje_pV-YagBGwll7fV-EpT91HiOa3Umf0WwSMDvyQnrKfOCQZgapqFRrqMfSqohMZ2nB63ytml77ShCDlCTYHcIPQavz8JDbqjq4qw0vXwc7U4VB3pgzQW0O08Ebx8642cb3zBciHCw34yxSTz"
  },
  {
    title: "单位换算器",
    desc: "提供长度、重量、温度等多种常用单位换算。",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyFoPnZuqK5pzlWlehSh6Mw8LsXqAAYzuQTIePQrvXNbV6I5rF6QSPue76ooXV-sG9y74ASqq02BaPoeERbKw11AucwOkg0n3eHIz3UZTo9oeD6I4ovGU73vHP8N8Ak0ma6Zf_5xFxDO3lcusLM8amzPdwACsb5yVp4K_gc_pAg070Q0LEcflXNClG5opjGI0g_uN0_jTQGEJiqomB9V-tjQtbgw3HytC1B6fYgCdbJtybQ9Ij7zdyr_4lxilxA4UTBPqk1Hwpr2K_"
  },
  {
    title: "身份证信息查询",
    desc: "查询身份证号码归属地、生日等公开信息。",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMRm_Q4FIzAxKHEDgiY7_AW_otqkvD-_RsbmJO75t44lssL3LKI2F_z0tdNLSNwBM_m7KRssoQs4ByrZDi1EKV275fe3DwQWP49tyolHsR4jM8TC3ce__nmyK56LvRqSrI36HbVsKZg2wSMrR0Qr8ObBc2CNY2pqlGhOc_C9ULvPgvvx2uJKnUkYTaXoaqMSmpn8bWeEeQ75nbLo6W3UgKbPjJAMjaCQEaipKJ-z1y6z_wEy6g_E2QyNxP_OGaDYjgy-hor3BdRk-O"
  },
  {
    title: "万年历查询",
    desc: "查询公历、农历、节假日及黄历信息。",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClsX7832cV-xfN6cWUWwxercgq7rFxrOdIp1WMyOihlI9HeUQTol0iQ5zuFZs_tTOD8CFGeRgSfJ035wP-YAmVh0bJpQgnFnC5LUn_2BwvRGCU3ldLEVe5mrTIMFcXZEITUBCEa6FQTRLiSt-Faf_sjTqyPRlVSgb7u2MmQFutVeEz5QVQ44TWtJVuVkOsuP34edC0NjFQ58MqN0vPBSFMO9SJo7O-fbL_Pq0gICoQ-riUiePVZ8Fp-5HkFtbiPm30qC9c68d8OaQQ"
  },
  {
    title: "本地邮编区号",
    desc: "快速查询盐城各地区的邮政编码和电话区号。",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4b78rhYfjYdrUYw1SFzuXYAFDpd4AdhYQoKfjf1NAQ5tliUMJ3E1JdseyWNzBZkOHlHrO3b44kJnQdL2fqz0fU3DSpSRP9GqVeYtl9qoDjscwTZbqYv5UIZwJSx4JlXuWH7k_dyFeMtJym9FTKCm00Q_0jG_XiAiGtL0OFe20TRAdtUiPlX-9W7J35DjDn1cCJj-vAu_usPEaeKxjlMz6IXwg3hpQBVZkV8zf4F9RtA8ZlKmJYL54YMZrQQ91nGs6bAVTKHZpEmWc"
  }
];

const PracticalTools: React.FC = () => {
  return (
    // 使用原设计的暖米色背景
    <div className="flex flex-col flex-1 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-[#f8f7f5] dark:bg-[#221910] w-full min-h-screen">
      
      {/* 标题区域 */}
      <div className="flex flex-wrap justify-between gap-4 mb-8 max-w-7xl mx-auto w-full">
        <div className="flex min-w-72 flex-col gap-3">
          <h1 className="text-[#181411] dark:text-[#f8f7f5] text-4xl font-black leading-tight tracking-[-0.033em]">
            实用工具
          </h1>
          <p className="text-[#8a7560] dark:text-[#a19182] text-base font-normal leading-normal">
            集中展示多种实用工具，方便您快速找到并使用。
          </p>
        </div>
      </div>

      {/* Grid 列表 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
        {ToolsData.map((tool, index) => (
          <Link 
            key={index} 
            to="#" 
            className="flex flex-col gap-4 p-4 bg-white dark:bg-[#2c2c2c] border border-[#f5f2f0] dark:border-[#3a2d1e] rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div 
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" 
              style={{ backgroundImage: `url("${tool.img}")` }}
            ></div>
            <div>
              <h3 className="text-[#181411] dark:text-[#f8f7f5] text-base font-bold leading-normal group-hover:text-[#f48c25] transition-colors">
                {tool.title}
              </h3>
              <p className="text-[#8a7560] dark:text-[#a19182] text-sm font-normal leading-normal mt-1">
                {tool.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PracticalTools;