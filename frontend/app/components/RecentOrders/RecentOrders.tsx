import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  Eye, 
  ArrowUpDown, 
  MoreHorizontal, 
  PlusCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Define Order type
interface Order {
  id: string;
  customer: string;
  date: string;
  category: string;
  total: string;
  status: 'Completed' | 'Processing' | 'Shipped';
  paymentMethod: string;
}

const RecentOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: '#3210',
      customer: 'John Doe',
      date: 'Feb 15, 2024',
      category: 'Electronics',
      total: '$456.78',
      status: 'Completed',
      paymentMethod: 'Credit Card'
    },
    {
      id: '#3209',
      customer: 'Jane Smith',
      date: 'Feb 14, 2024',
      category: 'Clothes',
      total: '$234.50',
      status: 'Processing',
      paymentMethod: 'PayPal'
    },
    {
      id: '#3208',
      customer: 'Mike Johnson',
      date: 'Feb 13, 2024',
      category: 'Foodstuffs',
      total: '$89.99',
      status: 'Shipped',
      paymentMethod: 'Debit Card'
    }
  ]);

  const [sortColumn, setSortColumn] = useState<keyof Order | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [filter, setFilter] = useState<'All' | Order['status']>('All');

  const getStatusColor = (status: Order['status']) => {
    const statusColors = {
      'Completed': 'bg-green-100 text-green-800',
      'Processing': 'bg-yellow-100 text-yellow-800',
      'Shipped': 'bg-blue-100 text-blue-800'
    };
    return statusColors[status];
  };

  const handleSort = (column: keyof Order) => {
    const isAsc = sortColumn === column && sortDirection === 'asc';
    setSortColumn(column);
    setSortDirection(isAsc ? 'desc' : 'asc');

    const sortedOrders = [...orders].sort((a, b) => {
      if (a[column] < b[column]) return isAsc ? -1 : 1;
      if (a[column] > b[column]) return isAsc ? 1 : -1;
      return 0;
    });
    setOrders(sortedOrders);
  };

  const filteredOrders = filter === 'All' 
    ? orders 
    : orders.filter(order => order.status === filter);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setFilter('All')}
            className={filter === 'All' ? 'bg-gray-200' : ''}
          >
            All Orders
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setFilter('Completed')}
            className={filter === 'Completed' ? 'bg-gray-200' : ''}
          >
            Completed
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setFilter('Processing')}
            className={filter === 'Processing' ? 'bg-gray-200' : ''}
          >
            Processing
          </Button>
        </div>
        <Button size="sm" variant="outline">
          <PlusCircle className="mr-2 h-4 w-4" /> 
          New Order
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {['Order ID', 'Customer', 'Date', 'Category', 'Total', 'Status', 'Payment', 'Actions'].map((header) => (
              <TableHead 
                key={header} 
                onClick={() => header !== 'Actions' && handleSort(header.toLowerCase().replace(' ', '') as keyof Order)}
                className={header !== 'Actions' ? 'cursor-pointer hover:bg-gray-100' : ''}
              >
                <div className="flex items-center">
                  {header}
                  {header !== 'Actions' && (
                    <ArrowUpDown className="ml-2 h-4 w-4 opacity-50" />
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.category}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(order.status)}>
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>{order.paymentMethod}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" /> 
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Download Invoice
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentOrders;