'use client'

import Image from 'next/image'
import { CheckIcon, ArrowRight } from 'lucide-react'

interface FeatureSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  features: string[]
  sectionIndex: number
  mediaType?: 'image' | 'video'
}

export default function FeatureSection({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  features,
  sectionIndex,
  mediaType = 'image'
}: FeatureSectionProps) {
  // Alternating backgrounds
  const isEven = sectionIndex % 2 === 0
  const backgroundClass = isEven 
    ? 'bg-white' 
    : 'bg-gradient-to-r from-gray-50 to-gray-100'

  return (
    <section className={`py-20 lg:py-32 ${backgroundClass}`}>
      <div className="container-max section-padding">
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center ${
          reverse ? 'lg:grid-flow-col-dense' : ''
        }`}>
          {/* Media with card hover effects */}
          <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
            <div className="group relative">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                {mediaType === 'video' ? (
                  <video
                    src={imageSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    aria-label={imageAlt}
                  />
                ) : (
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                )}
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${reverse ? 'lg:col-start-1' : ''}`}>
            <div className="max-w-lg">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark-900 mb-8 leading-tight text-balance">
                {title}
              </h2>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed text-balance font-light">
                {description}
              </p>

              {/* Features List */}
              <ul className="space-y-6 mb-10">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <CheckIcon 
                        className="w-6 h-6 text-green-500" 
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-gray-700 text-lg group-hover:text-dark-900 transition-colors duration-200">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  Discover More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
