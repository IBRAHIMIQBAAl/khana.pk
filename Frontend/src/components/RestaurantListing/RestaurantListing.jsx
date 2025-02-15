import React, { useState } from 'react';
import { Filter, X, Grid, List } from 'lucide-react'; // Import Grid and List icons

const RestaurantListing = () => {
  // State for managing grid/list view, filters, and filter options
  const [isGridView, setIsGridView] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [cuisine, setCuisine] = useState('All Categories');
  const [featured, setFeatured] = useState(false);
  const [openNow, setOpenNow] = useState(false);

  // Sample restaurant data
  const restaurants = [
    {
      id: 1,
      name: 'Food Xpertz',
      image: 'https://openmenupk.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/11/28065109/cropped-136044474_101320078593941_390081574233137069_n.jpg',
      location: 'Food Xpertz, Salman Farsi St, Johar Town, Lahore, Punjab, Pakistan',
      featured: false,
      type: 'Fast Food'
    },
    {
      id: 2,
      name: 'Eat & Repeat',
      image: 'https://openmenupk.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/11/25103327/cropped-cropped-9bdb0ff1f39c9d05bf6ab30be4c4b05be4bd84e2r1-1600-1065v2_hq-1.jpg',
      location: 'Punjab, Pakistan',
      featured: false,
      type: 'All Day Dining'
    },
    {
      id: 3,
      name: 'The House Of Pizza',
      image: 'https://openmenupk.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/11/25105737/pizza-1-1.jpg',
      location: 'House No.16, Ground Floor, Metro Gold Heights, Near LDA Office',
      featured: true,
      type: 'Pizza'
    },
    {
      id: 4,
      name: '21 Pizza Bar',
      image: 'https://openmenupk.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/11/25065912/cropped-cropped-cropped-294641087_443300881141922_770895640931239167_n-scaled-1-2.jpg',
      location: 'DHA Main Boulevard Road',
      featured: false,
      type: 'Pizza'
    },
    {
      id: 5,
      name: 'Asghar Shinwari',
      image: 'https://openmenupk.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/11/25113529/national-uzbek-pilaf-with-meat-cast-iron-skillet-wooden-table_127425-8.webp',
      location: 'Samnabad Block C Nawab Town, Lahore, Punjab, Pakistan',
      featured: true,
      type: 'Desi'
    },
    {
      id: 6,
      name: 'Cafe 101',
      image: 'https://openmenupk.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/11/22124409/cropped-311407856_114365084783752_2094395954095734143_n-1.jpg',
      location: 'Baharat Road Lahore, Lahore, Punjab, Pakistan',
      featured: false,
      type: 'Cafe'
    },
    {
      id: 7,
      name: 'Khalifa Balochi Sajji',
      image: 'https://openmenupk.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/11/29102510/sajji-cover.jpg',
      location: 'Thokar Niaz Baig, Main Raiwind Rd, Lahore, Punjab, Pakistan',
      featured: false,
      type: 'BBQ'
    },
    {
      id: 8,
      name: 'Biryani Master Thoker',
      image: 'https://openmenupk.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/11/28072328/cropped-cropped-69C1AUWO-1.png',
      location: 'Behria Road, Thoker Niaz Baig, Lahore, Punjab, Pakistan',
      featured: true,
      type: 'Biryani'
    },
    {
      id: 9,
      name: 'Phajja Siripaye',
      image: 'https://openmenupk.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/11/29111549/cropped-e56b3a80ca09f9720362cfa04a197175.jpg',
      location: 'Plaza No.156-B Ground Floor, Sector C Commercial Area',
      featured: false,
      type: 'Desi'
    },
    {
      id: 10,
      name: 'Yasir Broast Halwai',
      image: 'https://openmenupk.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/12/02115501/cropped-74863928_731295154003272_3003514979925098496_n.jpg',
      location: 'Main Baharat Rd, Block C Sector C Bahria Town',
      featured: true,
      type: 'Fast Food'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white">
      {/* Header section with title, filter button, and view toggle buttons */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Popular Restaurants</h1>
        <div className="flex items-center gap-4">
          {/* Filter button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
          >
            <Filter size={20} />
            Filter
          </button>

          {/* View toggle buttons (Grid and List) */}
          <div className="flex border rounded">
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2 ${isGridView ? 'bg-pink-100' : 'bg-white'}`}
            >
              <Grid size={20} className={`${isGridView ? 'text-pink-600' : 'text-gray-500'}`} />
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`p-2 ${!isGridView ? 'bg-pink-100' : 'bg-white'}`}
            >
              <List size={20} className={`${!isGridView ? 'text-pink-600' : 'text-gray-500'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter section */}
      {showFilters && (
        <div className="mb-6 p-4 bg-white rounded-lg shadow">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Search input */}
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search Restaurants"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
            </div>

            {/* Cuisine filter dropdown */}
            <select
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              className="p-2 border border-gray-300 rounded min-w-[150px] focus:outline-none focus:ring-1 focus:ring-pink-500"
            >
              <option>All Categories</option>
              <option>Pizza</option>
              <option>Fast Food</option>
              <option>Desi</option>
              <option>BBQ</option>
              <option>Biryani</option>
              <option>Cafe</option>
            </select>

            {/* Featured and Open Now toggle switches */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <span>Featured:</span>
                <div className="relative inline-block w-10 h-6 rounded-full bg-gray-200">
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${featured ? 'bg-pink-600 transform translate-x-4' : 'bg-white'}`} />
                </div>
              </label>

              <label className="flex items-center gap-2">
                <span>Open Now:</span>
                <div className="relative inline-block w-10 h-6 rounded-full bg-gray-200">
                  <input
                    type="checkbox"
                    checked={openNow}
                    onChange={(e) => setOpenNow(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${openNow ? 'bg-pink-600 transform translate-x-4' : 'bg-white'}`} />
                </div>
              </label>
            </div>

            {/* Apply button */}
            <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Restaurant listing grid/list view */}
      <div className={`grid ${isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' : 'grid-cols-1'} gap-6`}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className={`bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow-xl transition-shadow duration-300 border-2 border-pink-500
            ${!isGridView ? 'flex h-48' : 'h-[350px] flex flex-col justify-between'}`}>
                
            {/* Restaurant image */}
       
            <div className={`${!isGridView ? 'w-48' : 'w-full h-48'} relative hover:scale-105 transition-transform duration-300`}>
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
              {restaurant.featured && (
                <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded">
                  FEATURED
                </div>
              )}
            </div>

            {/* Restaurant details */}

            <div className={`${!isGridView ? 'flex-1 flex flex-col justify-between' : ''} p-4`}>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{restaurant.name}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{restaurant.location}</p>
              </div>
              <div className={`${!isGridView ? 'w-48' : 'w-full'} mt-4`}>
                <button className="w-full bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition-colors duration-300">
                  Visit Restaurant
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantListing;