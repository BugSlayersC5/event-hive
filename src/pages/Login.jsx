import googleIcon from "../assets/images/google-icon.png"
import loginImage from "../assets/images/login.png"
import { Link } from "react-router";
import SubmitButton from "../components/Submitbutton";
import { apiClient } from "../api/client";
import { useNavigate } from "react-router";


export default function Login() {
    const navigate =useNavigate();

    const loginUser = async (data) => {
        try {
           const response =await apiClient.post("/users/login",data, {headers:
            {
                "Content-Type":"application/json"
            }
           });
           console.log(response);
           localStorage.setItem("ACCESS_TOKEN",response.data.accessToken);
           navigate('/');
           
        } catch (error) {
            console.log(error)
            
        }
    }

    return (
        <div className="flex h-screen font-sans">
            <form action={loginUser} className="w-1/2 min-h-screen flex flex-col justify-center items-center bg-gray-50 px-16 space-y-6">

                <h2 className="text-2xl text-heading text-purple-600 font-semibold">Event <span className="text-black">Hive</span></h2>
                <h1 className="text-2xl text-big-heading font-sans mt-4 mb-8">Sign In to Event Hive</h1>
                <div className="w-full">
                    <label htmlFor="email" className="text-black font-bold text-sm uppercase"> Your Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full mb-4 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>
                <div className="w-full flex flex-row justify-between">
                    <label htmlFor="Password" className="text-black font-bold text-sm uppercase">Password</label>
                    <label htmlFor="" className="text-gray-600">Forgot Password?</label>
                </div>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full mb-4 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />

                <SubmitButton 
                title={"sign in" }
                className="w-1/3 bg-purple-600 text-white font-semibold py-3 rounded hover:bg-purple-700 transition mb-4"
                    Sign In
                />

                <div className="mb-4 text-gray-500">Or</div>

                <button className="w-1/2 border border-gray-300 flex items-center justify-center py-3 rounded hover:bg-gray-100">
                    <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" />
                    Sign In with Google
                </button>
            </form>


            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${loginImage})`,
                zIndex: 0,
            }} className="w-1/2 bg-cover bg-center h-screen relative  ">



                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8  rounded-lg shadow-lg border border-opacity-10 border-white">
                    <h1 className="text-4xl font-bold mb-4">Hello Friend</h1>
                    <p className="mb-6 text-center">To keep connected with us, provide us with your information</p>
                    <Link to={'/register'} className="bg-white text-black font-medium py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300">Sign up</Link>
                </div>
            </div>

        </div>



    );
}