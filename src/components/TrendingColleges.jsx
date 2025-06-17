import CollegeCard from './CollegeCard'; 

const college = [
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

  

export default function TrendingColleges() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Trending <span className="text-purple-600">colleges</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {college.map((college, index) => (
            <CollegeCard
              key={index}
              name={college.name}
              location={college.location}
              image={college.image}
              rating={college.rating}
              badge={college.badge}
            />
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
}
