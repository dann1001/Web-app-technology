import { Fragment } from "react";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Fragment>
      <h5 className={classes.warning}>Not found anything</h5>
    </Fragment>
  );
};

export default NotFound;
