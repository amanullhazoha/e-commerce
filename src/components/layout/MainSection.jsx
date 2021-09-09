import React, { Component } from 'react';
import classes from '../../css/mainSection.module.css';
import DATA from '../../data/data';
import FILTERVALUE from '../../data/filterValue';
import AddButton from '../addButton';
import Fileter from '../Filter';
import Products from '../Products';

class MainSection extends Component {
    state = {
        products: [],
        filterValue: [],
        filter: [],
        priceSearchTrem: 'select',
    };

    componentDidMount() {
        this.setState({
            products: DATA,
            filterValue: FILTERVALUE,
        });
    }

    handelChange = (value) => {
        this.setState({
            priceSearchTrem: value,
        });
    };

    handelFilter = (value) => {
        const { products, filter, filterValue } = this.state;

        const filterArr = products.filter((product) => product.size === value.value);

        const filterUpdate = () => {
            if (value.status) {
                return filterArr.concat(filter);
            }
            const mainFilter = filter.filter((e) => !filterArr.includes(e));

            return mainFilter;
        };

        const filterVal = [...filterValue];
        const filterValueFind = filterVal.find((item) => item.value === value.value);

        filterValueFind.status = !filterValueFind.status;

        this.setState(() => ({
            filter: filterUpdate(),
            filterValue: filterVal,
        }));
    };

    priceSearch = (products) => {
        const { priceSearchTrem } = this.state;

        const byPrice = products.slice(0);

        if (priceSearchTrem === 'lowest') {
            return byPrice.sort(
                (a, b) => a.priceDollar + a.priceCent - (b.priceDollar + b.priceCent)
            );
        }
        if (priceSearchTrem === 'highest') {
            return byPrice.sort(
                (a, b) => b.priceDollar + b.priceCent - (a.priceDollar + a.priceCent)
            );
        }

        return products;
    };

    searchPerfom = () => {
        const { filter, products } = this.state;

        if (filter.length > 0) {
            const pricefil = this.priceSearch(filter);
            return <Products products={pricefil} handelChange={this.handelChange} />;
        }
        const pricefilProd = this.priceSearch(products);
        return <Products products={pricefilProd} handelChange={this.handelChange} />;
    };

    render() {
        const { filterValue, filter } = this.state;
        console.log(filter);
        this.searchPerfom();

        return (
            <div className={classes.mainSection}>
                <Fileter filterValue={filterValue} handelFilter={this.handelFilter} />

                {this.searchPerfom()}

                {/* <Products products={products} /> */}
                <AddButton />
            </div>
        );
    }
}

export default MainSection;
