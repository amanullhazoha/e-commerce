import classes from '../css/products.module.css';
import ProductBar from './ProductBar';
import ProductsItem from './productItem';

const Products = ({ products, handelChange, selectProduct }) => (
    <section className={classes.products}>
        <ProductBar products={products} handelChange={handelChange} />
        <ProductsItem products={products} selectProduct={selectProduct} />
    </section>
);

export default Products;
