import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";
import useSWR from "swr";
import { apiFetcher, apiClient } from "../api/client";
import SubmitButton from "../components/Submitbutton";
import { useNavigate } from "react-router";


export default function CreateEvent() {
    const navigate = useNavigate();
    const { data, isLoading, error } = useSWR("/colleges", apiFetcher);

    const postEvent = async (data) => {
        try {
            const response = await apiClient.post("/events", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
                }
            });
            console.log(response.data);
            navigate(`/view-event?id=${response.data.data.id}`);

        } catch (error) {
            console.log(error)

        }

    }

    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center bg-gray-100 justify-center w-[100%] p-4 gap-6 mx-auto">
                <form action={postEvent}>
                    <h1 className="text-center font-bold text-black text-4xl">Welcome to the Create Event Page</h1>

                    <div className="mb-4 bg-gray w-[60%]">
                        <label htmlFor="event name" className="block mb-2 text-sm font-medium text-gray-700">
                            College
                        </label>
                        <select className="w-full p-3 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" name="college" id="">
                            {isLoading ? <option value="">loading...</option> :
                                error ? <option value="" disabled>Something went wrong</option> :
                                    data.data.map((college) => {
                                        return <option key={college.id} value={college.id}>{college.name}</option>
                                    })}
                        </select>

                        <label htmlFor="event name" className="block mb-2 text-sm font-medium text-gray-700">
                            Event Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter the title of your event"
                            name="title"
                            className="w-full p-3 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="mb-4 bg-gray w-[100%]">
                            <label htmlFor="venue" className="block mb-2 text-sm font-medium text-gray-700">
                                Event Venue
                            </label>
                            <input
                                type="text"
                                name="venue"
                                placeholder="Enter the Venue"
                                className="w-full p-3 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* <div className="w-[90%]">
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
                        </div> */}

                            <div>
                                <label htmlFor="start date">Start Date</label>
                                <input type="datetime-local"
                                    placeholder="enter date"
                                    id="start date"
                                    name="start"
                                    className="w-full bg-white p-3 mb-6 rounded-md text-gray-700 placeholder-gray-400 focus-outline focus-ring-2 focus-ring-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="end date">End Date</label>
                                <input type="datetime-local"
                                    placeholder="enter date"
                                    id="end date"
                                    name="end"
                                    className="w-full bg-white p-3 mb-4 rounded-md text-gray-700 placeholder-gray-400 focus-outline focus-ring-2 focus-ring-blue-500" />
                            </div>


                        </div>
                    </div>

                    <section className="flex flex-col-reverse items-center justify-center mx-auto gap-6 mt-30">
                        <div>
                            <h2 className="text-2xl font-bold mt-10 ">Event Description</h2>
                            <textarea name="description" id="" className="w-2xl  p-2"></textarea>

                            <h2 className="text-2xl font-bold mt-10">Event Image</h2>
                            <input type="file" name="image" />


                            <div>
                                <h2 className=" font mt-30 text start">Event Tags</h2>
                                <select multiple name="tags" id="" className=" w-2xl  p-2 ">

                                    <option value="social">Social</option>
                                    <option value="education">Education</option>
                                    <option value="events">Events</option>
                                    <option value="fun-fair">Fun Fair</option>
                                    <option value="fellowships">Fellowships</option>

                                </select>
                                <SubmitButton title={"Create Event"} className="bg-purple-600 rounded-md py-2 px-50 text-white justify-center mt-5 mx-65" />

                            </div>
                        </div>

                    </section>
                </form>


            </section>


        </>
    );
}