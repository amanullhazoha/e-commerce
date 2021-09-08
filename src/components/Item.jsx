import classes from '../css/item.module.css';
import Button from './Button';

const Item = ({ products }) =>
    products.map((product) => (
        <div className={classes.item}>
            <p className={classes.imgTag}>Free shipping</p>
            <img src={`img/${product.img}`} alt="Dress" className="img-fluid" />
            <div className={classes.name}>
                <p>{product.productName}</p>
            </div>
            <div className={classes.price}>
                <p>
                    <span>$</span>
                    {product.priceDollar}
                    <span>{product.priceCent}</span>
                </p>
            </div>
            <div className={classes.installment}>
                <span>or {product.pis} x</span>
                <b> ${product.installment}</b>
            </div>

            <div className={classes.addCart}>
                <Button type="button" text="Add to Cart" />
            </div>
        </div>
    ));

export default Item;
