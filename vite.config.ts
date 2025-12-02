/*
 * @Author: zhouhanwei sgzhouhanwei@163.com
 * @Date: 2025-12-02 13:42:42
 * @LastEditors: zhouhanwei sgzhouhanwei@163.com
 * @LastEditTime: 2025-12-02 14:00:44
 * @FilePath: /yxc-ssr/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: [
      // 你的现有配置
      'antd',
      '@ant-design/cssinjs',
      /^@rc-component/,
      /^rc-/,
      '@ant-design/icons',
      '@ant-design/icons-svg',
      
      // --- 新增以下两行修复 hash 报错 ---
      '@emotion/hash', 
      '@emotion/unitless', 
    ],
  },
})