import React from 'react';

const CityGrid = () => {
  const cities = [
    { name: 'Islamabad', image: '/path/to/islamabad.jpg' },
    { name: 'Karachi', image: '/path/to/karachi.jpg' },
    { name: 'Lahore', image: '/path/to/lahore.jpg' },
    { name: 'Faisalabad', image: '/path/to/faisalabad.jpg' },
    { name: 'Rawalpindi', image: '/path/to/rawalpindi.jpg' },
    { name: 'Abbottabad', image: '/path/to/abbottabad.jpg' },
    { name: 'Bahawalpur', image: '/path/to/bahawalpur.jpg' },
    { name: 'Dera Ghazi Khan', image: '/path/to/dera-ghazi-khan.jpg' },
    { name: 'Gujranwala', image: '/path/to/gujranwala.jpg' },
    { name: 'Gujrat', image: '/path/to/gujrat.jpg' },
    { name: 'Hyderabad', image: '/path/to/hyderabad.jpg' },
    { name: 'Jhang', image: '/path/to/jhang.jpg' },
    { name: 'Kamalia', image: '/path/to/kamalia.jpg' },
    { name: 'Larkana', image: '/path/to/larkana.jpg' },
    { name: 'Manga', image: '/path/to/manga.jpg' },
    { name: 'Mardan', image: '/path/to/mardan.jpg' },
    { name: 'Multan', image: '/path/to/multan.jpg' },
    { name: 'Murree', image: '/path/to/murree.jpg' },
    { name: 'Okara', image: '/path/to/okara.jpg' },
    { name: 'Pindi Arif', image: '/path/to/pindi-arif.jpg' },
    { name: 'Peshawar', image: '/path/to/peshawar.jpg' },
    { name: 'Quetta', image: '/path/to/quetta.jpg' },
    { name: 'Rahim Yar Khan', image: '/path/to/rahim-yar-khan.jpg' },
    { name: 'Sargodha', image: '/path/to/sargodha.jpg' },
    { name: 'Sahiwal', image: '/path/to/sahiwal.jpg' },
    { name: 'Sargodha', image: '/path/to/sargodha.jpg' },
    { name: 'Sheikhupura', image: '/path/to/sheikhupura.jpg' },
    { name: 'Sialkot', image: '/path/to/sialkot.jpg' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Find us in these cities and many more!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cities.map((city) => (
          <div 
            key={city.name} 
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Using placeholder image since we can't load external images */}
            <img
              src="/api/placeholder/400/300"
              alt={`${city.name} city`}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h2 className="text-white font-semibold text-lg">{city.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default CityGrid;