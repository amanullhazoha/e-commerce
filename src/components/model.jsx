import React, { Component } from 'react';
import classes from '../css/model.module.css';
import Button from './Button';

class Model extends Component {
    state = {
        count: 1,
    };

    handelDecrement = (value) => {
        const { count } = this.state;
        console.log(value);

        if (count > 0) {
            this.setState((prevState) => ({
                count: prevState.count - 1,
            }));
        }
    };

    handelIncrement = (value) => {
        console.log(value);
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    setValue = () => {
        const { selected } = this.props;
        console.log(selected);
    };

    render() {
        const { count } = this.state;
        const { selected, isOpen, closeModel } = this.props;
        console.log(selected);
        return (
            <div className={classes.modelBody} style={{ display: isOpen ? 'block' : 'none' }}>
                <div className={classes.model}>
                    <Button
                        type="button"
                        text="X"
                        className={classes.closeButton}
                        onClick={closeModel}
                    />

                    <h1>Total Product And Amount</h1>
                    <div className={classes.content}>
                        {selected.map((item) => (
                            <div className={classes.addItem} key={item.id}>
                                <div className={classes.img}>
                                    <img
                                        src={`img/${item.img}`}
                                        alt="T-Shirt"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className={classes.title}>
                                    <p>{item.productName}</p>
                                    <div className={classes.countBtn}>
                                        <Button
                                            text="-"
                                            type="button"
                                            onClick={() => this.handelDecrement(item)}
                                        />
                                        <p>{count}</p>
                                        <Button
                                            text="+"
                                            type="button"
                                            onClick={() => this.handelIncrement(item)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className={classes.total}>Totol Amount: 1000</p>
                    <Button text="Payment" type="button" className={classes.payment} />
                </div>
            </div>
        );
    }
}

export default Model;
