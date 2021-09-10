import classes from '../css/addButton.module.css';
import Button from './Button';

const AddButton = ({ selected, openModel }) => (
    <Button type="button" className={classes.addButton} onClick={openModel}>
        <i className="fas fa-shopping-cart" />
        <div className={classes.count}>{selected.length}</div>
    </Button>
);

export default AddButton;
