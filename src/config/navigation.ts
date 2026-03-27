export interface SidebarItem {
  label: string;
  href: string;
  icon: string;
  color: string;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export const sidebarSections: SidebarSection[] = [
  {
    title: '首页',
    items: [
      { label: '欢迎使用', href: '/docs/getting-started', icon: 'home', color: 'text-blue-500' },
      { label: '中转站是什么', href: '/docs/getting-started#什么是中转站', icon: 'info', color: 'text-blue-500' },
    ],
  },
  {
    title: '使用指南',
    items: [
      { label: '注册账号', href: '/docs/user-guide', icon: 'user-plus', color: 'text-blue-500' },
      { label: '创建专属 Key', href: '/docs/user-guide#创建专属-key', icon: 'key', color: 'text-blue-500' },
      { label: '修改令牌设置', href: '/docs/guide/modify-token', icon: 'settings', color: 'text-blue-500' },
      { label: '充值', href: '/docs/pricing', icon: 'credit-card', color: 'text-blue-500' },
    ],
  },
  {
    title: 'Node 安装',
    items: [
      { label: 'Windows 平台', href: '/docs/installation/windows', icon: 'monitor', color: 'text-blue-600' },
      { label: 'macOS 平台', href: '/docs/installation/macos-linux', icon: 'apple', color: 'text-slate-600 dark:text-slate-400' },
      { label: 'Linux 平台', href: '/docs/installation/linux', icon: 'terminal', color: 'text-orange-600' },
    ],
  },
  {
    title: '配置工具',
    items: [
      { label: 'CC-Switch 配置工具', href: '/docs/tools/cc-switch', icon: 'zap', color: 'text-orange-400' },
      { label: 'Claude Code Hub', href: '/docs/tools/claude-code-hub', icon: 'square-code', color: 'text-slate-600 dark:text-slate-400' },
    ],
  },
  {
    title: '部署指南',
    items: [
      { label: 'Claude Code 部署', href: '/docs/model-apis', icon: 'rocket', color: 'text-orange-500' },
      { label: 'CodeX 部署', href: '/docs/deploy/codex', icon: 'github', color: 'text-slate-900 dark:text-slate-200' },
      { label: 'Gemini CLI 部署', href: '/docs/deploy/gemini-cli', icon: 'sparkles', color: 'text-blue-500' },
      { label: 'NanoBanana 图像生成', href: '/docs/deploy/nano-banana', icon: 'image-plus', color: 'text-yellow-500' },
    ],
  },
  {
    title: '第三方应用',
    items: [
      { label: 'Hapi 远程控制', href: '/docs/apps/hapi', icon: 'wifi', color: 'text-slate-500' },
      { label: 'Hapi 进阶: 优选 IP 配置', href: '/docs/apps/hapi-advanced', icon: 'cpu', color: 'text-slate-500' },
      { label: 'Alma 客户端', href: '/docs/apps/alma', icon: 'ghost', color: 'text-slate-700 dark:text-slate-300' },
      { label: 'CherryStudio 客户端', href: '/docs/apps/cherry-studio', icon: 'laptop', color: 'text-red-500' },
      { label: 'OpenCode', href: '/docs/apps/opencode', icon: 'code', color: 'text-slate-900 dark:text-slate-200' },
      { label: 'OpenClaw', href: '/docs/apps/openclaw', icon: 'pointer', color: 'text-red-500' },
    ],
  },
  {
    title: '支持与 FAQ',
    items: [
      { label: '进阶技巧', href: '/docs/support/advanced', icon: 'rocket', color: 'text-blue-400' },
      { label: '疑难杂症', href: '/docs/support/troubleshooting', icon: 'wrench', color: 'text-orange-400' },
      { label: '售前售后', href: '/docs/support/sales', icon: 'headset', color: 'text-green-500' },
      { label: '常见问题', href: '/docs/community', icon: 'help-circle', color: 'text-purple-500' },
    ],
  },
];

export const headerNav = [
  { title: '文档', href: '/docs/getting-started' },
  { title: '部署指南', href: '/docs/model-apis' },
  { title: 'FAQ', href: '/docs/community' },
];
