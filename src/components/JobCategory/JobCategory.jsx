import { useEffect, useState } from "react";
import Category from "../Category/Category";
import SectionTitle from "../SectionTitle/SectionTitle";

const JobCategory = () => {

    const [categories, setCategories] =  useState([])

    useEffect(() => {
        fetch('categories.json')
        .then( res => res.json())
        .then( res => setCategories(res))
    },[])

    const sectionTitle = {
        title:"Job Category List",
        description: "Explore thousands of job opportunities with all the information you need. Its your future"
    }
    return (
        <>

                <SectionTitle title={sectionTitle.title} description={sectionTitle.description} />
            <div className=" flex gap-11 justify-center items-center">
                {
                    categories.map( category => <Category key={category.id} category={category} />)
                }

            </div>
        </>
    );
};

export default JobCategory;