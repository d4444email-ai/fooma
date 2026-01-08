import React, { useState } from 'react';

interface NavbarProps {
  currentPage: 'home' | 'menu';
  onNavigate: (page: 'home' | 'menu') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page: 'home' | 'menu') => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span 
                onClick={() => handleNav('home')}
                className="text-3xl font-bold text-fooma-red font-serif tracking-tight cursor-pointer"
            >
              Fooma<span className="text-fooma-yellow">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => handleNav('home')} 
              className={`${currentPage === 'home' ? 'text-fooma-red border-b-2 border-fooma-red' : 'text-gray-600'} font-medium pb-1 hover:text-fooma-red transition`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNav('menu')} 
              className={`${currentPage === 'menu' ? 'text-fooma-red border-b-2 border-fooma-red' : 'text-gray-600'} font-medium pb-1 hover:text-fooma-red transition`}
            >
              Menu
            </button>
            <span className="text-gray-400 cursor-not-allowed font-medium pb-1" title="Coming Soon">Blog</span>
            <span className="text-gray-400 cursor-not-allowed font-medium pb-1" title="Coming Soon">Pages</span>
            <span className="text-gray-400 cursor-not-allowed font-medium pb-1" title="Coming Soon">Contact</span>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-6">
             <div className="flex items-center text-sm font-semibold">
                <div className="bg-green-100 p-2 rounded-full mr-2 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
                <div>
                    <span className="text-xs text-gray-500 block">Call & order</span>
                    <span>0000 - 123 - 456789</span>
                </div>
             </div>
             <button className="text-gray-600 hover:text-fooma-yellow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
             </button>
             <button className="relative text-gray-600 hover:text-fooma-yellow">
                <span className="absolute -top-1 -right-1 bg-fooma-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
             </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => handleNav('home')} 
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${currentPage === 'home' ? 'text-fooma-red bg-red-50' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNav('menu')} 
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${currentPage === 'menu' ? 'text-fooma-red bg-red-50' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Menu
            </button>
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 cursor-not-allowed">Blog</span>
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 cursor-not-allowed">Pages</span>
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 cursor-not-allowed">Contact</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;