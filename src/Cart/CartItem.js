import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
        <span className={classes.price}>{price}</span>
      </div>
      <div className={classes["img-cart-holder"]}>
        <img src={props.image} alt="added-item" />
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
