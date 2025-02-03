import { Button } from "@/components/ui/button"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  CreditCard,
  Shield,
  Award,
  ArrowRight,
} from "lucide-react"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="relative overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative z-10 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Subscribe to our newsletter
              </h2>
              <p className="mt-3 max-w-2xl text-gray-400">
                Stay updated with our latest collections, exclusive offers, and style tips.
                Join our community of fashion enthusiasts.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-lg border-gray-700 bg-gray-800 px-5 py-3 placeholder-gray-500 focus:border-gray-500 focus:ring-gray-500 sm:max-w-xs"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <Button className="w-full bg-white hover:bg-gray-100 text-gray-900 px-8">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
              <p className="mt-3 text-sm text-gray-400">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">About EcomShop</h3>
            <p className="text-gray-400 mb-6">
              Premium shopping destination for modern lifestyle essentials. Curating quality
              products since 2010 with a focus on sustainability and style.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                <span>123 Fashion Street, NY 10001</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-400" />
                <span>contact@ecomshop.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-gray-400" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <a href="#" className="block hover:text-white transition-colors">New Arrivals</a>
                <a href="#" className="block hover:text-white transition-colors">Best Sellers</a>
                <a href="#" className="block hover:text-white transition-colors">Sale Items</a>
                <a href="#" className="block hover:text-white transition-colors">Gift Cards</a>
                <a href="#" className="block hover:text-white transition-colors">Clearance</a>
                <a href="#" className="block hover:text-white transition-colors">Look Book</a>
              </div>
              <div className="space-y-4">
                <a href="#" className="block hover:text-white transition-colors">Our Story</a>
                <a href="#" className="block hover:text-white transition-colors">Careers</a>
                <a href="#" className="block hover:text-white transition-colors">Store Locator</a>
                <a href="#" className="block hover:text-white transition-colors">Size Guide</a>
                <a href="#" className="block hover:text-white transition-colors">Blog</a>
                <a href="#" className="block hover:text-white transition-colors">Press</a>
              </div>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Customer Service</h3>
            <div className="space-y-4">
              <a href="#" className="block hover:text-white transition-colors">Help Center</a>
              <a href="#" className="block hover:text-white transition-colors">Track Order</a>
              <a href="#" className="block hover:text-white transition-colors">Shipping Info</a>
              <a href="#" className="block hover:text-white transition-colors">Returns & Exchanges</a>
              <a href="#" className="block hover:text-white transition-colors">Contact Support</a>
              <a href="#" className="block hover:text-white transition-colors">FAQ</a>
              <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Download & Social */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
            <div className="mb-8">
              <p className="text-gray-400 mb-4">Download our mobile app</p>
              <div className="space-y-3">
                <a href="#" className="block">
                  <img 
                    src="/api/placeholder/200/60" 
                    alt="Download on App Store" 
                    className="h-10 w-auto"
                  />
                </a>
                <a href="#" className="block">
                  <img 
                    src="/api/placeholder/200/60" 
                    alt="Get it on Google Play" 
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </div>
            
            <div>
              <p className="text-gray-400 mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center md:justify-start">
              <CreditCard className="h-8 w-8 text-gray-400" />
              <div className="ml-4">
                <h4 className="text-white font-semibold">Secure Payment</h4>
                <p className="text-sm text-gray-400">All major cards accepted</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Shield className="h-8 w-8 text-gray-400" />
              <div className="ml-4">
                <h4 className="text-white font-semibold">Shop with Confidence</h4>
                <p className="text-sm text-gray-400">Money-back guarantee</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Award className="h-8 w-8 text-gray-400" />
              <div className="ml-4">
                <h4 className="text-white font-semibold">Premium Quality</h4>
                <p className="text-sm text-gray-400">Certified products</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {year} EcomShop. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <img 
                src="/api/placeholder/50/30" 
                alt="Visa" 
                className="h-8 w-auto"
              />
              <img 
                src="/api/placeholder/50/30" 
                alt="Mastercard" 
                className="h-8 w-auto"
              />
              <img 
                src="/api/placeholder/50/30" 
                alt="American Express" 
                className="h-8 w-auto"
              />
              <img 
                src="/api/placeholder/50/30" 
                alt="PayPal" 
                className="h-8 w-auto"
              />
              <img 
                src="/api/placeholder/50/30" 
                alt="Apple Pay" 
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer