import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import FeatureSection from '@/components/FeatureSection'
import Navigation from '@/components/Navigation'

// Dynamically import components to reduce initial bundle size
const LazyFeatureSection = dynamic(() => import('@/components/FeatureSection'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Sticky Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Feature Section 1 - Video Left, Text Right */}
      <section id="features">
        <FeatureSection
        title="Powerful Features"
        description="Discover our cutting-edge solutions that help you achieve your goals faster and more efficiently than ever before."
        imageSrc="/Features.mp4"
        imageAlt="Powerful features demonstration video"
        reverse={false}
        sectionIndex={0}
        mediaType="video"
        features={[
          'Lightning-fast performance',
          'Intuitive user interface',
          'Advanced analytics',
          '24/7 customer support'
        ]}
        />
      </section>
      
      {/* Feature Section 2 - Text Left, Image Right */}
      <LazyFeatureSection
        title="Seamless Integration"
        description="Connect with your existing tools and workflows effortlessly. Our platform integrates with over 100+ popular services."
        imageSrc="/feature-2.svg"
        imageAlt="Feature 2 illustration showing integration connections"
        reverse={true}
        sectionIndex={1}
        features={[
          'One-click integrations',
          'Real-time synchronization',
          'Custom API endpoints',
          'Enterprise-grade security'
        ]}
      />

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark-900 mb-8 leading-tight text-balance">
              About Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed text-balance font-light max-w-3xl mx-auto">
              We&apos;re passionate about creating digital experiences that not only look amazing but also perform exceptionally. 
              Our team combines cutting-edge technology with thoughtful design to deliver solutions that drive real results.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">500+</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-2">Projects Completed</h3>
                <p className="text-gray-600">Successfully delivered projects across various industries</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">99%</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-2">Client Satisfaction</h3>
                <p className="text-gray-600">Our clients consistently rate us highly for quality and service</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-2">Support Available</h3>
                <p className="text-gray-600">Round-the-clock support to ensure your success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-dark-900">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight text-balance">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed text-balance font-light max-w-2xl mx-auto">
              Ready to start your next project? We&apos;d love to hear from you. 
              Send us a message and we&apos;ll respond as soon as possible.
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
                    <p className="text-gray-300">hello@landingsite.com</p>
                    <p className="text-gray-300">support@landingsite.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300">+1 (555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Address</h4>
                    <p className="text-gray-300">123 Innovation Street</p>
                    <p className="text-gray-300">Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
