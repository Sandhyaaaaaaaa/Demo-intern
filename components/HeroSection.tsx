'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
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
  }

  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Full-bleed background video */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onError={(e) => console.log('Video error:', e)}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
        >
          <source src="/11041434-hd_1920_1080_30fps.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
        </video>
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
      </div>

      {/* Animated Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-8 leading-tight text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Build Something
          <motion.span 
            className="block bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Amazing
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Create stunning, high-performance web experiences with our modern tools and technologies. 
          Fast, secure, and built for scale.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <button 
            onClick={() => handleNavClick('#features')}
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"
            aria-label="Learn more about our features"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          <button 
            onClick={() => handleNavClick('#about')}
            className="px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            aria-label="Learn more about us"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => handleNavClick('#features')}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer hover:border-white transition-colors duration-300"
        >
          <ChevronDown className="w-4 h-4 text-white/70 mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}
