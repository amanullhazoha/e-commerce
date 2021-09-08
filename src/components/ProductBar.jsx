import classes from '../css/productBar.module.css';

const ProductBar = () => (
    <div className={classes.productBar}>
        <p>16 Products found.</p>
        <div className={classes.orderBy}>
            <h3>Order by</h3>
            <select>
                <option value="select">Select</option>
                <option value="select">Lowest to highest</option>
                <option value="select">Highest to lowest</option>
            </select>
        </div>
    </div>
);

export default ProductBar;
