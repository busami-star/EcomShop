import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroProducts = () => {
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
    },
  ];
  return (
    <div>
      {/* Featured Products Grid */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Featured Collections
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover our most popular selections
        </p>
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
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <div className="mt-1 flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-500">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <p className="mt-2 text-xl font-bold text-gray-900">
                {product.price}
              </p>
            </div>
            <Button className="mt-4 w-full bg-gray-900 hover:bg-gray-800 text-white">
              View Collection
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroProducts;
