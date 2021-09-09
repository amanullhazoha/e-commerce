/* eslint-disable jsx-a11y/no-onchange */
import classes from '../css/productBar.module.css';

const ProductBar = ({ products, handelChange }) => (
    <div className={classes.productBar}>
        <p>{products.length} Products found.</p>
        <div className={classes.orderBy}>
            <h3>Order by</h3>
            <select onChange={(e) => handelChange(e.target.value)}>
                <option value="select">Select</option>
                <option value="lowest">Lowest to highest</option>
                <option value="highest">Highest to lowest</option>
            </select>
        </div>
    </div>
);

export default ProductBar;
