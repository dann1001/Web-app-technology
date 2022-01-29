import classes from "./Choices.module.css";
import { Fragment } from "react";

const Choices = (props) => {
  return (
    <Fragment>
      <div className={classes.choices}>
        <button className={classes["choice-button"]}>Best Products</button>
        <button className={classes["choice-button"]}>Lowest Price</button>
        <button className={classes["choice-button"]}>Highest Price</button>
      </div>
    </Fragment>
  );
};

export default Choices;
