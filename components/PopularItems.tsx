import React from 'react';
import { MENU_ITEMS } from '../constants';

interface PopularItemsProps {
  onViewAll: () => void;
}

const PopularItems: React.FC<PopularItemsProps> = ({ onViewAll }) => {
  // Display first 4 items as a teaser
  const items = MENU_ITEMS.slice(0, 4);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-4xl font-bold text-gray-900">Popular Dishes</h2>
                <p className="text-gray-500 mt-2">Check out our most ordered food items</p>
            </div>
            <button 
                onClick={onViewAll}
                className="hidden md:flex items-center text-fooma-red font-bold hover:underline"
            >
                See Full Menu
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
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

        <div className="mt-8 text-center md:hidden">
            <button 
                onClick={onViewAll}
                className="inline-flex items-center text-fooma-red font-bold hover:underline"
            >
                See Full Menu
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>

      </div>
    </section>
  );
};

export default PopularItems;