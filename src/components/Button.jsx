/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
const Button = ({ type, text, children, ...rest }) => (
    <button type={type} {...rest}>
        {children}
        {text}
    </button>
);

export default Button;
