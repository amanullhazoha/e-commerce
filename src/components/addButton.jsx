import classes from '../css/addButton.module.css';
import Button from './Button';

const AddButton = () => (
    <Button type="button" className={classes.addButton}>
        <i className="fas fa-shopping-cart" />
        <div className={classes.count}>10</div>
    </Button>
);

export default AddButton;
