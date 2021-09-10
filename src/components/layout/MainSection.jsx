import React, { Component } from 'react';
import classes from '../../css/mainSection.module.css';
import DATA from '../../data/data';
import FILTERVALUE from '../../data/filterValue';
import AddButton from '../addButton';
import Fileter from '../Filter';
import Model from '../model';
import Products from '../Products';

class MainSection extends Component {
    state = {
        products: [],
        filterValue: [],
        filter: [],
        priceSearchTrem: 'select',
        selelcted: [],
        isOpen: false,
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

    selectProduct = (selectProduct) => {
        const { selelcted } = this.state;

        if (selelcted.length > 0) {
            const boolen = selelcted.map((item) => item.id === selectProduct.id);
            const [bool] = boolen;
            console.log(bool);

            if (bool) {
                this.setState((prevState) => ({
                    selelcted: prevState.selelcted,
                }));
            } else {
                const updateSelected = [selectProduct, ...selelcted];

                this.setState({
                    selelcted: updateSelected,
                });
            }
        } else {
            const updateSelected = [selectProduct, ...selelcted];

            this.setState({
                selelcted: updateSelected,
            });
        }
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

    openModel = () => {
        this.setState({
            isOpen: true,
        });
    };

    closeModel = () => {
        this.setState({
            isOpen: false,
        });
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
            return (
                <Products
                    products={pricefil}
                    handelChange={this.handelChange}
                    selectProduct={this.selectProduct}
                />
            );
        }
        const pricefilProd = this.priceSearch(products);
        return (
            <Products
                products={pricefilProd}
                handelChange={this.handelChange}
                selectProduct={this.selectProduct}
            />
        );
    };

    render() {
        const { filterValue, selelcted, isOpen } = this.state;

        return (
            <>
                <div className={classes.mainSection}>
                    <Fileter filterValue={filterValue} handelFilter={this.handelFilter} />

                    {this.searchPerfom()}

                    {/* <Products products={products} /> */}
                    <AddButton selected={selelcted} openModel={this.openModel} />
                    <Model selected={selelcted} isOpen={isOpen} closeModel={this.closeModel} />
                </div>
            </>
        );
    }
}

export default MainSection;
