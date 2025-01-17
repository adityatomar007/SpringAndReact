import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("/api/products").then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
            <h1>Product List</h1>
            <Link
                to="/add"
                style={{
                    display: "inline-block",
                    marginBottom: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "5px",
                }}
            >
                Add Product
            </Link>
            <ul>
                {products.map((product) => (
                    <li key={product.id} style={{ marginBottom: "10px" }}>
                        <strong>{product.name}</strong> - ${product.price} <br />
                        <Link
                            to={`/edit/${product.id}`}
                            style={{
                                color: "#007bff",
                                textDecoration: "none",
                                marginRight: "10px",
                            }}
                        >
                            Edit
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
