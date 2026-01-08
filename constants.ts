import { MenuItem, Category } from './types';

export const CATEGORIES: Category[] = ['All', 'Pizza', 'Hotdogs', 'Burgers', 'Tortilla', 'Breads', 'Subs'];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Ham Burger",
    category: "Burgers",
    price: 298.00,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop",
    isVeg: false,
    description: "Juicy beef patty with fresh lettuce and secret sauce.",
    calories: 450
  },
  {
    id: 2,
    name: "French Fries",
    category: "Hotdogs", // Grouping broadly for layout balance, though arguably a side
    price: 168.00,
    image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=500&h=500&fit=crop",
    isVeg: true,
    description: "Crispy golden fries salted to perfection.",
    calories: 320
  },
  {
    id: 3,
    name: "Delux Shawarma",
    category: "Tortilla",
    price: 328.00,
    image: "https://images.unsplash.com/photo-1561651881-d3f007022e11?w=500&h=500&fit=crop",
    isVeg: false,
    description: "Spiced chicken wrapped in soft pita with garlic mayo.",
    calories: 550
  },
  {
    id: 4,
    name: "Chicken Nuggets",
    category: "Burgers",
    price: 358.00,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&h=500&fit=crop",
    isVeg: false,
    description: "Crispy nuggets made from tender chicken breast.",
    calories: 400
  },
  {
    id: 5,
    name: "Burger Buzz",
    category: "Burgers",
    price: 218.00,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&h=500&fit=crop",
    isVeg: false,
    description: "Classic burger with a spicy kick.",
    calories: 480
  },
  {
    id: 6,
    name: "Paneer Pizza",
    category: "Pizza",
    price: 278.00,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=500&fit=crop",
    isVeg: true,
    description: "Grilled cottage cheese cubes marinated in spices on a fresh crust.",
    calories: 350
  },
  {
    id: 7,
    name: "Tortilla Wrap",
    category: "Tortilla",
    price: 148.00,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&h=500&fit=crop",
    isVeg: true,
    description: "Fresh veggies wrapped in a whole wheat tortilla.",
    calories: 280
  },
  {
    id: 8,
    name: "Beef Burger",
    category: "Burgers",
    price: 238.00,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&h=500&fit=crop",
    isVeg: false,
    description: "Double patty beef burger with cheddar cheese.",
    calories: 600
  },
  {
    id: 9,
    name: "Pepperoni Feast",
    category: "Pizza",
    price: 399.00,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=500&fit=crop",
    isVeg: false,
    description: "Classic pepperoni slices with extra mozzarella.",
    calories: 500
  },
  {
    id: 10,
    name: "NYC Hotdog",
    category: "Hotdogs",
    price: 199.00,
    image: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?w=500&h=500&fit=crop",
    isVeg: false,
    description: "Classic street-style hotdog with mustard and relish.",
    calories: 380
  },
  {
    id: 11,
    name: "Italian Sub",
    category: "Subs",
    price: 349.00,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&h=500&fit=crop",
    isVeg: false,
    description: "Salami, ham, and pepperoni with provolone on a toasted sub.",
    calories: 520
  },
  {
    id: 12,
    name: "Cheesy Garlic Bread",
    category: "Breads",
    price: 149.00,
    image: "https://images.unsplash.com/photo-1573140247632-f84660f67126?w=500&h=500&fit=crop",
    isVeg: true,
    description: "Toasted baguette slices topped with garlic butter and herbs.",
    calories: 290
  }
];