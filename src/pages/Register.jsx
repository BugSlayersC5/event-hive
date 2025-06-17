import googleIcon from "../assets/images/google-icon.png"
import registerImage from "../assets/images/register.png"
import { Link } from "react-router";
import SubmitButton from "../components/Submitbutton";
import { apiClient } from "../api/client";
import { useNavigate } from "react-router";

export default function Register() {
    const navigate = useNavigate();

    const registerUser = async (data) => {
        try {
            const response = await apiClient.post("/users/register", data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response);
            navigate("/login");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex h-screen font-sans">
            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${registerImage})`,
                zIndex: 0,
            }} className="w-1/2 bg-cover bg-center h-screen relative  ">

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                    <h1 className="text-4xl font-bold mb-4">Welcome back</h1>
                    <p className="mb-6 text-center">To keep connected with us provide us with your information</p>
                    <Link to={'/login'} className="bg-gray-300 text-black font-medium py-2 px-6 rounded-md">Sign In</Link>
                </div>
            </div>


            <div className="w-1/2 flex flex-col justify-center items-center bg-gray-50 px-16 mx-auto">
                <form action={registerUser} className="w-full flex flex-col justify-center items-center">
                    <h2 className="text-sm text-heading text-purple-600 font-semibold">
                        Event <span className="text-black">Hive</span>
                    </h2>
                    <h1 className="text-2xl text-big-heading font-sans">Sign Up to Event Hive</h1>

                    <div className="w-full">
                        <label htmlFor="name" className="text-black font-bold text-sm uppercase">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full mb-4 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="email" className="text-black font-bold text-sm uppercase">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Create user name"
                            className="w-full mb-4 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="password" className="text-black font-bold text-sm uppercase">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full mb-4 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    <SubmitButton
                        title={"Sign up"}
                        type="submit"
                        className="w-1/3 bg-purple-600 text-white font-semibold py-3 rounded hover:bg-purple-700 transition mb-4"
                    />
                </form>

                <div className="my-4 text-gray-500">Or</div>

                <button
                    type="button"
                    className="w-full border border-gray-300 flex items-center justify-center py-3 rounded hover:bg-gray-100"
                >
                    <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" />
                    Sign up with Google
                </button>
            </div>

        </div>
    );
}
