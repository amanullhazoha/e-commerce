import classes from '../css/productsItem.module.css';
import Item from './Item';

const ProductsItem = ({ products }) => (
    <section className={classes.productsItem}>
        <Item products={products} />
    </section>
);

export default ProductsItem;
