import './product.css'
import QuantityPicker from './quantityPicker';


// function Product () {
//     return (<div className='product'></div>);
// }
// the above function means the same as the arrow function below.
const Product = (props) => {
    console.log('the parameter value is: '+String(props.title));

    return (<div className='product'>
                <img src="" />
                <h2>{props.title}</h2>
                <label className="price"> Price: ${props.price}</label>
                <label className="total"> Total: $     </label>
                <QuantityPicker></QuantityPicker>
                <button>Add</button>
                
            </div>);

};


export default Product;