import React from "react";
import classes from './number.css'
const text = (props) => {
  return (
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
      <input className={classes.InputElement} type="number" {...props} />
    </div>
  );
};
export default text;