/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import classes from '../css/filter.module.css';

const Fileter = ({ handelFilter }) => {
    const filterValue = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
    console.log(filterValue);

    return (
        <section className={classes.filter}>
            <h3>Sizes:</h3>

            <div className={classes.filterItems}>
                <ul>
                    {filterValue.map((value) => (
                        <li key={value} onClick={() => handelFilter(value)}>
                            {value}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Fileter;
