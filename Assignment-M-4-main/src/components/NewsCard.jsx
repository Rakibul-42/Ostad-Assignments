/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const NewsCard = ({ article }) => {
    const { title, description, publishedAt, url } = article;

    const dateObject = new Date(publishedAt);

    // Format the date and time
    const formattedDate = dateObject.toLocaleString();
    return (
        <div>
            <div className="col-span-12 md:col-span-8">

                <div className="col-span-12 md:col-span-4">
                    <a href={url}
                        target="_blank" rel="noreferrer"
                    ><h3
                        className="mb-2.5 text-xl font-bold lg:text-[20px]"
                    >
                            {title}
                        </h3>
                    </a>
                    <p className="text-base text-[#292219]">
                        {description}
                    </p>
                    <p className="mt-5 text-base text-[#94908C]">
                        {formattedDate}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;