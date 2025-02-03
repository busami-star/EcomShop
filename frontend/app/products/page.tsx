"use client"
import React, { useState, useEffect } from 'react';
import { 
  Shirt, 
  Apple, 
  Utensils, 
  ShoppingCart, 
  Heart, 
  Search,
  SlidersHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

// Product Interface
interface Product {
  id: string;
  name: string;
  category: 'Clothes' | 'Electronics' | 'Foodstuffs';
  price: number;
  description: string;
  imageUrl: string;
  inStock: number;
  rating: number;
}

const AllProductsPage: React.FC = () => {
  // Potential future use case for setProducts
  const [products, setProducts] = useState<Product[]>([
    // Previous product data remains the same
    {
      id: 'CL001',
      name: 'Classic Denim Jacket',
      category: 'Clothes',
      price: 129.99,
      description: 'Timeless blue denim jacket with vintage wash and slim fit.',
      imageUrl: '/placeholder/clothes1.jpg',
      inStock: 45,
      rating: 4.5
    },
    {
      id: 'CL002',
      name: 'Summer Linen Shirt',
      category: 'Clothes',
      price: 79.50,
      description: 'Lightweight breathable linen shirt perfect for summer days.',
      imageUrl: '/placeholder/clothes2.jpg',
      inStock: 30,
      rating: 4.2
    },
    // Electronics
    {
      id: 'EL001',
      name: 'SmartPro Wireless Earbuds',
      category: 'Electronics',
      price: 199.99,
      description: 'Noise-cancelling wireless earbuds with 24-hour battery life.',
      imageUrl: '/placeholder/electronics1.jpg',
      inStock: 60,
      rating: 4.7
    },
    {
      id: 'EL002',
      name: 'UltraBook Pro Laptop',
      category: 'Electronics',
      price: 1299.00,
      description: 'High-performance laptop with M2 chip and retina display.',
      imageUrl: '/placeholder/electronics2.jpg',
      inStock: 20,
      rating: 4.8
    },
    // Foodstuffs
    {
      id: 'FD001',
      name: 'Organic Coffee Blend',
      category: 'Foodstuffs',
      price: 24.99,
      description: 'Premium organic coffee beans, freshly roasted and ground.',
      imageUrl: '/placeholder/food1.jpg',
      inStock: 100,
      rating: 4.6
    },
    {
      id: 'FD002',
      name: 'Artisan Chocolate Set',
      category: 'Foodstuffs',
      price: 44.50,
      description: 'Luxury chocolate collection with various exotic flavors.',
      imageUrl: '/placeholder/food2.jpg',
      inStock: 35,
      rating: 4.4
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOption, setSortOption] = useState<'price-asc' | 'price-desc' | 'rating'>('rating');

  useEffect(() => {
    let result = products;

   
    // Category Filter
    if (activeCategory !== 'All') {
        result = result.filter(product => product.category === activeCategory);
      }
  
      // Search Filter
      if (searchTerm) {
        result = result.filter(product => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  
      // Sorting
      switch (sortOption) {
        case 'price-asc':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          result.sort((a, b) => b.rating - a.rating);
          break;
      }
  
      setFilteredProducts(result);
    }, [activeCategory, searchTerm, sortOption, products]);

     // Potential future method to update products (e.g., from an API)
//   const fetchProducts = async () => {
//     try {
//       // Simulate API call
//       // const response = await fetch('/api/products');
//       // const newProducts = await response.json();
//       // setProducts(newProducts);
//     } catch (error) {
//       console.error('Failed to fetch products', error);
//     }
//   };


  const renderStars = (rating: number) => {
    return '★'.repeat(Math.round(rating)).padEnd(5, '☆');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-white shadow-md p-4 border-r">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        </div>
        <nav className="space-y-2">
          {[
            { 
              category: 'All', 
              icon: <SlidersHorizontal className="h-5 w-5" /> 
            },
            { 
              category: 'Clothes', 
              icon: <Shirt className="h-5 w-5" /> 
            },
            { 
              category: 'Electronics', 
              icon: <Apple className="h-5 w-5" /> 
            },
            { 
              category: 'Foodstuffs', 
              icon: <Utensils className="h-5 w-5" /> 
            }
          ].map((item) => (
            <Button
              key={item.category}
              onClick={() => setActiveCategory(item.category)}
              variant={activeCategory === item.category ? 'default' : 'ghost'}
              className="w-full justify-start"
            >
              {item.icon}
              <span className="ml-3">{item.category}</span>
            </Button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        {/* Search and Filters section */}
        <div className="mb-8 flex justify-between items-center">
          <div className="relative flex-grow mr-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search products..." 
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select 
            value={sortOption} 
            onValueChange={(value: 'price-asc' | 'price-desc' | 'rating') => setSortOption(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Top Rated</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-all">
              <CardHeader className="pb-0">
                <div 
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                />
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-yellow-500">
                    {renderStars(product.rating)}
                  </div>
                  <div className="font-bold text-xl">${product.price.toFixed(2)}</div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="mr-2">
                  <Heart className="mr-2 h-4 w-4" /> Wishlist
                </Button>
                <Button size="sm">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllProductsPage;