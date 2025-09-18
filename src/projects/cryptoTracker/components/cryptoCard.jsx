import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export const CryptoCard = ({ dataItem }) => {
    const { id, symbol, name, image, current_price, market_cap, market_cap_rank, price_change_percentage_24h, total_volume } = dataItem;
    return (
        <>
            <div className="flex flex-row justify-center items-center  cursor-pointer
                shadow-2xl hover:shadow-md 
                transition-shadow duration-500 ease-in-out 
                rounded-2xl px-8 py-4 border border-neutral-300 my-6">
                <img className="w-10 h-10 me-4"
                    src={image} >
                </img>

                <div className="mr-20">
                    <h2 className="font-bold">{name}</h2>
                    <p className="text-3xs">${current_price}</p>
                    <p className="text-xs">Market Cap : ${market_cap}</p>
                </div>

                <div className="flex">
                    <p className={`text-2xs ${price_change_percentage_24h < 0 ? "text-red-700" : "text-green-500"}`}>
                        {price_change_percentage_24h}%
                    </p>
                    {price_change_percentage_24h < 0 ? (
                        <FaCaretDown className="ml-1 mt-1 text-red-700" />
                    ) : (
                        <FaCaretUp className="ml-1 mt-1 text-green-500" />
                    )}
                </div>
            </div>
        </>
    );

}