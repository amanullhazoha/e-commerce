import classes from '../css/productsItem.module.css';
import Item from './Item';

const ProductsItem = ({ products, selectProduct }) => (
    <section className={classes.productsItem}>
        <Item products={products} selectProduct={selectProduct} />
    </section>
);

export default ProductsItem;
