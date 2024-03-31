import { CiDollar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";


const Featured = ({element}) => {

    const {salary,job_type,location,remote_or_onsite,company_name,logo,job_title,id} = element

    console.log(logo);
    return (
        <div className=" border border-[#E8E8E8] rounded-lg p-10 ">
            <img src={logo} alt="" />
            <div className=" mt-8 mb-4 space-y-2">

                <h1 className=" text-[#474747] text-xl font-extrabold">{job_title}</h1>
                <p>{company_name}</p>

            </div>

            <div className=" flex gap-5 items-center my-5">
                <p className=" border border-[#7E90FE] rounded-lg px-7 py-2 text-[#7E90FE]">{remote_or_onsite}</p>
                <p className=" border border-[#7E90FE] rounded-lg px-7 py-2 text-[#7E90FE]">{job_type}</p>
            </div>

            <div className=" flex gap-5">
                <p className=" flex gap-3 "><IoLocationOutline className=" text-2xl"  />{location}</p>
                <p className=" flex gap-3"><CiDollar className=" text-2xl" />Salary:{salary}</p>
            </div>
            <div className=" mt-7">
            <NavLink to={`/jobDetail/${id}`}>
            <button type="button" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3 text-center bg-gradient-to-r to-[#7E90FE]  from-[#9873FF]">View Details</button>
            </NavLink>
            </div>
        </div>
    );
};

export default Featured;