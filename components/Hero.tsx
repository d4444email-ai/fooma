import React from 'react';

interface HeroProps {
  onViewMenu: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewMenu }) => {
  
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background Yellow Blob/Shape */}
      <div 
        className="absolute top-0 left-0 w-full md:w-[65%] h-full bg-fooma-yellow rounded-br-[100px] md:rounded-br-[200px] z-0"
        style={{
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center py-12 md:py-20 lg:py-24">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 mb-10 md:mb-0">
            <div className="flex items-center space-x-2">
                 <div className="border-t-2 border-black w-8"></div>
                 <div className="text-2xl md:text-3xl font-bold italic tracking-widest text-gray-800">
                    Fooma
                 </div>
                 <img src="https://cdn-icons-png.flaticon.com/512/7541/7541635.png" alt="logo-icon" className="w-8 h-8" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Tasty Food <br />
              <span className="text-fooma-red">Tasty Life</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-800 font-medium max-w-md">
              Creating tasty foods with taste that lingers in your mouth forever.
            </p>

            <div className="pt-4">
               <button 
                onClick={onViewMenu}
                className="bg-fooma-dark text-white px-8 py-4 rounded-full flex items-center space-x-2 shadow-lg hover:bg-gray-800 transition transform hover:scale-105"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fooma-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                 </svg>
                 <span className="font-semibold">Find Your Favorite</span>
               </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
             {/* Discount Badge */}
             <div className="absolute top-0 left-10 md:left-20 bg-fooma-red text-white p-4 rounded-b-3xl rounded-tr-3xl z-20 shadow-xl text-center animate-bounce duration-1000">
                <p className="text-sm font-medium">Crunchy delight</p>
                <p className="text-sm font-medium">combo @</p>
                <p className="text-3xl font-bold">15% off</p>
             </div>

             {/* Hero Image */}
             <div className="relative group">
                 {/* Decorative elements behind image */}
                 <div className="absolute -top-10 -right-10 w-20 h-20 bg-orange-200 rounded-full opacity-50 blur-xl"></div>
                 
                 <img 
                   src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                   alt="Delicious Burger Combo" 
                   className="relative z-10 w-full max-w-md md:max-w-lg object-cover rounded-3xl shadow-2xl transform transition duration-500 group-hover:scale-105"
                   style={{ maxHeight: '600px' }}
                 />
                 
                 {/* Floating food items (decorative) */}
                 <div className="absolute top-1/2 -right-4 bg-white p-3 rounded-full shadow-lg z-20 hidden md:block animate-pulse">
                    <span className="text-2xl">🍔</span>
                 </div>
                 <div className="absolute bottom-10 -left-4 bg-white p-3 rounded-full shadow-lg z-20 hidden md:block animate-pulse delay-700">
                    <span className="text-2xl">🍟</span>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;