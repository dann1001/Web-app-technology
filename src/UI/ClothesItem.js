import { useContext } from "react";
import CartContext from "../store/Cart-Context";
import classes from "./ClothesItem.module.css";
import Form from "./Form";

const ClothesItem = (props) => {
  const ctx = useContext(CartContext);
  const price = +props.price;
  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.key,
      name: props.name,
      price: price,
      image: props.image,
      amount: amount,
    });
  };

  return (
    <li className={classes["carts-holder"]} key={props.id}>
      <div className={classes["img-holder"]}>
        <img className={classes["cart-img"]} src={props.image} alt="clothes" />
      </div>
      <p className={classes.title}>{props.name}</p>
      <p className={classes.price}>{props.price}$</p>
      <Form onAddToCart={addToCartHandler} />
    </li>
  );
};

export default ClothesItem;
