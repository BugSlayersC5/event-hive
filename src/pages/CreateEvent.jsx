import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CreateEvent() {
    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center bg-gray-100 justify-center w-[100%] p-4 gap-6 mx-auto">
                <h1 className="text-center font-bold text-black text-4xl">Welcome to the Create Event Page</h1>

                <div className="mb-4 bg-gray w-[60%]">
                    <label htmlFor="event name" className="block mb-2 text-sm font-medium text-gray-700">
                        Event Title
                    </label>
                    <input
                        type="text"
                        placeholder="Enter the title of your event"
                        className="w-full p-3 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="mb-4 bg-gray w-[100%]">
                        <label htmlFor="venue" className="block mb-2 text-sm font-medium text-gray-700">
                            Event Venue
                        </label>
                        <input
                            type="email"
                            placeholder="Enter the Venue"
                            className="w-full p-3 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="w-[90%]">
                            <label htmlFor="start time" className="block mb-2 text-sm font-medium  text-gray-700 placeholder-gray-200">Start Time</label>
                            <input type="time"
                                placeholder="Enter start time"
                                name="start time"
                                id="start time"
                                className="w-full bg-white p-3 mb-4 rounded-md text-gray-700 placeholder-gray-400 focus-outline-none focus-ring-2 focus-ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="End time" className="block mb-2 text-sm font-medium  text-gray-700 placeholder-gray-200">End Time</label>
                            <input type="time"
                                placeholder="enter end time"
                                name="enter end time"
                                className="w-full bg-white p-3 rounded-md text-gray-700 placeholder-gray-400 focus-outline-none focus-ring-2 focus-ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="start date">Start Date</label>
                            <input type="date"
                                placeholder="enter date"
                                id="start date"
                                name="start date"
                                className="w-full bg-white p-3 mb-6 rounded-md text-gray-700 placeholder-gray-400 focus-outline focus-ring-2 focus-ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="end date">End Date</label>
                            <input type="date"
                                placeholder="enter date"
                                id="end date"
                                name="end date"
                                className="w-full bg-white p-3 mb-4 rounded-md text-gray-700 placeholder-gray-400 focus-outline focus-ring-2 focus-ring-blue-500" />
                        </div>

                       
                    </div>
                </div>

                <section className="flex flex-col-reverse items-center justify-center mx-auto gap-6 mt-15">
                    <div>
                        <h2 className="text-2xl font-bold ">Event Discriptionn</h2>
                        <h2 className=" mt-10 mx-5">Event Image</h2>

                        <div className="bg-gray-300 w-2xl h-50 mt-5  p-4 ">
                        
                    </div>

                     <div>
                        <h2 className=" font mt-30 text start">Event Description</h2>
                          <div className="bg-white w-2xl h-50 mt-5  p-4 "></div>
                    </div>
                    </div>

                   

                    

                </section>
            </section>


        </>
    );
}