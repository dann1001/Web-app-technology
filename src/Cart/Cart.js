import { useContext, useState } from "react/cjs/react.development";
import CartItem from "./CartItem";
import CartContext from "../store/Cart-Context";
import Modal from "../UI/Modal";
import Checkout from "./Checkout";
import classes from "./Cart.module.css";
import { Fragment } from "react";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [orderInputs, setOrderInputs] = useState(false);
  const [isSubmitting, setIsSubmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setOrderInputs(true);
  };

  const submitOrderHandler = async (data) => {
    setIsSubmiting(true);
    await fetch(
      "https://shopping-3c638-default-rtdb.europe-west1.firebasedatabase.app/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: data,
          orderedItems: ctx.items,
        }),
      }
    );
    setIsSubmiting(false);
    setDidSubmit(true);
    ctx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          image={item.image}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button onClick={props.onHide}>Close</button>
      <button className={classes.button} onClick={orderHandler}>
        Order
      </button>
    </div>
  );

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {orderInputs && (
        <Checkout onSend={submitOrderHandler} cancel={props.onHide} />
      )}
      {!orderInputs && modalActions}
    </Fragment>
  );

  const isSubmittingModalContent = (
    <p>Sending order data...(turn on your vpn to send)</p>
  );
  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order</p>
      <div className={classes.actions}>
        <button onClick={props.onHide}>Close</button>
      </div>
    </Fragment>
  );

  return (
    <Modal onHide={props.onHide}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
