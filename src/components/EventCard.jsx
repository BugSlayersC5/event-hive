import { Calendar, MapPin, Clock } from 'lucide-react';
import { imageBaseURL } from '../api/client';
import {Link} from "react-router";

// , title, date, time, location, price, category

export default function EventCard  ({event }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
      <div className="relative overflow-hidden">
         <img 
          src={`${imageBaseURL}/${event.image}`} 
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            fun
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <Link to={`/view-event?id=${event.id}`} className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
          {event.title}
        </Link>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-indigo-500" />
            <span>24/08/19</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-indigo-500" />
            <span>7am</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-indigo-500" />
            <span>Tafo</span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-600">Ghc78</span>
          <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-200 transition-colors duration-200 font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
