import classes from "./Loading.module.css";
const Loading = (props) => {
  return (
    <div className={`${classes.ring + ""} ${props.className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
