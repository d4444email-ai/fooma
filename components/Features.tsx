import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Quick Delivery",
      description: "All our dishes are delivered quickly in 15mins",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fooma-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Super Dine In",
      description: "Have a luxurious dine-in with best ambience with nature",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fooma-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Easy Pick Up",
      description: "Stop by and get your orders quickly in an instant",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fooma-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 bg-orange-50 p-3 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
