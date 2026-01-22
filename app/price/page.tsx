import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

export default function Price() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Simples, Transparent Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that&rsquo;s right for you. No hidden fees, no long-term commitments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="glass-card rounded-xl overflow-hidden hover-lift">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400 mb-8">
                  Perfect for getting started with AI image generation
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">Up to 10 images per month</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">Basic prompt generation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">Standard resolution (1024x1024)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">Community support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">✗</div>
                    <span className="text-gray-400 line-through">Character consistency</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">✗</div>
                    <span className="text-gray-400 line-through">Context-aware editing</span>
                  </li>
                </ul>
                
                <Link 
                  href="/login" 
                  className="block w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center rounded-lg hover-lift"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="glass-card rounded-xl overflow-hidden hover-lift border-2 border-indigo-500 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-sm font-medium">
                Most Popular
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400 mb-8">
                  For serious creators and small teams
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">Up to 100 images per month</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">Advanced prompt generation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">High resolution (2048x2048)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">Character consistency</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">Context-aware editing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">Priority support</span>
                  </li>
                </ul>
                
                <Link 
                  href="/login" 
                  className="block w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center rounded-lg hover-lift"
                >
                  Start Pro Plan
                </Link>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="glass-card rounded-xl overflow-hidden hover-lift">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400 mb-8">
                  For large teams and businesses
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">Unlimited images per month</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">Ultra resolution (4096x4096)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">All Pro features</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">Team collaboration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">API access</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-gray-300">24/7 dedicated support</span>
                  </li>
                </ul>
                
                <Link 
                  href="/login" 
                  className="block w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center rounded-lg hover-lift"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Comparison */}
      <section className="section-padding bg-black/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Feature Comparison</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See what&rsquo;s included in each plan
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-800/50">
                  <th className="py-4 px-6 text-left text-lg font-medium">Features</th>
                  <th className="py-4 px-6 text-center text-lg font-medium">Free</th>
                  <th className="py-4 px-6 text-center text-lg font-medium">Pro</th>
                  <th className="py-4 px-6 text-center text-lg font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="py-4 px-6 text-gray-300">Monthly Image Generation</td>
                  <td className="py-4 px-6 text-center">10</td>
                  <td className="py-4 px-6 text-center">100</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-300">Maximum Resolution</td>
                  <td className="py-4 px-6 text-center">1024x1024</td>
                  <td className="py-4 px-6 text-center">2048x2048</td>
                  <td className="py-4 px-6 text-center">4096x4096</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-300">Character Consistency</td>
                  <td className="py-4 px-6 text-center text-red-400">✗</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-300">Context-Aware Editing</td>
                  <td className="py-4 px-6 text-center text-red-400">✗</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-300">Advanced Prompt Generation</td>
                  <td className="py-4 px-6 text-center text-red-400">✗</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-300">API Access</td>
                  <td className="py-4 px-6 text-center text-red-400">✗</td>
                  <td className="py-4 px-6 text-center text-red-400">✗</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-300">Team Collaboration</td>
                  <td className="py-4 px-6 text-center text-red-400">✗</td>
                  <td className="py-4 px-6 text-center text-red-400">✗</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-300">Priority Support</td>
                  <td className="py-4 px-6 text-center text-red-400">✗</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-300">Dedicated Account Manager</td>
                  <td className="py-4 px-6 text-center text-red-400">✗</td>
                  <td className="py-4 px-6 text-center text-red-400">✗</td>
                  <td className="py-4 px-6 text-center text-green-400">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding" id="faqs">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about Nano Banana Pro
            </p>
          </div>
          
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs">?</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">How do I get started with Nano Banana Pro?</h3>
                  <p className="text-gray-300">
                    Simply sign up for a free account, and you&rsquo;ll be able to start generating images right away. You can upgrade to a paid plan at any time to access more features.
                  </p>
                </div>
              </div>
            </div>
            
            {/* FAQ 2 */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs">?</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Can I cancel my subscription at any time?</h3>
                  <p className="text-gray-300">
                    Yes, you can cancel your subscription at any time. There are no long-term commitments, and you&rsquo;ll continue to have access to your plan&rsquo;s features until the end of your billing cycle.
                  </p>
                </div>
              </div>
            </div>
            
            {/* FAQ 3 */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs">?</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">What payment methods do you accept?</h3>
                  <p className="text-gray-300">
                    We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal for your convenience.
                  </p>
                </div>
              </div>
            </div>
            
            {/* FAQ 4 */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs">?</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Can I upgrade or downgrade my plan?</h3>
                  <p className="text-gray-300">
                    Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you&rsquo;ll get immediate access to the new features. If you downgrade, the change will take effect at the end of your current billing cycle.
                  </p>
                </div>
              </div>
            </div>
            
            {/* FAQ 5 */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs">?</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Is there a limit to the size of reference images I can upload?</h3>
                  <p className="text-gray-300">
                    Yes, reference images must be under 10MB in size. For best results, we recommend using images with a resolution of at least 1024x1024 pixels.
                  </p>
                </div>
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
              href="/login" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover-lift"
            >
              Get Started Free
            </Link>
            <Link 
              href="/nano-banana-pro" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover-lift hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
