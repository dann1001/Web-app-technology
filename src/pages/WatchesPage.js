import { Fragment } from "react";
import AvailableWatches from "../UI/AvailableWatch";
import Choices from "../UI/Choices";
import Options from "../UI/Options";
import classes from "./Pages.module.css";

const WatchesPage = () => {
  return (
    <Fragment>
      <Options />
      <h4 className={classes.h4}>Watches</h4>
      <Choices />
      <AvailableWatches />
    </Fragment>
  );
};
export default WatchesPage;
