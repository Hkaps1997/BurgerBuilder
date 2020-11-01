import React from "react";
import classes from "./Order.css";
const order = (props) => {
    console.log(props)
  return (
    <div className={classes.OrderContainer}>
      <p>
        Ingredients:{" "}
        {Object.keys(props.ingredients).map((key,index) => (
          <span key={index} className={classes.IngredientsContainer}>
            {key}({props.ingredients[key]})
          </span>
        ))}
      </p>
      <p>
        Price:<strong>{props.price}</strong>
      </p>
    </div>
  );
};
export default order;
