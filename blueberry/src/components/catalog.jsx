import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
import {useState, useEffect} from 'react';

const Catalog = () => {
    let [products, setProducts] = useState([]);

    const loadCatalog = () => {
        let service = new DataService(); // instance
        let data = service.getCatalog();
        setProducts(data); 
    };

    useEffect(() => {
        loadCatalog();

    });


    return (<div className="catalog">
        <h2>   Summer 2022 Blueberry offering   </h2>
        <h3>We have {products.length} products available!</h3>
        {products.map((prod) => (<Product key={prod._id} data={prod}></Product>))}
        
        {/* <Product title="Small Basket" price='10.00'></Product>
        <Product title="Medium Basket" price='20.00'></Product>
        <Product title="Large Basket" price='30.00'></Product>
        <Product title="Blueberry Jam" price='8.00'></Product>
        <Product title="Blueberry Gelato" price='13.00'></Product> */}
    </div>
    );
};

export default Catalog;
