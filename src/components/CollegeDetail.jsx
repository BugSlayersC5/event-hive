import background from "../assets/images/backgroundimg.jpg"
export default function CollegeDetail() {
    return (


        <section className="w-[90%] mx-auto mt-8">
            <img src={background} alt="banner" className="w-full h-96 object-cover rounded-xl shadow-md™" />
            <div className="mt-6">
                <h1 className="text-3xl font-bold text-navy-blue">IIT Roorkee </h1>
                <p className="text-gray-700 mt-4 leading-relaxed">
                     DesignHack organized its 2nd Workshop for all design lovers on 14th February 2024. The workshop taught participants the magic of creativity, UI/UX, and brand development.
                     The event began with insightful lectures on design thinking and was followed by live wireframe sessions.
                </p>
                <p className="text-gray-700 mt-2 leading-relaxed">
                     Participants got a hands-on experience with modern design tools, working on real-world projects, and receiving mentorship from industry professionals. </p>
                     <p className="text-gray-700 mt-2 leading-relaxed">
                        The workshop concluded with a showcase of all projects and a networking session. Certificates were awarded to all attendees. DesignHack aims to spark the creative fire in every student!
                     </p>

            </div>
        </section>
    
            );
}