import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventDetail from "../components/EventDetail";
import SimilarEvents from "../components/SimilarEvents";
import bgImage from "../assets/images/event-img.jpg";

export default function ViewEvent() {
  return (
    <>
      <Navbar />
      <section
        style={{ backgroundImage: `url(${bgImage})` }}
        className=" bg-cover bg-center h-100 w-full"
      >
        <h1>Dream worldwide in Jakarta</h1>
        <h2>IIIT</h2>
      </section>

      <EventDetail />
      <SimilarEvents />
      <Footer />
    </>
  );
}
