import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:0]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:0]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[calc(100vh-4rem)] flex items-center">
          <div className="max-w-3xl mx-auto py-20 lg:py-32">
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-gray-900/5 px-3 py-1 text-sm font-medium mb-6">
                <span className="text-gray-900">New Collection 2025</span>
                <div className="mx-3 h-5 w-px bg-gray-900/10"></div>
                <span className="text-gray-600">Save 20% off</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Elevate Your
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                  Everyday Style
                </span>
              </h1>
              
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Discover our thoughtfully curated collection of premium essentials designed for the modern lifestyle. Each piece tells a story of quality, comfort, and timeless elegance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg">
                  Shop Collection
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg">
                  View Lookbook
                </Button>
              </div>
              
              <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                {[
                  ['2K+', 'Products'],
                  ['24/7', 'Support'],
                  ['98%', 'Happy Clients']
                ].map(([stat, label]) => (
                  <div key={label} className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-transparent rounded-xl -z-10"></div>
                    <div className="p-4">
                      <div className="text-3xl font-bold text-gray-900">{stat}</div>
                      <div className="text-sm text-gray-600 mt-1">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl -z-10"></div>
    </header>
  )
}

export default Header