"use client"
import React, { useState, useEffect } from 'react';
import { 
  Apple, 
  ShoppingCart, 
  Heart, 
  Search
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

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  inStock: number;
  rating: number;
  specs: string[];
}

const ElectronicsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 'EL001',
      name: 'SmartPro Wireless Earbuds',
      price: 199.99,
      description: 'Noise-cancelling wireless earbuds with 24-hour battery life.',
      imageUrl: '/placeholder/electronics1.jpg',
      inStock: 60,
      rating: 4.7,
      specs: ['Bluetooth 5.2', 'Noise Cancellation', 'IPX7 Waterproof']
    },
    {
      id: 'EL002',
      name: 'UltraBook Pro Laptop',
      price: 1299.00,
      description: 'High-performance laptop with M2 chip and retina display.',
      imageUrl: '/placeholder/electronics2.jpg',
      inStock: 20,
      rating: 4.8,
      specs: ['M2 Chip', '16GB RAM', '512GB SSD']
    },
    {
      id: 'EL003',
      name: 'Smart 4K Television',
      price: 799.99,
      description: 'Ultra HD Smart TV with HDR and wide color gamut.',
      imageUrl: '/placeholder/electronics3.jpg',
      inStock: 35,
      rating: 4.6,
      specs: ['4K Resolution', 'Smart TV', 'HDR']
    },
    {
      id: 'EL004',
      name: 'Gaming Console Pro',
      price: 499.99,
      description: 'Next-generation gaming console with 8K support.',
      imageUrl: '/placeholder/electronics4.jpg',
      inStock: 25,
      rating: 4.9,
      specs: ['8K Gaming', 'SSD Storage', 'Ray Tracing']
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOption, setSortOption] = useState<'price-asc' | 'price-desc' | 'rating'>('rating');

  useEffect(() => {
    let result = products;

    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

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
  }, [searchTerm, sortOption, products]);

  const renderStars = (rating: number) => {
    return '★'.repeat(Math.round(rating)).padEnd(5, '☆');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-64 bg-white shadow-md p-4 border-r">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Electronics</h1>
        </div>
      </div>

      <main className="flex-1 p-8">
        <div className="mb-8 flex justify-between items-center">
          <div className="relative flex-grow mr-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search electronics..." 
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
                  <Badge variant="outline" className="text-xs">Electronics</Badge>
                </div>
                <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-yellow-500">
                    {renderStars(product.rating)}
                  </div>
                  <div className="font-bold text-xl">${product.price.toFixed(2)}</div>
                </div>
                <div className="flex space-x-2">
                  {product.specs.map((spec) => (
                    <Badge key={spec} variant="secondary">{spec}</Badge>
                  ))}
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

export default ElectronicsPage;