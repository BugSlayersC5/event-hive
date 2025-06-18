import CollegeCard from "./CollegeCard";
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { ClipLoader } from "react-spinners";

export default function TrendingColleges() {
  // where "/colleges" is url
  // limit = 3 should limit your cards to 3 && skip=4 means it should skip the first 4
  const { data, error, isLoading } = useSWR("/colleges?limit=3&skip=4", apiFetcher);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <ClipLoader size={100} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-red-600 text-9xl">Something went wrong</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Trending <span className="text-purple-600">colleges</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.data.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
