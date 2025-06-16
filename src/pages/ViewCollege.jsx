import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CollegeDetail from "../components/CollegeDetail";
import CollegeEvents from "../components/CollegeEvents";
import Backgroundimg from "../assets/images/backgroundimg.jpg";

export default function ViewCollege() {
    return (
        <div className="max-w-4xl mx-auto p-4">
      <div className="rounded-lg shadow-md overflow-hidden">
        <div>
          <img src={Backgroundimg} alt=" " className="w-full h-64 object-cover" />
          </div>
    
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">IIT Roorkee</h2>
          <p className="text-gray-600 mb-2">
            DesignHub organized a 3D Modeling Workshop using Blender on 10th February at IITR.
            The workshop taught participants the magic of creating stunning 3D models and animations using Blender.
            It was suitable for both beginners and experienced users.
          </p>
          <p className="text-gray-600 mb-2">
            DesignHub organized a 3D Modeling Workshop using Blender on 10th February at IITR.
            The workshop taught participants the magic of creating stunning 3D models and animations using Blender.
            It was suitable for both beginners and experienced users.
          </p>
          <p className="text-gray-600 mb-2">
            DesignHub organized a 3D Modeling Workshop using Blender on 10th February at IITR.
            The workshop taught participants the magic of creating stunning 3D models and animations using Blender.
            It was suitable for both beginners and experienced users.
          </p>

        </div>
      </div>
    </div>
    );
}