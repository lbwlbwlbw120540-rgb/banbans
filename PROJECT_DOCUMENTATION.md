# Nano Banana Pro 项目文档

## 1. 项目概述

### 1.1 项目背景
本项目是基于 Next.js 14 复刻的 AI 图像生成和编辑工具网站，参考了 [nanobananax.net](https://www.nanobananax.net/#faqs) 的设计风格和功能模块。

### 1.2 项目目标
- 打造现代化、响应式的 SaaS 官网
- 实现核心页面：首页、产品特性、定价和登录
- 集成 Google 登录功能
- 采用玻璃态设计和渐变背景，提升视觉体验
- 优化 SEO 和移动端体验

## 2. 技术栈

### 2.1 核心框架
- **Next.js 14** - 使用 App Router
- **TypeScript** - 类型安全
- **Tailwind CSS** - 实用优先的 CSS 框架

### 2.2 依赖库
- **next-auth** - 认证解决方案
- **React 18** - UI 框架

### 2.3 开发工具
- **Vitest** - 测试框架
- **ESLint** - 代码质量检查

## 3. 项目结构

```
├── app/                      # App Router 页面
│   ├── layout.tsx            # 根布局
│   ├── page.tsx              # 首页
│   ├── login/                # 登录页面
│   │   └── page.tsx
│   ├── nano-banana-pro/      # 产品特性页面
│   │   └── page.tsx
│   ├── price/                # 定价页面
│   │   └── page.tsx
│   └── api/                  # API 路由
│       └── auth/             # 认证 API
│           └── [...nextauth]/
│               └── route.ts
├── components/               # 可复用组件
│   ├── layout/              # 布局组件
│   └── ui/                  # UI 组件
│       ├── Button.tsx
│       ├── Footer.tsx
│       ├── Navbar.tsx
│       └── SessionProviderClient.tsx
├── auth.ts                  # NextAuth 配置
├── .env.local               # 环境变量
└── next.config.js           # Next.js 配置
```

## 4. 页面设计

### 4.1 首页 (Home)
- 英雄区域：展示产品核心价值主张
- 关键特性：3个核心功能卡片
- 工作流程：3步骤展示使用流程
- CTA 区域：引导用户注册或查看定价

### 4.2 产品特性 (Nano Banana Pro)
- 英雄区域：产品介绍
- 详细特性：4个主要功能模块，包含图文说明
- 应用场景：4个行业应用案例
- 案例展示：2个实际使用案例
- CTA 区域：引导用户选择计划

### 4.3 定价 (Price)
- 英雄区域：定价策略说明
- 定价方案：3个层级的定价卡片（免费、专业、企业）
- 功能对比：详细的功能对比表格
- FAQ 区域：常见问题解答
- CTA 区域：引导用户注册

### 4.4 登录 (Login)
- 登录表单：包含邮箱、密码输入
- 记住我和忘记密码功能
- 社交登录：Google、GitHub、Twitter
- 注册链接

## 5. 组件设计

### 5.1 Navbar 组件
- 固定在顶部的导航栏
- 响应式设计，移动端折叠菜单
- 支持玻璃态效果
- 导航链接：首页、产品特性、定价
- 登录按钮

### 5.2 Footer 组件
- 页脚信息展示
- 产品、公司、支持链接
- 版权信息
- 支持固定在底部的模式

### 5.3 Button 组件
- 支持多种变体：primary、secondary、outline、ghost
- 支持不同尺寸：sm、md、lg
- 支持 fullWidth 模式
- 支持 href 属性，渲染为 Link 组件

### 5.4 SessionProviderClient 组件
- 客户端会话提供者
- 包装 next-auth 的 SessionProvider
- 使用 'use client' 指令

## 6. 功能实现

### 6.1 Google 登录
- 使用 next-auth 实现
- 配置文件：`auth.ts`
- API 路由：`app/api/auth/[...nextauth]/route.ts`
- 登录按钮：调用 `signIn('google')`
- 会话管理：使用 `useSession()` hook

### 6.2 响应式设计
- 使用 Tailwind CSS 的响应式断点
- 移动端菜单折叠
- 自适应布局：grid 和 flex
- 优化移动端触摸体验

### 6.3 玻璃态设计
- 自定义 CSS 变量
- 背景模糊效果
- 半透明背景色
- 边框效果

### 6.4 SEO 优化
- 语义化 HTML 结构
- 优化的 URL 结构
- 元数据配置：title、description、keywords
- 图片优化：使用 Next.js Image 组件

## 7. 部署说明

### 7.1 环境变量
```
# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# NextAuth Secret
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://your-domain.com
```

### 7.2 构建命令
```bash
npm run build
npm start
```

### 7.3 部署平台
推荐使用 Vercel 部署，支持 Next.js 自动优化。

## 8. 开发说明

### 8.1 启动开发服务器
```bash
npm run dev
```

### 8.2 测试
```bash
npm run test
```

### 8.3 代码质量
```bash
npm run lint
```

## 9. 设计规范

### 9.1 颜色系统
- 主色调：靛蓝色 (#6366f1) 和紫色 (#8b5cf6)
- 背景：渐变 from-gray-900 via-indigo-900 to-purple-900
- 文本：白色 (#ffffff) 和浅灰色

### 9.2 排版
- 字体：Inter
- 标题：粗体，大字号
- 正文：清晰易读

### 9.3 间距
- 一致的间距系统
- 响应式调整

## 10. 常见问题

### 10.1 移动端导航宽度问题
- 已修复：使用 fixed left-0 right-0 容器
- 确保移动端菜单不超出视口

### 10.2 React Context 错误
- 已修复：创建客户端 SessionProvider
- 使用 'use client' 指令

### 10.3 横向滚动条问题
- 已修复：添加 overflow-hidden
- 调整绝对定位元素位置

## 11. 未来规划

- 添加注册页面
- 实现更多认证方式
- 集成 Stripe 支付
- 添加博客功能
- 实现黑暗模式切换

## 12. 维护说明

### 12.1 更新依赖
```bash
npm update
```

### 12.2 监控
- 建议使用 Vercel Analytics
- 监控页面加载性能
- 追踪用户行为

---

**文档更新日期**: 2026-01-22
**版本**: 1.0.0