import "./catalog.css";
import Product from "./product";

const Catalog = () => {
    return (<div className="catalog">
        <h2>|   Our current blueberry offering   |</h2>
        <Product title="Small Basket" price='10.00'></Product>
        <Product title="Medium Basket" price='20.00'></Product>
        <Product title="Large Basket" price='30.00'></Product>
        <Product title="Blueberry Jam" price='8.00'></Product>
        <Product title="Quart - Blueberry Gelato" price='13.00'></Product>

    </div>
    );
};

export default Catalog;
