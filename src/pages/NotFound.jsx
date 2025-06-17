import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import notFoundImage from "../assets/images/notfound.jpg";
import {FacebookIcon, TwitterIcon,YoutubeIcon, Instagram, Linkedin } from "lucide-react";

``
export default function NotFound() {
    return (
        <>
            <Navbar />
           <section className="min-h-screen flex flex-col justify-center items-center space-y-6 px-4">
    <div>
        <img src={notFoundImage} alt="Notfound" className="mx-auto" />
    </div>
    <h1 className="text-black font-bold text-center p-4">Oops!</h1>
    <h2 className="text-center p-2 text-gray-500">We can't seem to find the page you are looking for</h2>

<div className="flex justify-center">
    <button className="bg-purple-500 text-white px-6 py-2 rounded-xl hover:bg-indigo-600">
        Back to Homepage
    </button>
</div>
<div className="">
    <h1 className="text-center items-center justify-around mb-3">
Follow us on
    </h1>
    <div className="flex flex-row text-center gap-2 hover:text-blue-600 transition  text-gray-500">
<  Instagram/>
<FacebookIcon/>
<Linkedin/>
<TwitterIcon/>
<YoutubeIcon/>
</div>
</div>
</section>
            <Footer />
        </>
    );
}