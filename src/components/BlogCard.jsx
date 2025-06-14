import React from 'react';
import { Clock, MapPin } from 'lucide-react';



export default function EventCard ({ event }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            event.type === 'ONLINE EVENT' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {event.type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
          {event.title}
        </h3>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-purple-500" />
            <span>{event.date} • {event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-purple-500" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
