import { useContext, useEffect, useState } from "react";
import CartContext from "../store/Cart-Context";
import classes from "./CartButton.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;
  const numbersOfItems = ctx.items.length;
  const btnClasses = `${classes.cartbutton} ${
    buttonIsHighlighted ? classes.bumps : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShow}>
      <AiOutlineShoppingCart className={classes.icon} /> <span>Cart - </span>
      <span>{numbersOfItems}</span>
    </button>
  );
};

export default CartButton;
