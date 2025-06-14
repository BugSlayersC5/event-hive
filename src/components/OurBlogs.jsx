import React from 'react';
import BlogCard from "./BlogCard"

export default function BlogSection () {
  const blogPosts = [
    {
      id: 1,
      title: "SaaS/PaaS Boot Bootstrap center Market & Publish Your Book - LetsWork",
      date: "Saturday, March 25, 2023",
      time: "6:00 PM",
      location: "Dhaka-Edulence",
      type: "ONLINE EVENT",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "SaaS/PaaS Boot Bootstrap center Market & Publish Your Book - LetsWork",
      date: "Saturday, March 25, 2023",
      time: "6:00 PM",
      location: "Dhaka-Edulence", 
      type: "ONLINE EVENT",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "SaaS/PaaS Boot Bootstrap center Market & Publish Your Book - LetsWork",
      date: "Saturday, March 25, 2023",
      time: "6:00 PM",
      location: "Dhaka-Edulence",
      type: "ONLINE EVENT", 
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-purple-600">Blogs</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} event={post} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 font-medium shadow-lg">
            View more
          </button>
        </div>
      </div>
    </section>
  );
};

