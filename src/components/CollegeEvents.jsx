import CollegeCard from "./CollegeCard";
import EventCard from "./EventCard";

 const events = [{
      title: "SaaS Meetup Brisbane - Metrics, Market & Business Your Book",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Saturday, Dec 16, 6:00 PM",
      time: "6:00 PM - 9:00 PM",
      location: "Brisbane, Australia",
      price: "FREE",
      category: "Business"
    },



]

export default function CollegeEvents() {
    return (
        <section className="mt-20 w-[90%] mx-auto">
            <div>
                <h1>
                    <span>College</span>
                    <span>Events</span>
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3, 4, 5, 6].map(n => <EventCard key={n} />)}
            </div>
        </section>
    );
}