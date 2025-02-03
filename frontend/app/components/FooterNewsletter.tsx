import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
const FooterNewsletter = () => {
  return (
    <div>
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

    </div>
  )
}

export default FooterNewsletter