
export const CryptoCard = () => {

    return (
        <>
            <div className="flex flex-row justify-center items-center shadow-neutral-400 shadow-xl rounded-2xl px-8 py-4 border-1 border-neutral-300">
                <img className="w-10 h-10 me-4"
                    src='https://assets.coingecko.com/coins/images/325/large/Tether-logo.png' >
                </img>

                <div className="mr-20">
                    <h2 className="font-bold">Bitcoin</h2>
                    <p className="text-3xs">$67,000</p>
                    <p className="text-xs">Market Cap : $1.3T</p>
                </div>

                <div>
                    <p className="text-2xs">+2.5%</p>
                </div>
            </div>
        </>
    );

}