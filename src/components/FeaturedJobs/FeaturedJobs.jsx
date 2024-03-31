import { useEffect, useState } from "react";
import Featured from "../Featured/Featured";
import SectionTitle from "../SectionTitle/SectionTitle";

const FeaturedJobs = () => {

    const [ featured, setFeatured ] = useState([])

    const [dataLength, setDataLength] = useState(4)

    useEffect( () => {
        fetch('jobs.json')
        .then( res => res.json())
        .then( res => setFeatured(res))
    },[])

    const featuredDescription = {

        title:"Featured Jobs",
        description:"Explore thousands of job opportunities with all the information you need. Its your future"
    }
    return (
        <>
            <div>
                <SectionTitle title={featuredDescription.title} description={featuredDescription.description} />
                <div className=" w-full grid grid-cols-2 justify-center items-center my-16 gap-8 max-w-[1200px] mx-auto ">

                {
                    featured.slice(0, dataLength).map( element => <Featured key={element.id} element={element} />)
                }
                </div>

                <div className={`text-center mb-20 ${ featured.length === dataLength && "hidden"}`}>


                <button  onClick={ () => setDataLength(featured.length)} type="button" className={"text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3 text-center bg-gradient-to-r to-[#7E90FE]  from-[#9873FF]"}>Show More</button>

                </div>
            </div>
        </>
    );
};

export default FeaturedJobs;