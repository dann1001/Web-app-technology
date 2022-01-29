import { Fragment } from "react";
import AvailableBags from "../UI/AvailableBags";
import Choices from "../UI/Choices";
import Options from "../UI/Options";
import classes from "./Pages.module.css";

const BagsPage = () => {
  return (
    <Fragment>
      <Options />
      <h4 className={classes.h4}>Bags</h4>
      <Choices />
      <AvailableBags />
    </Fragment>
  );
};
export default BagsPage;
