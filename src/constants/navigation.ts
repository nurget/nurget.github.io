export interface NavItem {
    label: string;
    href: string;
    icon: string;
}

export const NAV_ITEMS: NavItem[] = [
    {
        label: 'Introduction',
        href: '#introduction',
        icon: 'user'
    },
    {
        label: 'Experience',
        href: '#experience',
        icon: 'briefcase'
    },
    {
        label: 'Skills',
        href: '#skills',
        icon: 'code'
    },
    {
        label: 'Portfolio',
        href: '#portfolio',
        icon: 'folder'
    },
    {
        label: 'Contact',
        href: '#contact',
        icon: 'mail'
    }
];

export const SOCIAL_LINKS = [
    {
        platform: 'GitHub',
        url: 'https://github.com/yourusername',
        icon: 'github'
    },
    {
        platform: 'Blog',
        url: 'https://your-blog.com',
        icon: 'external-link'
    },
    {
        platform: 'Email',
        url: 'mailto:your.email@example.com',
        icon: 'mail'
    }
];
