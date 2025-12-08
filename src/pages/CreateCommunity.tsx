import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCommunity: React.FC = () => {
  const navigate = useNavigate();
  const [tags, setTags] = useState(["美食探店", "摄影", "周末徒步"]);

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const primary = "text-[#f48c25]";
  const bgPrimary = "bg-[#f48c25]";
  const borderFocus = "focus:ring-[#f48c25]/50 focus:border-[#f48c25]/50";

  return (
    <div className="flex flex-col flex-grow container mx-auto px-4 py-8 md:py-16 bg-[#f8f7f5] dark:bg-[#221910] min-h-screen">
      <div className="max-w-3xl mx-auto w-full">
        
        {/* Page Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-[#1c140d] dark:text-[#fcfaf8] text-4xl font-black leading-tight tracking-tighter">
            创建新圈子
          </h1>
          <p className="text-[#9c7349] dark:text-[#a88e73] text-lg mt-2">
            分享你的兴趣，连接盐城的同好
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-[#2c2c2c] p-6 sm:p-8 rounded-xl border border-[#e5e5e5] dark:border-[#3a2d1e] space-y-8 shadow-sm">
          
          {/* Circle Name */}
          <div className="flex flex-col">
            <label className="text-[#1c140d] dark:text-[#fcfaf8] text-base font-medium leading-normal pb-2">圈子名称</label>
            <input 
              className={`form-input w-full rounded-lg text-[#1c140d] dark:text-[#fcfaf8] border border-[#e5e5e5] dark:border-[#3a2d1e] bg-[#f8f7f5] dark:bg-[#1e1e1e] h-12 px-4 text-base placeholder-[#9c7349] dark:placeholder-[#a88e73] ${borderFocus} focus:outline-none focus:ring-2`} 
              placeholder="输入圈子名称" 
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-[#1c140d] dark:text-[#fcfaf8] text-base font-medium leading-normal pb-2">圈子简介</label>
            <textarea 
              className={`form-textarea w-full rounded-lg text-[#1c140d] dark:text-[#fcfaf8] border border-[#e5e5e5] dark:border-[#3a2d1e] bg-[#f8f7f5] dark:bg-[#1e1e1e] min-h-36 p-4 text-base placeholder-[#9c7349] dark:placeholder-[#a88e73] ${borderFocus} focus:outline-none focus:ring-2 resize-y`} 
              placeholder="简单介绍一下你的圈子..."
            ></textarea>
          </div>

          {/* Cover Image Upload */}
          <div>
            <label className="text-[#1c140d] dark:text-[#fcfaf8] text-base font-medium leading-normal pb-2 block">圈子封面</label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-[#e5e5e5] dark:border-[#3a2d1e] px-6 py-10 bg-[#f8f7f5] dark:bg-[#1e1e1e]">
              <div className="text-center">
                <span className="material-symbols-outlined text-5xl text-[#9c7349] dark:text-[#a88e73]">image</span>
                <div className="mt-4 flex text-sm leading-6 text-[#9c7349] dark:text-[#a88e73]">
                  <label htmlFor="file-upload" className={`relative cursor-pointer rounded-md font-semibold ${primary} hover:opacity-80`}>
                    <span>上传文件</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">或拖拽到此处</p>
                </div>
                <p className="text-xs leading-5 text-[#9c7349] dark:text-[#a88e73]">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="text-[#1c140d] dark:text-[#fcfaf8] text-base font-medium leading-normal pb-2 block">圈子标签</label>
            <div className="flex gap-3 p-3 flex-wrap pr-4 bg-[#f8f7f5] dark:bg-[#1e1e1e] rounded-lg border border-[#e5e5e5] dark:border-[#3a2d1e] mt-2">
              {tags.map((tag, index) => (
                <div key={index} className={`flex h-8 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-[#f48c25]/20 dark:bg-[#f48c25]/30 px-3`}>
                  <p className={`${primary} dark:text-[#f48c25] text-sm font-medium`}>{tag}</p>
                  <button onClick={() => removeTag(tag)} className={`${primary} hover:text-[#f48c25]/70`}>
                    <span className="material-symbols-outlined !text-base">close</span>
                  </button>
                </div>
              ))}
              <input 
                className="bg-transparent focus:outline-none min-w-[100px] text-[#1c140d] dark:text-[#fcfaf8] placeholder-[#9c7349] dark:placeholder-[#a88e73]" 
                placeholder="添加更多标签..." 
              />
            </div>
          </div>

          {/* Circle Type */}
          <div>
            <label className="text-[#1c140d] dark:text-[#fcfaf8] text-base font-medium leading-normal pb-2">圈子类型</label>
            <div className="mt-2 space-y-4">
              {['公开圈子', '私密圈子'].map((type, idx) => (
                <div key={idx} className={`flex items-start gap-x-3 cursor-pointer rounded-lg p-4 border border-[#e5e5e5] dark:border-[#3a2d1e] has-[:checked]:border-[#f48c25] has-[:checked]:ring-1 has-[:checked]:ring-[#f48c25]/50 transition-all`}>
                  <input 
                    id={`circle-type-${idx}`} 
                    name="circle-type" 
                    type="radio" 
                    defaultChecked={idx === 0}
                    className="h-4 w-4 mt-1 border-gray-300 text-[#f48c25] focus:ring-[#f48c25]" 
                  />
                  <div className="text-sm leading-6">
                    <label htmlFor={`circle-type-${idx}`} className="block font-medium text-[#1c140d] dark:text-[#fcfaf8] cursor-pointer">{type}</label>
                    <p className="text-[#9c7349] dark:text-[#a88e73]">
                      {idx === 0 ? "任何人都可以看到圈子内容并申请加入。" : "只有受邀请的成员才能看到圈子内容。"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#e5e5e5] dark:border-[#3a2d1e]">
            <button 
              onClick={() => navigate(-1)}
              className="flex h-11 px-6 items-center justify-center rounded-lg bg-[#e5e5e5] dark:bg-[#3a2d1e] text-[#1c140d] dark:text-[#fcfaf8] text-sm font-bold tracking-wide hover:opacity-80 transition-colors"
            >
              取消
            </button>
            <button className={`flex h-11 px-6 items-center justify-center rounded-lg ${bgPrimary} text-white text-sm font-bold tracking-wide hover:opacity-90 transition-colors`}>
              创建圈子
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateCommunity;