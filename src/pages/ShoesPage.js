import { Fragment } from "react";
import AvailableShoes from "../UI/AvailableShoes";
import Choices from "../UI/Choices";
import Options from "../UI/Options";
import classes from "./Pages.module.css";

const ShoesPage = () => {
  return (
    <Fragment>
      <Options />
      <h4 className={classes.h4}>Shoes</h4>
      <Choices />
      <AvailableShoes />
    </Fragment>
  );
};
export default ShoesPage;
