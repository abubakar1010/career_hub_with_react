
const Banner = () => {
    return (
        <>

        <div className=" flex justify-center gap-16 px-40 mb-28 pt-14 bg-gradient-to-r to-[rgba(126,144,254,0.05)] from-[rgba(152,115,255,0.05)] ">

            <div className=" space-y-6 pt-5">
                <h1 className=" text-[#1A1919] text-5xl font-bold leading-[60px] ">One Step <br /> Closer To your <br /> <span className=" bg-gradient-to-r to-[#7E90FE] from-[#9873FF] bg-clip-text text-transparent  ">Dream Job</span></h1>
                <p className=" text-lg font-medium text-[#757575] ">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button type="button" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3 text-center bg-gradient-to-r to-[#7E90FE]  from-[#9873FF]">Get started</button>
            </div>

            <div>
                <img src="user.png" alt="" />
            </div>
        </div>
        </>
    );
};

export default Banner;