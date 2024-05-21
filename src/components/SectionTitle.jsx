

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto md:w-4/12 my-10">
            <p className=" text-yellow-600 mb-4">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;