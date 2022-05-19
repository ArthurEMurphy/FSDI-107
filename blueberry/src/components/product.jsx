import './product.css'
import QuantityPicker from './quantityPicker';


// function Product () {
//     return (<div className='product'></div>);
// }
// the above function means the same as the arrow function below.
const Product = (props) => {
    // console.log('the parameter value is: '+String(props.title));

    return (<div className='product'>
                <img src={'/img/'+props.data.image} />
                <h2>{props.data.title}</h2>
                <label > Price: ${props.data.price}</label>
                <label > Total: $     </label>
                <QuantityPicker></QuantityPicker>
                <button>Add</button>
                
            </div>);

};


export default Product;