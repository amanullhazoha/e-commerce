import React, { Component } from 'react';
import classes from '../../css/mainSection.module.css';
import DATA from '../../data/data';
import AddButton from '../addButton';
import Fileter from '../Filter';
import Products from '../Products';

class MainSection extends Component {
    state = {
        products: [],
    };

    componentDidMount() {
        this.setState({
            products: DATA,
        });
    }

    render() {
        const { products } = this.state;
        return (
            <div className={classes.mainSection}>
                <Fileter />
                <Products products={products} />
                <AddButton />
            </div>
        );
    }
}

export default MainSection;
