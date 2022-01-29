import { IoBriefcaseOutline } from "react-icons/io5";
import classes from "./Options.module.css";

const Options = () => {
  return (
    <span className={classes.options}>
      <h6>WE LOVE TREND</h6>
      <div className={classes.seprator}>
        <IoBriefcaseOutline className={classes.line}></IoBriefcaseOutline>
        <p className={classes.underline}></p>
      </div>
    </span>
  );
};

export default Options;
