# indieai

[indieai](https://aircrushin.github.io) 的个人博客。用 Astro 构建，发布到 GitHub Pages。

站点地址：<https://aircrushin.github.io>

## 本地预览

需要 Node.js 22 或更高版本。

```bash
npm install
npm run dev
```

浏览器打开提示的本地地址即可。草稿文章只在本地开发时显示，执行 `npm run build` 或发布到线上时不会出现。

## 如何新增一篇文章

1. 在 `src/content/blog/` 目录新建一个 Markdown 文件，例如 `my-new-post.md`。文件名（不含扩展名）会成为文章地址：`https://aircrushin.github.io/posts/my-new-post/`。
2. 文件开头必须有 frontmatter，字段如下：

```md
---
title: 文章标题
description: 一两句摘要，也会用在 RSS 和分享卡片上。
pubDate: 2026-11-26
updatedDate: 2026-11-27   # 可选，修改日期
heroImage: /images/cover.png  # 可选，放在 public/ 下的图片路径
tags:
  - 独立开发
  - AI
draft: true   # true 时不会出现在线上；写完要发布时改成 false，或删掉这一行
---

正文从这里开始，使用 Markdown。
```

3. 必填字段是 `title`、`description`、`pubDate`。`tags` 可省略（默认为空）。`draft` 默认为 `false`。
4. 把文件提交到 `main` 分支后，再发布站点：

```bash
npm run publish
```

这条命令会构建静态文件，并更新 `gh-pages` 分支。一两分钟后可以在 https://aircrushin.github.io 看到更新（`draft: true` 的文章除外）。

## 当前是怎么发布的

网站目前从仓库的 `gh-pages` 分支发布（分支里是构建好的静态文件，不是源码）。源码在 `main`。

本来打算用 GitHub Actions（`.github/workflows/deploy.yml`）在每次推送到 `main` 时自动构建，但创建仓库时用的 GitHub 令牌没有 `workflow` 权限，这个工作流文件无法推上去。如果之后补上 `workflow` 权限，可以把该文件推到 `main`，再把仓库的 Pages 设置改成 Source: GitHub Actions。

## 关于、作品页

- 关于：`src/pages/about.astro`
- 作品：`src/data/projects.ts`（页面是 `src/pages/projects.astro`）

修改后同样运行 `npm run publish`。
