export interface NavItem {
  title: string;
  href?: string;
  icon?: string;
  items?: NavItem[];
}

export const sidebarNav: NavItem[] = [
  {
    title: 'Getting Started',
    href: '/docs/getting-started',
    icon: 'rocket',
  },
  {
    title: 'Node.js Environment',
    icon: 'code',
    items: [
      { title: 'Windows Platform', href: '/docs/installation/windows' },
      { title: 'macOS / Linux', href: '/docs/installation/macos-linux' },
    ],
  },
  {
    title: 'User Guide',
    href: '/docs/user-guide',
    icon: 'book',
  },
  {
    title: 'Model APIs',
    href: '/docs/model-apis',
    icon: 'api',
  },
  {
    title: 'Pricing',
    href: '/docs/pricing',
    icon: 'payments',
  },
  {
    title: 'Community',
    href: '/docs/community',
    icon: 'groups',
  },
];

export const headerNav = [
  { title: 'Docs', href: '/docs/getting-started' },
  { title: 'Reference', href: '/docs/model-apis' },
  { title: 'Community', href: '/docs/community' },
];
