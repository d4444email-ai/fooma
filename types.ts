export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isVeg: boolean;
  description: string;
  calories: number;
}

export type Category = 'All' | 'Pizza' | 'Hotdogs' | 'Burgers' | 'Tortilla' | 'Breads' | 'Subs';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
