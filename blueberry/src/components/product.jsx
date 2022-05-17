import './product.css'
import QuantityPicker from './quantityPicker';


// function Product () {
//     return (<div className='product'></div>);
// }
// the above function means the same as the arrow function below.
const Product = () => {
    return (<div className='product'>
                <img src={require().default} />
                <h2>Title</h2>
                <label className="price"> Price: $     </label>
                <label className="total"> Total: $     </label>
                <QuantityPicker></QuantityPicker>
                <button>Add</button>
                <button>Remove</button>

            </div>);

};


export default Product;