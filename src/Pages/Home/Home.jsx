import { useEffect, useState } from "react";
import Navbar from "../../Components/navbar/Navbar";
import Box from "../../Components/Box/Box";

export default function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://suqaljameuh-apis.up.railway.app/ads/get-all/?page=1')
            .then(res => res.json())
            .then(dataProducts => setData(dataProducts.data));
    }, [])

    return (
        <div className="products">
            {
                data.map((product) => {
                    console.log(product)
                    return (
                        <Box img={`https://suqaljameuh-apis.up.railway.app/categories-images/estateRent.png`} title={product.title} />
                    )
                })
            }
        </div>
    )
} 