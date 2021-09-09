import classes from '../css/products.module.css';
import ProductBar from './ProductBar';
import ProductsItem from './productItem';

const Products = ({ products, handelChange }) => (
    <section className={classes.products}>
        <ProductBar products={products} handelChange={handelChange} />
        <ProductsItem products={products} />
    </section>
);

export default Products;
