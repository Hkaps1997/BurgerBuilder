import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import instance from "../../../axios-orders";
class ContactData extends Component {
  state = {
    customer: {
      name: "Harshit",
      email: "test@test.com",
      address: {
        country: "India",
        street: "Patel Road",
        zipCode: 110006,
      },
    },
    loading: false,
  };
  sendOrderHandler = (event) => {
    event.preventDefault();
    const reqObj = {
      customer: this.state.customer,
      ingredients: this.props.ingredients,
      price: this.props.finalPrice,
      deliveryMethod: "fast",
    };
    this.setState({ loading: true });
    instance
      .post("/orders.json", reqObj)
      .then((resp) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log("Error!!!");
      });
  };
  render() {
    const formTag =
      this.state.loading === false ? (
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className={classes.Input}
            type="text"
            name="country"
            placeholder="Country"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={classes.Input}
            type="number"
            name="zipCode"
            placeholder="ZipCode"
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <Button btnType="Success" clicked={this.sendOrderHandler}>
            ORDER
          </Button>
        </form>
      ) : (
        <p>Loading...</p>
      );
    return (
      <div className={classes.OrderContainer}>
        <h3>Enter Your Details</h3>
        {formTag}
        <Button btnType="Danger">CANCEL</Button>
      </div>
    );
  }
}

export default ContactData;
