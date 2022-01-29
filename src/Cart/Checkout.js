import { useRef } from "react";
import { useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const street = streetRef.current.value;
    const city = cityRef.current.value;

    const enteredNameIsValid = !isEmpty(name);
    const enteredStreetIsValid = !isEmpty(street);
    const enteredCityIsValid = !isEmpty(city);

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid;
    if (!formIsValid) {
      return;
    }
    props.onSend({
      name: name,
      street: street,
      city: city,
    });
  };

  const nameControler = `${classes.control} ${
    formValidity.name ? "" : classes.invalid
  }`;
  const streetControler = `${classes.control} ${
    formValidity.name ? "" : classes.invalid
  }`;
  const cityControler = `${classes.control} ${
    formValidity.name ? "" : classes.invalid
  }`;
  return (
    <form className={classes.form}>
      <div className={nameControler}>
        <labell htmlFor="name">Name</labell>
        <input type="text" id="name" ref={nameRef} />
        {!formValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControler}>
        <labell htmlFor="street">Street</labell>
        <input type="text" id="street" ref={streetRef} />
        {!formValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={cityControler}>
        <labell htmlFor="city">City</labell>
        <input type="text" id="city" ref={cityRef} />
        {!formValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.cancel}>
          Cancel
        </button>
        <button className={classes.submit} onClick={submitHandler}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
