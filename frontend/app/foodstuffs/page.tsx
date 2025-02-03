"use client"
import React, { useState, useEffect } from 'react';
import { 
  Utensils, 
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
  dietaryInfo: string[];
}

const FoodPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 'FD001',
      name: 'Organic Quinoa Blend',
      price: 12.99,
      description: 'Premium organic quinoa mix with ancient grains.',
      imageUrl: '/placeholder/food1.jpg',
      inStock: 75,
      rating: 4.6,
      dietaryInfo: ['Gluten-Free', 'Organic', 'Vegan']
    },
    {
      id: 'FD002',
      name: 'Artisan Sourdough Bread',
      price: 7.50,
      description: 'Handcrafted sourdough with natural fermentation.',
      imageUrl: '/placeholder/food2.jpg',
      inStock: 40,
      rating: 4.8,
      dietaryInfo: ['Artisan', 'No Preservatives', 'Natural Yeast']
    },
    {
      id: 'FD003',
      name: 'Dark Chocolate Almonds',
      price: 9.99,
      description: 'Premium dark chocolate-covered almonds.',
      imageUrl: '/placeholder/food3.jpg',
      inStock: 55,
      rating: 4.7,
      dietaryInfo: ['Keto', 'Low Sugar', 'Antioxidant-Rich']
    },
    {
      id: 'FD004',
      name: 'Organic Green Smoothie Mix',
      price: 15.99,
      description: 'Nutrient-packed green smoothie powder blend.',
      imageUrl: '/placeholder/food4.jpg',
      inStock: 30,
      rating: 4.9,
      dietaryInfo: ['Plant-Based', 'No Additives', 'Non-GMO']
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
          <h1 className="text-2xl font-bold text-gray-900">Gourmet Foods</h1>
        </div>
      </div>

      <main className="flex-1 p-8">
        <div className="mb-8 flex justify-between items-center">
          <div className="relative flex-grow mr-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search food products..." 
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
                  <Badge variant="outline" className="text-xs">Gourmet</Badge>
                </div>
                <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-yellow-500">
                    {renderStars(product.rating)}
                  </div>
                  <div className="font-bold text-xl">${product.price.toFixed(2)}</div>
                </div>
                <div className="flex space-x-2">
                  {product.dietaryInfo.map((info) => (
                    <Badge key={info} variant="secondary">{info}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="mr-2">
                  <Heart className="mr-2 h-4 w-4" /> Wishlist
                </Button>
                <Button size="sm">
                  <Utensils className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FoodPage;