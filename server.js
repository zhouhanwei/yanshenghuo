/*
 * @Author: zhouhanwei sgzhouhanwei@163.com
 * @Date: 2025-12-02 13:50:34
 * @LastEditors: zhouhanwei sgzhouhanwei@163.com
 * @LastEditTime: 2025-12-02 13:55:06
 * @FilePath: /yxc-ssr/server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD

export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
  hmrPort
) {
  const resolve = (p) => path.resolve(__dirname, p)
  const app = express()

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite
  if (!isProd) {
    // 开发模式：使用 Vite 服务器作为中间件
    vite = await (await import('vite')).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
      appType: 'custom',
    })
    app.use(vite.middlewares)
  } else {
    // 生产模式：使用压缩和静态文件服务
    app.use((await import('compression')).default())
    app.use(
      (await import('serve-static')).default(resolve('dist/client'), {
        index: false,
      })
    )
  }

  app.use(async (req, res, next) => {
    try {
      const url = req.originalUrl

      let template, render
      if (!isProd) {
        // 开发模式：读取源码并应用 Vite 转换
        template = fs.readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
      } else {
        // 生产模式：读取构建后的文件
        template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
        render = (await import('./dist/server/entry-server.js')).render
      }

      // 执行渲染，获取 HTML 和 Antd CSS
      const { html: appHtml, css: antdCss } = await render(url)

      // 注入到 HTML 模板中
      const html = template
        .replace(`<!--app-html-->`, appHtml)
        .replace(`<!--antd-css-->`, `<style>${antdCss}</style>`)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  return { app, vite }
}

if (!isTest) {
  createServer().then(({ app }) =>
    app.listen(5173, () => {
      console.log('http://localhost:5173')
    })
  )
}