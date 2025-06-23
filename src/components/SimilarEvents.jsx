import EventCard from "./EventCard";
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { BeatLoader } from "react-spinners";



// const events = [
//     {
//       title: "Metrics, Market & Business Your Book",
//       image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
//       date: "Saturday, Dec 16, 6:00 PM",
//       time: "6:00 PM - 9:00 PM",
//       location: "Brisbane, Australia",
//       price: "FREE",
//       category: "Business"
//     },
//     {
//       title: "Tech Conference 2024: AI & Machine Learning Summit",
//       image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
//       date: "Monday, Dec 18, 9:00 AM",
//       time: "9:00 AM - 5:00 PM",
//       location: "San Francisco, CA",
//       price: "$299",
//       category: "Technology"
//     },
//     {
//       title: "Creative Workshop: Digital Art & Design Fundamentals",
//       image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
//       date: "Wednesday, Dec 20, 2:00 PM",
//       time: "2:00 PM - 6:00 PM",
//       location: "New York, NY",
//       price: "$150",
//       category: "Workshop"
//     },
//     {
//       title: "Startup Networking Event: Building Connections",
//       image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
//       date: "Friday, Dec 22, 7:00 PM",
//       time: "7:00 PM - 11:00 PM",
//       location: "Austin, TX",
//       price: "$50",
//       category: "Networking"
//     },
//     {
//       title: "Music Festival: Electronic Beats & Vibes",
//       image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
//       date: "Saturday, Dec 23, 8:00 PM",
//       time: "8:00 PM - 2:00 AM",
//       location: "Miami, FL",
//       price: "$125",
//       category: "Music"
//     },
//     {
//       title: "Professional Development: Leadership Skills Workshop",
//       image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
//       date: "Sunday, Dec 24, 10:00 AM",
//       time: "10:00 AM - 4:00 PM",
//       location: "Chicago, IL",
//       price: "$200",
//       category: "Workshop"
//     },
//   ];




export default function SimilarEvents() {
    const { data, isLoading, error } = useSWR('/events?limit=6', apiFetcher);
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <BeatLoader color="#7848F4" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Error loading events</p>
            </div>
        );
    }

    return (
        <section className="mt-20 w-[90%] mx-auto">
            <h1 className="text-3xl font-bold mb-4">Similar Events</h1>
            <div className="grid grid-cols-3 gap-5">
                {data.data.map((event) => (
                            <EventCard key={event.id} event ={event} />
                          ))}
            </div>
        </section>
    );
}