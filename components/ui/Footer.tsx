import React from 'react';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections?: FooterSection[];
  isFixed?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ sections, isFixed = false }) => {
  const defaultSections: FooterSection[] = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/nano-banana-pro' },
        { label: 'Pricing', href: '/price' },
        { label: 'Examples', href: '#' },
        { label: 'Updates', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Privacy Policy', href: '#' },
      ],
    },
  ];

  const footerSections = sections || defaultSections;

  return (
    <footer className={`bg-black/50 py-12 ${isFixed ? 'fixed bottom-0 w-full' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo和简介 */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold text-white">Nano Banana Pro</span>
            </div>
            <p className="text-gray-400">
              AI Image Generator & Editor powered by Google
            </p>
          </div>
          
          {/* 页脚链接 */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className={`text-white font-bold mb-4 ${isFixed ? 'text-sm' : ''}`}>{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className={`${isFixed ? 'text-sm' : ''} text-gray-400 hover:text-white transition-colors`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* 版权信息 */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© 2026 Nano Banana Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
