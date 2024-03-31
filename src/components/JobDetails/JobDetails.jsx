import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {

    const data = useLoaderData();

    const {id} = useParams()

    const currentJob = data.find( data => data.id === parseInt(id))

    const {job_description,job_responsibility,educational_requirements,experiences,contact_information, salary, job_title} =  currentJob
    return (
        <>
            <div className=" grid grid-cols-6 gap-6 max-w-[1300px] mx-auto my-24">
                <div className=" col-span-4 space-y-6">

                    <p> <span className=" text-[#1A1919] font-bold text-xl ">Job Description: </span> {job_description}</p>
                    <p> <span className=" text-[#1A1919] font-bold text-xl ">Job Responsibility: </span> {job_responsibility}</p>
                    <div className=" space-y-4">
                        <h1 className=" text-[#1A1919] font-bold text-xl ">Educational Requirement: </h1>
                        <p>{educational_requirements}</p></div>
                    <div className=" space-y-4">
                        <h1 className=" text-[#1A1919] font-bold text-xl ">Experience: </h1>
                        <p>{experiences}</p>
                    </div>

                </div>
                <div className=" col-span-2 bg-gradient-to-r to-[#7E90FE1A] from-[#9873FF1A] p-8">

                    <h1 className=" border-b-2 pb-4  text-[#1A1919] font-bold text-xl ">Job Details</h1>

                    <div className=" space-y-4 mb-9 mt-6">
                        <p>Salary: {salary} (Per Month)</p>
                        <p>Job Title: {job_title} </p>
                    </div>

                    <h1 className=" border-b-2 pb-4 text-[#1A1919] font-bold text-xl ">Contact Information</h1>

                    <div className=" space-y-4 mt-6">
                        <p> <span className=" text-[#474747] font-medium text-xl ">Phone:</span> {contact_information.phone} </p>
                        <p> <span className=" text-[#474747] font-medium text-xl ">Email:</span> {contact_information.email} </p>
                        <p> <span className=" text-[#474747] font-medium text-xl ">Address:</span> {contact_information.address} </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDetails;