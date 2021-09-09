/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import classes from '../css/filter.module.css';

const Fileter = ({ filterValue, handelFilter }) => (
    <section className={classes.filter}>
        <h3>Sizes:</h3>

        <div className={classes.filterItems}>
            <ul>
                {filterValue.map((value) => (
                    <li
                        key={value.value}
                        className={value.status ? classes.active : ''}
                        onClick={() => handelFilter(value)}
                    >
                        {value.value}
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Fileter;
