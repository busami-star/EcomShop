"use client"
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  Package, 
  Shirt, 
  Apple, 
  Utensils,
  BarChart3,
  Settings,
  TrendingUp,
  DollarSign,
  CreditCard,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import RecentOrders from '../components/RecentOrders';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const navigationItems = [
    { 
      icon: <LayoutDashboard className="h-5 w-5" />, 
      label: 'Dashboard', 
      section: 'dashboard' 
    },
    { 
      icon: <ShoppingCart className="h-5 w-5" />, 
      label: 'Orders', 
      section: 'orders' 
    },
    { 
      icon: <Users className="h-5 w-5" />, 
      label: 'Customers', 
      section: 'customers' 
    },
    { 
      icon: <Package className="h-5 w-5" />, 
      label: 'Inventory', 
      section: 'inventory' 
    },
    { 
      icon: <Shirt className="h-5 w-5" />, 
      label: 'Clothes', 
      section: 'clothes' 
    },
    { 
      icon: <Apple className="h-5 w-5" />, 
      label: 'Electronics', 
      section: 'electronics' 
    },
    { 
      icon: <Utensils className="h-5 w-5" />, 
      label: 'Foodstuffs', 
      section: 'foodstuffs' 
    }
  ];
  const salesData = [
    { name: 'Jan', Clothes: 4000, Electronics: 2400, Foodstuffs: 2400 },
    { name: 'Feb', Clothes: 3000, Electronics: 1398, Foodstuffs: 2210 },
    { name: 'Mar', Clothes: 2000, Electronics: 9800, Foodstuffs: 2290 },
    { name: 'Apr', Clothes: 2780, Electronics: 3908, Foodstuffs: 2000 },
    { name: 'May', Clothes: 1890, Electronics: 4800, Foodstuffs: 2181 },
    { name: 'Jun', Clothes: 2390, Electronics: 3800, Foodstuffs: 2500 }
  ];

  const categoryStats = [
    { 
      category: 'Clothes', 
      icon: <Shirt className="h-8 w-8 text-blue-500" />, 
      sales: '$128,450', 
      growth: '+12.5%' 
    },
    { 
      category: 'Electronics', 
      icon: <Apple className="h-8 w-8 text-green-500" />, 
      sales: '$256,780', 
      growth: '+24.3%' 
    },
    { 
      category: 'Foodstuffs', 
      icon: <Utensils className="h-8 w-8 text-red-500" />, 
      sales: '$89,230', 
      growth: '+8.7%' 
    }
  ];

  const pieChartData = [
    { name: 'Clothes', value: 400 },
    { name: 'Electronics', value: 300 },
    { name: 'Foodstuffs', value: 200 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const topCustomers = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      totalSpent: '$5,430',
      avatar: '/path/to/avatar1.jpg'
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      totalSpent: '$4,270',
      avatar: '/path/to/avatar2.jpg'
    },
    {
      name: 'Mike Johnson',
      email: 'mike@example.com',
      totalSpent: '$3,890',
      avatar: '/path/to/avatar3.jpg'
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-white shadow-md p-4 border-r">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <Button
              key={item.section}
              onClick={() => setActiveSection(item.section)}
              variant={activeSection === item.section ? 'default' : 'ghost'}
              className="w-full justify-start"
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </Button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$458,120</div>
              <p className="text-xs text-green-500 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" /> +18.2% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,243</div>
              <p className="text-xs text-green-500 flex items-center">
                <Activity className="h-4 w-4 mr-1" /> +12.4% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">New Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">452</div>
              <p className="text-xs text-green-500 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" /> +45.2% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2%</div>
              <p className="text-xs text-red-500 flex items-center">
                <Activity className="h-4 w-4 mr-1" /> -2.1% from last week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Data Visualization */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Line Chart */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Category Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Clothes" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="Electronics" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="Foodstuffs" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Sales Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

          {/* Category Stats and Bar Chart */}
          <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Bar Chart for Sales Comparison */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Category Sales Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Clothes" fill="#8884d8" />
                  <Bar dataKey="Electronics" fill="#82ca9d" />
                  <Bar dataKey="Foodstuffs" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Stats Cards */}
          <Card>
            <CardHeader>
              <CardTitle>Category Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {categoryStats.map((stat) => (
                <div 
                  key={stat.category} 
                  className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    {stat.icon}
                    <div>
                      <p className="text-sm font-medium">{stat.category}</p>
                      <p className="text-sm text-muted-foreground">{stat.sales}</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-green-600">{stat.growth}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders and Top Customers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Orders</CardTitle>
              <Button variant="outline" size="sm">
                <BarChart3 className="mr-2 h-4 w-4" /> 
                Detailed Report
              </Button>
            </CardHeader>
            <CardContent>
              <RecentOrders />
            </CardContent>
          </Card>

          {/* Top Customers */}
          <Card>
            <CardHeader>
              <CardTitle>Top Customers</CardTitle>
            </CardHeader>
            <CardContent>
              {topCustomers.map((customer, index) => (
                <React.Fragment key={customer.email}>
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={customer.avatar} alt={customer.name} />
                        <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{customer.name}</p>
                        <p className="text-sm text-muted-foreground">{customer.email}</p>
                      </div>
                    </div>
                    <div className="text-sm font-medium">{customer.totalSpent}</div>
                  </div>
                  {index < topCustomers.length - 1 && <Separator />}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;