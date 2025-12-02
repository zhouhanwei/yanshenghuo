import React, { useState } from 'react';
import { Modal } from 'antd'; // 引入 Antd Modal

interface CreatePostModalProps {
  open: boolean;
  onCancel: () => void;
  onSuccess: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ open, onCancel, onSuccess }) => {
  // 模拟已上传的图片状态
  const [images, setImages] = useState<string[]>([
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD8PGvCkn0-hnIxR48sVNcuyWwpO0kgFMPgRuUqJqd0NTGzRm-Ra49Lqmv-RJsbbN3H8emvIad4bgMxFvQ1kOOCAwgbPGOF3MF6m5WTJwWXKgO-fKXFm814pFUWe55xkx0X5Da6mMbfnzbek8ngvFuNA3jXg_9MKTlAI3FhmrTDLuGrJBue81EplXUwo5XyyaDd5fMcCweOOBpO2bfBsWg1axVcRZFG3-qpn3EHsQ5fjyvLY_SAb77nDNf5M8uyWz3hviDsiNN8YN00",
  ]);

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    // 这里处理提交逻辑
    // ...
    onSuccess(); // 提交成功后关闭
  };

  // 样式变量
  const primaryText = "text-[#f48c25]";
  const bgPrimary = "bg-[#f48c25]";
  const borderFocus = "focus:border-[#f48c25] focus:ring-[#f48c25]/50";

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null} // 我们使用自定义的底部按钮
      width={800} // 设置弹窗宽度
      centered // 垂直居中
      destroyOnClose
      className="create-post-modal" // 可以用于自定义 CSS
      maskClosable={false} // 防止误触关闭
    >
      <div className="flex flex-col gap-6 p-2">
        {/* Title */}
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-black text-[#1c140d] dark:text-[#fcfaf8]">发布新动态</h2>
          <p className="text-sm text-[#9c7349] dark:text-[#a88e73]">分享盐城的新鲜事...</p>
        </div>

        {/* Select Category */}
        <label className="flex flex-col gap-2">
          <p className="text-sm font-medium text-[#1c140d] dark:text-[#fcfaf8]">发布到</p>
          <select className={`form-select w-full rounded-lg border-[#e5e5e5] dark:border-[#3a2d1e] bg-white dark:bg-[#1e1e1e] text-[#1c140d] dark:text-[#fcfaf8] ${borderFocus} text-base h-10 px-3`}>
            <option value="one">选择一个圈子</option>
            <option value="food">盐城美食探店</option>
            <option value="photo">丹顶鹤摄影协会</option>
            <option value="hobby">周末徒步/骑行</option>
          </select>
        </label>

        {/* Content Textarea */}
        <label className="flex flex-col gap-2">
          <p className="text-sm font-medium text-[#1c140d] dark:text-[#fcfaf8]">内容</p>
          <textarea 
            className={`form-textarea w-full rounded-lg border-[#e5e5e5] dark:border-[#3a2d1e] bg-white dark:bg-[#1e1e1e] text-[#1c140d] dark:text-[#fcfaf8] ${borderFocus} min-h-[150px] resize-y p-3 text-base placeholder-[#9c7349] dark:placeholder-[#a88e73]`} 
            placeholder="在这里输入您的帖子内容..."
          ></textarea>
        </label>

        {/* Upload Area */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-[#1c140d] dark:text-[#fcfaf8]">上传图片或视频</p>
          
          {/* Drag & Drop Box */}
          <div className="flex flex-col items-center gap-3 rounded-lg border-2 border-dashed border-[#e5e5e5] dark:border-[#3a2d1e] px-6 py-8 text-center hover:bg-[#f8f7f5] dark:hover:bg-[#221910] transition-colors cursor-pointer group">
            <div className="text-[#9c7349] dark:text-[#a88e73] group-hover:text-[#f48c25] transition-colors">
              <span className="material-symbols-outlined text-4xl">cloud_upload</span>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm font-bold text-[#1c140d] dark:text-[#fcfaf8]">点击或拖拽上传</p>
              <p className="text-xs text-[#9c7349] dark:text-[#a88e73] mt-1">支持 JPG, PNG, MP4</p>
            </div>
          </div>

          {/* Image Previews */}
          {images.length > 0 && (
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 mt-2">
              {images.map((img, index) => (
                <div key={index} className="relative group aspect-square">
                  <div 
                    className="w-full h-full bg-center bg-cover rounded-lg border border-[#e5e5e5] dark:border-[#3a2d1e]" 
                    style={{ backgroundImage: `url('${img}')` }}
                  ></div>
                  <button 
                    onClick={() => removeImage(index)}
                    className="absolute -top-1.5 -right-1.5 flex items-center justify-center size-5 bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#c82b36]"
                  >
                    <span className="material-symbols-outlined text-xs">close</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button 
            onClick={onCancel}
            className="h-9 px-5 rounded-lg bg-transparent text-[#9c7349] dark:text-[#a88e73] hover:bg-gray-100 dark:hover:bg-[#3a2d1e] text-sm font-medium transition-colors"
          >
            取消
          </button>
          <button 
            onClick={handleSubmit}
            className={`h-9 px-6 rounded-lg ${bgPrimary} text-white text-sm font-bold shadow-sm hover:opacity-90 transition-opacity`}
          >
            发布
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePostModal;