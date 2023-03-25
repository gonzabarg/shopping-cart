import React from "react";
import { useParams } from "react-router";

const Product = () => {

    let params = useParams();
    console.log(params.id);

    return (
        <>
            <div>
                PRODUCTO
            </div>
        </>
    )
}

export default Product;