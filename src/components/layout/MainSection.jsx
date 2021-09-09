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
    };

    componentDidMount() {
        this.setState({
            products: DATA,
            filterValue: FILTERVALUE,
        });
    }

    handelChange = (value) => {
        console.log(value);
    };

    handelFilter = (value) => {
        const { products, filter, filterValue } = this.state;
        const filterArr = products.filter((product) => product.size === value.value);

        // const filterUpdate = filterArr.concat(filter);

        const filterUpdate = () => {
            if (value.status) {
                return filterArr.concat(filter);
            }
            const mainFilter = filter.filter((e) => !filterArr.includes(e));

            return mainFilter;
        };

        // const val = filter.map((item) => item.id) === filterArr.map((item) => item.id);
        // console.log(val);

        const filterVal = [...filterValue];
        const filterValueFind = filterVal.find((item) => item.value === value.value);

        filterValueFind.status = !filterValueFind.status;

        this.setState(() => ({
            filter: filterUpdate(),
            filterValue: filterVal,
        }));
    };

    searchPerfom = () => {
        const { filter, products } = this.state;
        if (filter.length > 0) {
            return <Products products={filter} handelChange={this.handelChange} />;
        }
        return <Products products={products} handelChange={this.handelChange} />;
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
