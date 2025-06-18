import { Star, MoreHorizontal } from 'lucide-react';
import { imageBaseURL } from '../api/client';

export default function CollegeCard({college}) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
      <div className="relative">
        <img 
          src={`${imageBaseURL}/${college.image}`} 
          alt={college.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
           badge
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
        <p className="text-gray-600 text-sm mb-4">{college.address}</p>
        
        <div className="flex justify-end">
          <button className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
