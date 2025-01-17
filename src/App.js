import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/add" element={<ProductForm />} />
                <Route path="/edit/:id" element={<ProductForm />} />
            </Routes>
        </Router>
    );
};

export default App;
