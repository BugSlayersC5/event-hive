import { Star, MoreHorizontal } from 'lucide-react';

const colleges = [
    {
      name: "Harvard University",
      location: "Cambridge, Massachusetts, US",
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      badge: "EXCLUSIVE"
    },
    {
      name: "Stanford University",
      location: "Stanford, California",
      image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      badge: "EXCLUSIVE"
    },
    {
      name: "Nanyang University",
      location: "Nanyang Ave, Singapore",
      image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.6,
      badge: "EXCLUSIVE"
    }
  ];

export default function TrendingColleges () {
  

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Trending <span className="text-purple-600">colleges</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colleges.map((college, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
              <div className="relative">
                <img 
                  src={college.image} 
                  alt={college.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {college.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                  <span className="text-sm font-medium">{college.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                  {college.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{college.location}</p>
                
                <div className="flex justify-end">
                  <button className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

