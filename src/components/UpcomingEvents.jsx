import React from 'react';
import { ChevronDown } from 'lucide-react';
import EventCard from './EventCard';

const EventsSection = () => {
  const events = [
    {
      title: "SaaS Meetup Brisbane - Metrics, Market & Business Your Book",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Saturday, Dec 16, 6:00 PM",
      time: "6:00 PM - 9:00 PM",
      location: "Brisbane, Australia",
      price: "FREE",
      category: "Business"
    },
    {
      title: "Tech Conference 2024: AI & Machine Learning Summit",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Monday, Dec 18, 9:00 AM",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      price: "$299",
      category: "Technology"
    },
    {
      title: "Creative Workshop: Digital Art & Design Fundamentals",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Wednesday, Dec 20, 2:00 PM",
      time: "2:00 PM - 6:00 PM",
      location: "New York, NY",
      price: "$150",
      category: "Workshop"
    },
    {
      title: "Startup Networking Event: Building Connections",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Friday, Dec 22, 7:00 PM",
      time: "7:00 PM - 11:00 PM",
      location: "Austin, TX",
      price: "$50",
      category: "Networking"
    },
    {
      title: "Music Festival: Electronic Beats & Vibes",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Saturday, Dec 23, 8:00 PM",
      time: "8:00 PM - 2:00 AM",
      location: "Miami, FL",
      price: "$125",
      category: "Music"
    },
    {
      title: "Professional Development: Leadership Skills Workshop",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Sunday, Dec 24, 10:00 AM",
      time: "10:00 AM - 4:00 PM",
      location: "Chicago, IL",
      price: "$200",
      category: "Workshop"
    }
  ];

  return (
<<<<<<< HEAD
    <section className="py-16 bg-gray-50 mt-12">
      <div className="max-w-7xl mx-auto  w-[95%]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 space-y-4 md:space-y-0">
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-2 md:mb-0">
      Upcoming <span className="text-purple-600">Events</span>
    </h2>
  </div>

  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
    <div className="relative">
      <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full sm:w-auto">
        <option>Weekdays</option>
        <option>Weekends</option>
        <option>Any day</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
    </div>

    <div className="relative">
      <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full sm:w-auto">
        <option>Event Type</option>
        <option>Conference</option>
        <option>Workshop</option>
        <option>Networking</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
    </div>

    <div className="relative">
      <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full sm:w-auto">
        <option>Any category</option>
        <option>Business</option>
        <option>Technology</option>
        <option>Creative</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
    </div>
  </div>
</div>

=======
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Upcoming <span className="text-purple-600">Events</span>
            </h2>
          </div>
          
          <div className="flex space-x-4">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option>Weekdays</option>
                <option>Weekends</option>
                <option>Any day</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option>Event Type</option>
                <option>Conference</option>
                <option>Workshop</option>
                <option>Networking</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option>Any category</option>
                <option>Business</option>
                <option>Technology</option>
                <option>Creative</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
>>>>>>> 984e690c7c88ea15d722fa3e26357cd8a641a78f
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;