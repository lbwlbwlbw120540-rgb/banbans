import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

export default function NanoBananaPro() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Nano Banana Pro</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI Image Generator & Editor powered by Google. Turn simple prompts and reference images into finished visuals with remarkable precision.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="relative glass-card p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">AI-Powered Image Creation</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="mt-1 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-gray-300">Create new images from text prompts</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="mt-1 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-gray-300">Edit existing images with natural language</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="mt-1 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-gray-300">Maintain character consistency across scenes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="mt-1 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-gray-300">Generate high-resolution images up to 4K</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <Image 
                    src="https://picsum.photos/seed/aiimage/800/600" 
                    alt="AI Image Generation" 
                    width={800} 
                    height={600} 
                    className="rounded-xl w-full" 
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-lg">
                    <div className="text-white font-bold">Real-time Generation</div>
                    <div className="text-sm text-gray-200">See results in seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="section-padding bg-black/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to create stunning AI-generated visuals
            </p>
          </div>
          
          <div className="space-y-20">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold mb-6">Character Consistency</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Design a hero once and reuse them everywhere. Nano Banana Pro keeps facial structure, outfits, and style coherent across multiple prompts so ongoing comics, game assets, and branded characters stay consistent.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-300">Maintain character identity across different scenes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-300">Consistent clothing and accessories</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-300">Coherent facial expressions and features</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="glass-card p-4 rounded-xl">
                  <Image 
                    src="https://picsum.photos/seed/character/800/600" 
                    alt="Character Consistency" 
                    width={800} 
                    height={600} 
                    className="rounded-lg" 
                  />
                </div>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Context-Aware Editing</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Upload an image and say exactly how you want it changed. Nano Banana Pro removes objects, swaps backgrounds, adjusts clothing, and refines colors while keeping perspective, shadows, and story logic intact.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Intelligent object removal and addition</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Background replacement with realistic lighting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Clothing and accessory modifications</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="glass-card p-4 rounded-xl">
                  <Image 
                    src="https://picsum.photos/seed/context/800/600" 
                    alt="Context-Aware Editing" 
                    width={800} 
                    height={600} 
                    className="rounded-lg" 
                  />
                </div>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold mb-6">High-Precision Generation</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Describe what you want, add optional reference images, and let Nano Banana Pro handle composition, lighting, and detail for sharp faces, clean edges, and balanced scenes ready for campaigns or client work.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-300">Professional-quality output with fine details</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-300">Controlled composition and lighting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-300">Sharp edges and realistic textures</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="glass-card p-4 rounded-xl">
                  <Image 
                    src="https://picsum.photos/seed/precision/800/600" 
                    alt="High-Precision Generation" 
                    width={800} 
                    height={600} 
                    className="rounded-lg" 
                  />
                </div>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Fast Iteration Workflow</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Generate a first draft, review, and send new instructions without starting over. Multi-step refinement remembers context across edits, so every change moves your image closer to the final vision.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-300">Rapid generation and refinement</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-300">Context-aware editing across multiple rounds</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-300">Non-destructive editing workflow</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="glass-card p-4 rounded-xl">
                  <Image 
                    src="https://picsum.photos/seed/iteration/800/600" 
                    alt="Fast Iteration Workflow" 
                    width={800} 
                    height={600} 
                    className="rounded-lg" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Scenarios */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perfect for Every Creator</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nano Banana Pro adapts to your needs, whether you&rsquo;re a professional or hobbyist
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Scenario 1 */}
            <div className="glass-card p-6 rounded-xl hover-lift">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Storytelling & Comics</h3>
              <p className="text-gray-400">
                Design recurring characters, locations, and key moments while exploring new outfits, angles, and moods for every chapter.
              </p>
            </div>
            
            {/* Scenario 2 */}
            <div className="glass-card p-6 rounded-xl hover-lift">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Game Art & Design</h3>
              <p className="text-gray-400">
                Create fast character concepts, environment sketches, and prop ideas, maintaining a coherent universe while allowing wild experimentation.
              </p>
            </div>
            
            {/* Scenario 3 */}
            <div className="glass-card p-6 rounded-xl hover-lift">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Marketing & Branding</h3>
              <p className="text-gray-400">
                Create campaign visuals, product shots, and social posts directly in Nano Banana Pro, keeping colors, logos, and characters aligned with your brand.
              </p>
            </div>
            
            {/* Scenario 4 */}
            <div className="glass-card p-6 rounded-xl hover-lift">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Product Visualization</h3>
              <p className="text-gray-400">
                Turn to Nano Banana Pro for lifestyle mockups, alternate colorways, and scene variations, achieving high-quality renders without expensive photo shoots.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Showcase */}
      <section className="section-padding bg-black/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Case Showcase</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore real Nano Banana Pro prompts and results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Case 1 */}
            <div className="glass-card p-6 rounded-xl">
              <div className="relative h-64 mb-6">
                <Image 
                  src="https://picsum.photos/seed/case1/800/600" 
                  alt="Case 1" 
                  fill 
                  className="object-cover rounded-lg" 
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Portrait Enhancement</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-indigo-400">Prompt:</span>
                    <span className="text-sm text-gray-300">Focus on the faces of the crowd and make woman blurry</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-indigo-400">Result:</span>
                    <span className="text-sm text-gray-300">Enhanced portrait with selective focus</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Case 2 */}
            <div className="glass-card p-6 rounded-xl">
              <div className="relative h-64 mb-6">
                <Image 
                  src="https://picsum.photos/seed/case2/800/600" 
                  alt="Case 2" 
                  fill 
                  className="object-cover rounded-lg" 
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Scene Composition</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-indigo-400">Prompt:</span>
                    <span className="text-sm text-gray-300">Generate an image with an intense chiaroscuro effect</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-indigo-400">Result:</span>
                    <span className="text-sm text-gray-300">Dramatic scene with high contrast lighting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Creating?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators using Nano Banana Pro to generate stunning AI images
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/price" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover-lift"
            >
              Choose a Plan
            </Link>
            <Link 
              href="/login" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover-lift hover:bg-white/10"
            >
              Login to Your Account
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
