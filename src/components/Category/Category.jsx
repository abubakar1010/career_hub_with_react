
const Category = ({category}) => {

    const {availability, category_name, logo} = category
    return (
        <div className=" bg-gradient-to-r to-[rgba(126,144,254,0.05)] from-[rgba(152,115,255,0.05)] space-y-2 py-11 px-12 my-14 rounded-lg ">
            
            <img src={logo} alt="" />
            <div className=" pt-4">

            <h1 className=" font-medium text-[#474747] text-xl ">{category_name}</h1>
            <p className=" text-[#A4A4A4] text-lg ">{availability}</p>
            </div>
        </div>
    );
};

export default Category;