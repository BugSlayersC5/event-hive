import React, { useState } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import useSWR from "swr";
import { apiFetcher } from "../api/client";

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

    const { data } = useSWR("/users/profile", apiFetcher);

    const Navigate = useNavigate();

    const Logout = () => {
      localStorage.removeItem("ACCESS_TOKEN");
      // window.location.href = "/login";
      Navigate("/login");

    }

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              Event <span className="text-purple-600">Hive</span>
            </span>
          </div>

          <div>
          <h1>{data?.data?.name || "Unknown User"} </h1>
            <button className='bg-red-500 text-white px-4 py-2 rounded-md'  onClick={Logout} >Logout</button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium cursor-pointer">
              Login
            </Link >
            <Link to="/register" className="bg-[#7848F4] from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 font-medium shadow-lg cursor-pointer">
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <button className="block w-full text-left py-2 text-gray-700 hover:text-purple-600 font-medium">
            Login
          </button>
          <button className="block w-full text-left mt-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 font-medium shadow-lg">
            Sign up
          </button>
        </div>
      )}
    </header>
  );
};

