import './product.css'
import QuantityPicker from './quantityPicker';

// function Product () {
//     return (<div className='product'></div>);
// }
// the above function means the same as the arrow function below.
const Product = () => {
    return (<div className='product'>
                <img src="C:\Users\murph\Documents\Sync\SDGKU\FSDI 107\FSDI-107\blueberry\public\img\small_basket.jpg"></img>
                <h2>Title</h2>
                <label className="price"> Price: $     </label>
                <label className="total"> Total: $     </label>
                <QuantityPicker></QuantityPicker>
                <button>Add</button>
                <button>Remove</button>

            </div>);

};


export default Product;