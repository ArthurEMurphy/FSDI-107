import './product.css'
import QuantityPicker from './quantityPicker';
import { useState } from 'react';

// function Product () {
//     return (<div className='product'></div>);
// }
// the above function means the same as the arrow function below.
const Product = (props) => {// console.log('the parameter value is: '+String(props.title));
    let [quantity, setQuantity] = useState(1);
    

    let onQuantityChange = (value) => {
        //use the value to update the quantity
        setQuantity(value);
    };

    const getTotal = () => {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    };
    //add a function to return the total...total = price*quantity
    
    return (<div className='product'>
            <img className='productImg' src={'/img/'+props.data.image} />
            <h4>{props.data.title}</h4>
            <label > Price: ${props.data.price}</label>
            <label > Total: ${getTotal()}</label>
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button className="btn btn-outline-success btn-sm
">Add</button>    
            </div>);
};

export default Product;