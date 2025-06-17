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
                className="relative bg-cover bg-center h-screen flex items-end pb-20 w-full"
            >

                <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                ></div>

                <div className="relative z-10 mx-10 text-white w-full max-w-5xl">

                    <button className="absolute mt-1 left-10 py-2 px-3 rounded-md bg-purple-600 bg-opacity-20 text-white hover:bg-opacity-30 transition-colors">
                        Back
                    </button>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end">

                        <div className="flex-1 mt-10 pr-0 md:pr-8 mb-8 md:mb-0">
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                                Dream worldwide in Jakarta
                            </h1>
                            <h2 className="text-3xl md:text-4xl mt-3 font-medium text-purple-200">
                                IIIT Sonepat
                            </h2>
                            <p className="mt-6 text-lg max-w-2xl leading-relaxed opacity-90">
                                DesignHub organized a 3D Modeling Workshop using Blender on 16th
                                February at 5 PM. The workshop taught participants the magic of
                                creating stunning 3D models and animations using Blender. It was
                                suitable for both beginners and experienced users. The event was
                                followed by a blender-render competition, which added to the
                                excitement.
                            </p>
                            <button
                                className="mt-8 px-6 py-3  text-white font-semibold rounded-lg transition-colors shadow-lg"
                            >
                                View map
                            </button>
                        </div>


                        <div className="bg-white rounded-xl p-6 md:p-8 text-gray-800 p shadow-xl w-full md:w-96">
                            <h2 className="text-2xl font-semibold mb-4">Date & Time</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Saturday, March 18, 2025, 9:30 PM
                            </p>

                            <h3 className="text-xl font-semibold mb-3">Add to calendar</h3>
                            <div className="flex flex-col  space-y-3">
                                <button
                                    className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg  shadow-md"
                                >
                                    Book now
                                </button>
                                <button
                                    className="w-full px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors shadow-sm"
                                >
                                    Program promoter
                                </button>
                            </div>

                            <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-200">
                                No Refunds
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <EventDetail />
            <SimilarEvents />
            <Footer />
        </>
    );
}
