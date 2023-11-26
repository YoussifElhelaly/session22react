import { useParams } from "react-router-dom";
import Box from "../../Components/Box/Box";
import { useEffect, useState } from "react";

export default function Category() {
    const params = useParams()

    console.log(params.CategoryName)

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${params.CategoryName}`)
            .then(res => res.json())
            .then(dataProducts => setData(dataProducts.products));
    }, [params])

    console.log(data)

    return (
        <div className="products">
            {
                data.map((product) => {
                    return (
                        <Box img={product.thumbnail} title={product.title} />
                    )
                })
            }
        </div>
    )
}