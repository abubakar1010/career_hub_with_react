import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSavedData } from "../../utitlities/localStorage";
import AppliedJobs from "../AppliedJobs/AppliedJobs";

const Jobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([])

    const [displayJobs, setDisplayJobs] = useState([])

    const [isDown, setIsDown] = useState(false)

    const jobs = useLoaderData()

    useEffect( () => {

        const storedJobsId = getSavedData()

        const exist = jobs.filter( job => storedJobsId.includes(job.id))

        setAppliedJobs(exist)
        setDisplayJobs(exist)
    },[])

    const handleDropDown = () => {

        setIsDown(!isDown)

    }

    const handleFilterJobs = (filter) => {

        if (filter === "all") {
            setDisplayJobs(appliedJobs)
        }
        else if(filter === "remote"){

            const remote = appliedJobs.filter( remJob => remJob.remote_or_onsite === "Remote")

            setDisplayJobs(remote)

        }
        else if(filter === "onsite"){

            const remote = appliedJobs.filter( siteJob => siteJob.remote_or_onsite === "Onsite")

            setDisplayJobs(remote)

        }

    }


    return (
        <>
            <div>
                <div className=" relative py-12">

                        <div className="absolute right-20 ">
                            
                            <button onClick={ () => handleDropDown()} id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                            </button>

                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdownDelay" className={`z-10 ${isDown || "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                <li onClick={ () => handleFilterJobs("all")}>
                                    <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All</button>
                                </li>
                                <li onClick={ () => handleFilterJobs("remote")}>
                                    <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remote</button>
                                </li>
                                <li onClick={ () => handleFilterJobs("onsite")}>
                                    <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Onsite</button>
                                </li>
                                
                                </ul>
                            </div>

                    </div>  
                </div>
                {

                    displayJobs.map( job => <AppliedJobs key={job.id} display={job} />)

                }
            </div>
        </>
    );
};

export default Jobs;