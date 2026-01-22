'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 导航项配置
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Nano Banana Pro', href: '/nano-banana-pro' },
    { label: 'Price', href: '/price' },
  ];
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-xl font-bold text-white">Nano Banana Pro</span>
          </div>
          
          {/* 桌面端导航 */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className="text-white hover:text-indigo-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/login" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg hover-lift">
              Login
            </Link>
          </nav>
          
          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* 移动端导航菜单 */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className="block py-2 text-white hover:text-indigo-300 transition-colors"
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="space-y-3 pt-3 border-t border-white/10">
              <Link 
                href="/login" 
                className="block py-3 text-center font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover-lift"
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
