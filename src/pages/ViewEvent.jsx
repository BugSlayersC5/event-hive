import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventDetail from "../components/EventDetail";
import SimilarEvents from "../components/SimilarEvents";


export default function ViewEvent() {
    return (
        <>
            <Navbar />
            <section className="bg-[url('../assets/images/event-img.jpg')] bg-cover bg-center h-64 w-full">
            <h1>Dream world wide in jakatra</h1>
            <h2>IIIT</h2>

            </section>
            <EventDetail />
            <SimilarEvents />
            <Footer />
        </>
    );
}