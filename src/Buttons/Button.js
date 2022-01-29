import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${classes.button + ""} ${props.className}`}>
      SHOP NOW
    </button>
  );
};

export default Button;
