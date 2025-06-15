import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroWithFilter from "../components/HeroWithFilter";
import UpcomingEvents from "../components/UpcomingEvents";
import TrendingColleges from "../components/TrendingColleges";
import OurBlogs from "../components/OurBlogs";

const brands = [
    { name: 'Spotify', logo: '🎵' },
    { name: 'Google', logo: '🔍' },
    { name: 'Stripe', logo: '💳' },
    { name: 'YouTube', logo: '📺' },
    { name: 'Microsoft', logo: '🖥️' },
    { name: 'Medium', logo: '📝' },
    { name: 'Zoom', logo: '📹' },
    { name: 'Uber', logo: '🚗' },
    { name: 'Grab', logo: '🛵' }
  ];

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroWithFilter />
            <UpcomingEvents />
            {/* Make your own event section goes here */}

  

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join these <span className="text-purple-600">brands</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've had the pleasure of working with industry-defining brands. These are just some of them.
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {brand.logo}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors duration-200">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

            <TrendingColleges />
            <OurBlogs />
            <Footer />
        </>
    );
}