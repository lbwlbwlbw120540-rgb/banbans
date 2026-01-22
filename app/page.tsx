import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">AI Image Generator & Editor</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Turn simple prompts and reference images into finished visuals. Create new images, edit details, and keep your characters consistent across every scene.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/nano-banana-pro" 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover-lift"
                >
                  Get Started
                </Link>
                <Link 
                  href="/price" 
                  className="border-2 border-indigo-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover-lift hover:bg-indigo-500/10"
                >
                  View Pricing
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">1M+</div>
                  <div className="text-gray-400">Images Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">50K+</div>
                  <div className="text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">99.9%</div>
                  <div className="text-gray-400">Uptime</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative overflow-hidden">
              <div className="absolute -top-10 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="relative glass-card p-4 rounded-2xl floating">
                <Image 
                  src="https://picsum.photos/seed/nanobanana/800/600" 
                  alt="Nano Banana Pro AI Image Generator" 
                  width={800} 
                  height={600} 
                  className="rounded-xl w-full"
                />
                <div className="mt-4 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">AI Generating in Real-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding bg-black/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Powerful AI tools designed for creators, artists, and teams
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-6 rounded-xl hover-lift">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Character Consistency</h3>
              <p className="text-gray-400">
                Design a hero once and reuse them everywhere. Keep facial structure, outfits, and style coherent across multiple prompts.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-card p-6 rounded-xl hover-lift">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Context-Aware Editing</h3>
              <p className="text-gray-400">
                Upload an image and say exactly how you want it changed. Remove objects, swap backgrounds, adjust clothing, and refine colors.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-card p-6 rounded-xl hover-lift">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">High-Precision Generation</h3>
              <p className="text-gray-400">
                Describe what you want, add optional reference images, and let Nano Banana Pro handle composition, lighting, and detail.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Simple, intuitive workflow for creating stunning AI-generated images
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div className="glass-card p-6 rounded-xl ml-8">
                <h3 className="text-xl font-bold mb-3">Describe or Upload</h3>
                <p className="text-gray-400">
                  Type a clear prompt describing the scene, subject, or edit you want. Optionally upload up to four reference images.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div className="glass-card p-6 rounded-xl ml-8">
                <h3 className="text-xl font-bold mb-3">Generate and Refine</h3>
                <p className="text-gray-400">
                  Click Generate Image and let Nano Banana Pro create a first result. Review and refine with additional instructions.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div className="glass-card p-6 rounded-xl ml-8">
                <h3 className="text-xl font-bold mb-3">Save and Reuse</h3>
                <p className="text-gray-400">
                  Save your favorites, download high-resolution versions, and reuse prior generations as references.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Creativity?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators using Nano Banana Pro to generate stunning AI images
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/nano-banana-pro" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover-lift"
            >
              Get Started Free
            </Link>
            <Link 
              href="/price" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover-lift hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
