import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategory from "../JobCategory/JobCategory";


const Home = () => {
    return (
        <>
            <Banner />
            <JobCategory />
            <FeaturedJobs />
        </>
    );
};

export default Home;