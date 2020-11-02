import React from "react";
import classes from './text-area.css'
const text = (props) => {
  return (
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
      <textarea className={classes.InputElement} {...props} />
    </div>
  );
};
export default text;