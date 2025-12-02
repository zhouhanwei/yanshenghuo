/*
 * @Author: zhouhanwei sgzhouhanwei@163.com
 * @Date: 2025-12-02 13:49:36
 * @LastEditors: zhouhanwei sgzhouhanwei@163.com
 * @LastEditTime: 2025-12-02 13:49:42
 * @FilePath: /yxc-ssr/src/entry-server.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server' // 👈 关键：注意路径是 /server
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import App from './App'

// 接收 url 参数
export function render(url: string) {
  const cache = createCache()
  
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StyleProvider cache={cache}>
        {/* location 告诉路由当前渲染哪个页面 */}
        <StaticRouter location={url}> 
          <App />
        </StaticRouter>
      </StyleProvider>
    </React.StrictMode>
  )
  
  const css = extractStyle(cache)
  return { html, css }
}