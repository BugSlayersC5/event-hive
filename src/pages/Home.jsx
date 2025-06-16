import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroWithFilter from "../components/HeroWithFilter";
import UpcomingEvents from "../components/UpcomingEvents";
import TrendingColleges from "../components/TrendingColleges";
import OurBlogs from "../components/OurBlogs";
import Spotify from "../assets/images/spotify.png"; 
import Google from "../assets/images/google.png";
import Stripe from "../assets/images/stripe.png";
import YouTube from "../assets/images/youtube.png";
import Microsoft from "../assets/images/microsoft.png";
import Medium from "../assets/images/medium.png";
import Zoom from "../assets/images/zoom.png";
import Uber from "../assets/images/uber.png";   
import Grab from "../assets/images/grab.png";
import IllustrationImg from "../assets/images/banner.png"; // Adjust the path as necessary

const brands = [
  { src: Spotify, alt: "Spotify" },
  { src: Google, alt: "Google" },
  { src: Stripe, alt: "Stripe" },
  { src: YouTube, alt: "Youtube" },
  { src: Microsoft, alt: "Microsoft" },
  { src: Medium, alt: "Medium" },
  { src: Zoom, alt: "Zoom" },
  { src: Uber, alt: "Uber" }, 
  { src: Grab, alt: "Grab" }, 
];

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroWithFilter />
      <UpcomingEvents />
      {/* Make your own event section goes here */}
        <section className="py-10">
        <div className="relative bg-[#10107B] px-6 md:px-16 flex flex-col lg:flex-row justify-center items-center mx-auto">
          {/* Illustration Image */}
          <div className="  w-full lg:w-[40%] mb-8 lg:mb-0">
            <img
              src={IllustrationImg}
              alt="Illustration"
              className="w-full object-contain -mt-10 lg:-mt-20"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-[30%] text-white text-center lg:text-left lg:pl-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Make Your Own Event
            </h2>
            <p className="text-base mt-4">
              Learn how to write, market, and publish your book in just 30 days
              with expert guidance.
            </p>
            <button className="bg-[#7848F4] px-8 py-2 rounded-md text-white font-medium mt-6 my-6 md:mb-0">
              Create Event
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join these <span className="text-purple-600">brands</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've had the pleasure of working with industry-defining brands.
              These are just some of them.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
  {brands.map((brand, index) => (
    <div
      key={index}
      className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
    >
      <img
        src={brand.src}
        alt={brand.alt}
        className="h-20  w-25 mb-2 group-hover:scale-110 transition-transform duration-200"
      />
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
