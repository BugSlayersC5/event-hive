import { useState } from "react";
import GoogleIcon from "../assets/images/google-icon.png"

export default function Register() {

    const [form] = useState({ name: '', password: '', confirmPassword: '' });


    return (
        <div className="flex h-screen font-sans">
            {/* Left side */}
            <div className="w-1/2 bg-cover bg-center relative bg-[url(../assets/images/register.png)]">
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-8">
                    <h1 className="text-4xl font-bold mb-4">Welcome back</h1>
                    <p className="mb-6 text-center">To keep connected with us provide us with your information</p>
                    <button className="bg-gray-300 text-black font-medium py-2 px-6 rounded-md">Sign In</button>
                </div>
            </div>

            {/* Right side */}
           <form className="w-1/2 flex flex-col justify-center items-center bg-gray-50 px-16 space-y-6">

                <h2 className="text-2xl text-heading text-purple-600 font-semibold">Event <span className="text-black">Hive</span></h2>
                <h1 className="text-2xl text-big-heading font-sans mt-4 mb-8">Sign Up to Event Hive</h1>
                <div className="w-full">
                    <label htmlFor="name" className="text-black font-bold text-2xl uppercase"> Your Name</label>
                    <input
                        name="name"
                        value={form.name}
                        placeholder="Enter your name"
                        className="w-full mb-4 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="Username" className="text-black font-bold text-2xl uppercase"> Username</label>
                    <input
                        name="name"
                        value={form.name}
                        placeholder="Create user name"
                        className="w-full mb-4 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="Password" className="text-black font-bold text-2xl uppercase">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        placeholder="Enter your password"
                        className="w-full mb-4 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="confirm password" className="text-black font-bold text-2xl uppercase">Confirm password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        placeholder="Confirm your password"
                        className="w-full mb-6 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>

                <button className="w-1/3 bg-purple-600 text-white font-semibold py-3 rounded hover:bg-purple-700 transition mb-4">
                    Sign Up
                </button>

                <div className="mb-4 text-gray-500">Or</div>

                <button className="w-1/2 border border-gray-300 flex items-center justify-center py-3 rounded hover:bg-gray-100">
                    <img src={GoogleIcon} alt="Google" className="w-5 h-5 mr-2" />
                    Sign up with Google
                </button>
           </form>
        </div>
    );
}
