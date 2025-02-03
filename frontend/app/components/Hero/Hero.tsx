import { Button } from "@/components/ui/button"
import { 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  Star 
} from "lucide-react"

const Hero = () => {
  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Free Shipping",
      description: "On orders over $100"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Secure Payment",
      description: "100% secure checkout"
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Easy Returns",
      description: "30 day return policy"
    }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Collection",
      rating: 4.9,
      reviews: 120,
      price: "$199",
    },
    {
      id: 2,
      name: "Signature Series",
      rating: 4.8,
      reviews: 89,
      price: "$249",
    },
    {
      id: 3,
      name: "Limited Edition",
      rating: 5.0,
      reviews: 76,
      price: "$299",
    }
  ]

  return (
    <section className="relative bg-white py-16 sm:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="flex items-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 bg-gray-900 bg-opacity-5 p-3 rounded-xl">
                {feature.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Collections</h2>
          <p className="mt-4 text-lg text-gray-600">Discover our most popular selections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <div className="h-60 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Product Image</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <div className="mt-1 flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-500">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <p className="mt-2 text-xl font-bold text-gray-900">{product.price}</p>
              </div>
              <Button 
                className="mt-4 w-full bg-gray-900 hover:bg-gray-800 text-white"
              >
                View Collection
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Button 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg"
          >
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero