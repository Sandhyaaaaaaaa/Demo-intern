'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div>
            <Link 
              href="/" 
              className={`text-2xl font-display font-bold transition-colors duration-300 ${
                isScrolled ? 'text-dark-900' : 'text-white'
              }`}
            >
              Landing
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`font-medium transition-colors duration-300 hover:text-indigo-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item.name}
                </button>
              </div>
            ))}
            <div>
              <button
                onClick={() => handleNavClick('#contact')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-purple-500 hover:to-indigo-500'
                    : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200/50">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="block py-2 text-gray-700 font-medium hover:text-indigo-500 transition-colors duration-300 w-full text-left"
                  >
                    {item.name}
                  </button>
                </div>
              ))}
              <div>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full text-center hover:from-purple-500 hover:to-indigo-500 transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
