import { useEffect, useState } from "react"
import { CryptoCard } from "./cryptoCard";
import { HiRefresh } from "react-icons/hi";


export const CryptoScreen = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const url = 'https://api.npoint.io/3a673f3c7ef1ceab4b67';

    const fetchCryptoData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCryptoData(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(true);
        }
    }

    useEffect(() => {
        fetchCryptoData();
    }, []);


    if (loading) {

        return (
            <>
                <section className="flex">
                    <h1>Crypto Currency List</h1>

                </section>
                <h3 className="text-center">Loading ..... </h3>
            </>
        )

    };
    return (

        <>
            <section className="flex">
                <h1>Crypto Currency List</h1>
                <HiRefresh
                    size={28} // increase size (default is 20)
                    className="ml-5 cursor-pointer hover:rotate-180 transition-transform duration-500"
                    onClick={fetchCryptoData}
                />            </section>
            <section>
                {
                    cryptoData.map((cryptoDataItem) => <CryptoCard key={cryptoDataItem.id} dataItem={cryptoDataItem} />)
                }
            </section>

        </>

    );
}