import map from "../assets/images/group21.png"

export default function EventDetail() {
    return (

        <div >


            <div>

            </div>
            <section className="flex flex-row  mx-10 mt-15" >
               <div>
                 <p>Description
                    DesignHub organized a 3D Modeling Workshop using <br />Blender on 16th February at 5 PM. <br />The workshop taught participants the magic of <br />creating stunning 3D models and animations using Blender. <br />It was suitable for both beginners and experienced users. <br />The event was followed by a blender-render competition, which added to the excitement.

                    <br /> DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. <br />The workshop taught participants the magic of creating stunning 3D models and <br />animations using Blender. It was suitable for both beginners and experienced users. <br />The event was followed by a blender-render competition, which added to the <br />excitement.</p>

                <div className="flex flex-row  mt-10">
                    <h2>Hours</h2>
                    <p>Weekdays hour:  7PM - 10PM</p>
                    <p>Sunday hour:   7PM - 10PM</p>
                </div>

                <div className="flex flex-start mt-5">
                    <h2>Organizer Contact</h2>
                    <p>Please go to www.sneakypeeks.com and refer the FAQ section for more detail</p>
                </div>


               </div>





                <div className="flex flex-row">
                    <h2 className="mt-5 flex flex-row font-semibold" >Event location</h2>
                    <img className="w-[100%] h-40vh mt-20" src={map} alt="group21.png" />
                </div>
            </section>


        </div>

    );
}