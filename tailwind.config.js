/** @type {import('tailwindcss').Config} */
export default {
  // 确保这里包含了你的所有组件路径
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      // 1. 从原 HTML 提取的自定义颜色
      colors: {
        "primary": "#13ec37",
        "background-light": "#ffffff",
        "background-dark": "#0D1117",
      },
      // 2. 从原 HTML 提取的字体配置
      fontFamily: {
        "display": ["Plus Jakarta Sans", "Noto Sans", "sans-serif"]
      },
      // 3. 从原 HTML 提取的圆角配置
      borderRadius: {
        "DEFAULT": "0.25rem", 
        "lg": "0.5rem", 
        "xl": "0.75rem", 
        "full": "9999px"
      },
    },
  },
  plugins: [
    // 如果原 HTML 用了 forms 插件，这里最好也装上
    // 需要运行: npm install -D @tailwindcss/forms @tailwindcss/container-queries
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/container-queries'),
  ],
}