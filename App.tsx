import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import AIChef from './components/AIChef';
import PopularItems from './components/PopularItems';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu'>('home');

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onViewMenu={() => setCurrentPage('menu')} />
            <Features />
            <PopularItems onViewAll={() => setCurrentPage('menu')} />
          </>
        ) : (
          <Menu />
        )}
      </main>

      <footer className="bg-fooma-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="text-xl font-bold mb-4">Fooma<span className="text-fooma-yellow">.</span></h4>
                    <p className="text-gray-400 text-sm">Delicious food delivered to your door step.</p>
                </div>
                <div>
                    <h5 className="font-bold mb-4 text-fooma-yellow">Menu</h5>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li><button onClick={() => setCurrentPage('menu')} className="hover:text-white">Burgers</button></li>
                        <li><button onClick={() => setCurrentPage('menu')} className="hover:text-white">Pizza</button></li>
                        <li><button onClick={() => setCurrentPage('menu')} className="hover:text-white">Drinks</button></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-4 text-fooma-yellow">Company</h5>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                     <h5 className="font-bold mb-4 text-fooma-yellow">Newsletter</h5>
                     <div className="flex">
                        <input type="email" placeholder="Email" className="bg-gray-800 text-white px-3 py-2 rounded-l-md focus:outline-none w-full" />
                        <button className="bg-fooma-red px-4 py-2 rounded-r-md font-bold">Go</button>
                     </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
                &copy; 2024 Fooma. All rights reserved.
            </div>
        </div>
      </footer>

      {/* Intelligent Feature */}
      <AIChef />
    </div>
  );
};

export default App;