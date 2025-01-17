import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
    });

    const navigate = useNavigate();
    const { id } = useParams(); // To determine if editing an existing product

    useEffect(() => {
        if (id) {
            // Fetch product details for editing
            axios.get(`/api/products/${id}`).then((response) => {
                setProduct(response.data);
            });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (id) {
            // Update existing product
            axios.put(`/api/products/${id}`, product).then(() => {
                alert("Product updated successfully!");
                navigate("/");
            });
        } else {
            // Add a new product
            axios.post("/api/products", product).then(() => {
                alert("Product added successfully!");
                navigate("/");
            });
        }
    };

    return (
        <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
            <h1>{id ? "Edit Product" : "Add Product"}</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    ></textarea>
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#007bff",
                        color: "#fff",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        width: "100%",
                    }}
                >
                    {id ? "Update Product" : "Add Product"}
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
