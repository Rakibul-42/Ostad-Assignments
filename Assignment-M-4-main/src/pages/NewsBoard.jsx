import { useContext } from "react";
import LeftNewsCard from "../components/LeftNewsCard";
import RightNewsCard from "../components/RightNewsCard";
import { newsDataContext } from "../context";
import { getSpitedData } from "../utils/getSpitedData";

const NewsBoard = () => {

    const { data } = useContext(newsDataContext);

    const { LeftSideData, rightSideData } = getSpitedData(data)



    return (
        data && data.length === 0 ? <div className="flex flex-col items-center justify-center h-screen">
            <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin w-12 h-12 mb-4"></div>
            <p className="text-gray-600  text-3xl">Loading data...</p>
        </div> :
            <main className="my-10 lg:my-14">
                <div className="container mx-auto grid grid-cols-12 gap-8">


                    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
                        {
                            LeftSideData.map((data) => <LeftNewsCard key={crypto.randomUUID()} data={data} />)
                        }

                    </div>


                    <div className="col-span-12 self-start xl:col-span-4">
                        <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                            {
                                rightSideData.map((data) => <RightNewsCard key={crypto.randomUUID()} data={data} />)
                            }

                        </div>
                    </div>
                </div>
            </main>
    );
};

export default NewsBoard;


