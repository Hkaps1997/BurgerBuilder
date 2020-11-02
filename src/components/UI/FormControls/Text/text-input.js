import React from "react";
import classes from './text-input.css'
const text = (props) => {
  return (
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
      <input className={classes.InputElement} type={props.type} {...props} />
    </div>
  );
};
export default text;