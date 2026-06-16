import { noImage } from "../data/getHeaderData";

const leftNewsCard = ({ data }) => {


    const { title, description, publishedAt, url, urlToImage } = data;

    const dateObject = new Date(publishedAt);

    // Format the date and time
    const formattedDate = dateObject.toLocaleString();

    return (
        <div className="col-span-12 grid grid-cols-12 gap-4">

            <div className="col-span-12 lg:col-span-4">
                <a href={url} target="_blank" rel="noreferrer">
                    <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                        {title}
                    </h3>
                </a>
                <p className="text-base text-[#5C5955]">
                    {description ? description : <b>No Details Available </b>}
                </p>
                <p className="mt-5 text-base text-[#5C5955]">
                    {formattedDate}
                </p>
            </div>

            <div className="col-span-12 lg:col-span-8">

                <img
                    className="w-full"
                    src={urlToImage ? urlToImage : noImage}
                    alt="thumb"
                />
                <p className="mt-5 text-base text-[#5C5955]">
                    Illustration: Karolis Strautniekas
                </p>
            </div>
        </div>

    );
};

export default leftNewsCard;