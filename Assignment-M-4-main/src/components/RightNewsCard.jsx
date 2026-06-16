import { noImage } from "../data/getHeaderData";

const RightNewsCard = ({ data }) => {

    const { title, description, publishedAt, url, urlToImage } = data;

    const dateObject = new Date(publishedAt);

    // Format the date and time
    const formattedDate = dateObject.toLocaleString();
    return (
        <div className="col-span-12 mb-6 md:col-span-8">

            <img
                className="w-full"
                src={urlToImage ? urlToImage : noImage}
                alt="thumb"
            />


            <div className="col-span-12 mt-6 md:col-span-4">
                <a href={url} target="_blank" rel="noreferrer">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                        {title}
                    </h3>
                </a>

                <p className="text-base text-[#5C5955]">
                    {description ? description : <b>No Details Available </b>}
                </p>
                <p className="mt-5 text-base text-[#94908C]">
                    {formattedDate}
                </p>
            </div>
        </div>

    );
};

export default RightNewsCard;