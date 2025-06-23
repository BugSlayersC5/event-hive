import map from "../assets/images/group21.png";
import { useSearchParams } from "react-router";
import useSWR from "swr";
import { apiFetcher, imageBaseURL } from "../api/client";
import { useEffect } from "react";

export default function EventDetail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { data, isLoading, error } = useSWR(`/events/${id}`, apiFetcher);

  useEffect( ()=> {
    scrollTo(0, 0);

  },[id])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading event detail...
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        Something went wrong
      </div>
    );
  }

  return (
    <div>
      <section
        style={{ backgroundImage: `url(${imageBaseURL}/${data.data.image})` }}
        className="relative bg-cover bg-center h-screen flex items-end pb-20 w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div className="relative z-10 mx-10 text-white w-full max-w-5xl">
          <button className="absolute mt-1 left-10 py-2 px-3 rounded-md bg-purple-600 bg-opacity-20 text-white hover:bg-opacity-30 transition-colors">
            Back
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div className="flex-1 mt-10 pr-0 md:pr-8 mb-8 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {data.data.title}
              </h1>
              <h2 className="text-3xl md:text-4xl mt-3 font-medium text-purple-200">
                {data.data.venue}
              </h2>
              <p className="mt-6 text-lg max-w-2xl leading-relaxed opacity-90">
                {data.data.description}
              </p>
              <button className="mt-8 px-6 py-3  text-white font-semibold rounded-lg transition-colors shadow-lg">
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
                <button className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg  shadow-md">
                  Book now
                </button>
                <button className="w-full px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors shadow-sm">
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

      <section className="flex flex-row  mx-10 mt-15">
        <div>
          <p>{data.data.description}</p>

          <div className="flex flex-row  mt-10">
            <h2>Hours</h2>
            <p>Weekdays hour: 7PM - 10PM</p>
            <p>Sunday hour: 7PM - 10PM</p>
          </div>

          <div>
            <h1 className="text-3xl bold">Tags</h1>

            {data.data.tags.map((tag, index) => {
              return (
                <p key={index} className="text-lg text-gray-700 mb-6">
                  {tag}
                </p>
              );
            })}
          </div>

          <div className="flex flex-start mt-5">
            <h2>Organizer Contact</h2>
            <p>
              Please go to www.sneakypeeks.com and refer the FAQ section for
              more detail
            </p>
          </div>
        </div>

        <div className="flex flex-row">
          <h2 className="mt-5 flex flex-row font-semibold">Event location</h2>
          <img className="w-[100%] h-40vh mt-20" src={map} alt="group21.png" />
        </div>
      </section>
    </div>
  );
}
