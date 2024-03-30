
const SectionTitle = ({title, description}) => {
    return (
        <>
            <div className=" text-center space-y-6">
                <h1 className=" font-extrabold text-5xl text-[#1A1919]">{title}</h1>
                <p className=" text-[#757575]">{description}</p>
            </div>
        </>
    );
};

export default SectionTitle;