import React, { useState } from 'react';
import { MenuItem, Category } from '../types';
import { CATEGORIES, MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Menu</h2>
          <p className="text-gray-500 mt-2">Discover our delicious range of foods</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 bg-fooma-yellow py-4 px-6 rounded-full max-w-5xl mx-auto shadow-md">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-white text-gray-900 shadow-md transform scale-105'
                  : 'text-gray-800 hover:bg-yellow-400'
              }`}
            >
              <span className="flex items-center space-x-2">
                 {/* Simple icons for categories could go here */}
                 {cat === 'All' && <span>🍽️</span>}
                 {cat === 'Pizza' && <span>🍕</span>}
                 {cat === 'Burgers' && <span>🍔</span>}
                 {activeCategory !== cat && <span>{cat}</span>}
                 {activeCategory === cat && <span>{cat}</span>}
              </span>
            </button>
          ))}
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-fooma-yellow group flex flex-col">
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                 <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                 />
                 <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                    {item.isVeg ? (
                        <div className="w-4 h-4 border border-green-600 flex items-center justify-center p-[2px]">
                            <div className="w-full h-full bg-green-600 rounded-full"></div>
                        </div>
                    ) : (
                        <div className="w-4 h-4 border border-red-600 flex items-center justify-center p-[2px]">
                            <div className="w-full h-full bg-red-600 rounded-full"></div>
                        </div>
                    )}
                 </div>
                 <div className="absolute top-2 left-2 bg-gray-100 text-[10px] font-bold px-2 py-1 rounded-md text-gray-600">
                    {item.calories}g
                 </div>
              </div>
              
              <div className="text-center flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-xs text-gray-400 mb-2">{item.category}</p>
                    <div className="text-xl font-bold text-gray-900 mb-4">Rs. {item.price.toFixed(2)}</div>
                </div>
                
                <div className="flex gap-2 justify-center">
                    <button className="flex-1 bg-white border-2 border-fooma-yellow text-fooma-dark text-xs font-bold py-2 rounded-full hover:bg-fooma-yellow hover:text-white transition-colors duration-300">
                        Add to Cart
                    </button>
                    <button className="flex-1 bg-fooma-red text-white text-xs font-bold py-2 rounded-full hover:bg-red-700 transition-colors duration-300 shadow-md transform active:scale-95">
                        Buy Now
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
            <div className="text-center text-gray-500 py-10">
                No items found in this category.
            </div>
        )}

      </div>
    </section>
  );
};

export default Menu;