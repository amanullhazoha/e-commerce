import classes from '../css/products.module.css';
import ProductBar from './ProductBar';
import ProductsItem from './productItem';

const Products = ({ products }) => (
    <section className={classes.products}>
        <ProductBar />
        <ProductsItem products={products} />
    </section>
);

export default Products;
