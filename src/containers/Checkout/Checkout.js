import React, { Component } from "react";
import { Route } from "react-router";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
class Checkout extends Component {
  state = {
    ingrdients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
    finalPrice: -1,
  };
  componentWillMount() {
    const queryParams = new URLSearchParams(this.props.history.location.search);
    const ingredientsFromParams = {};
    let finalPrice = -1;
    for (let entry of queryParams.entries()) {
      if (entry[0] === "price") {
        this.setState({ finalPrice: entry[1] });
      } else {
        ingredientsFromParams[entry[0]] = +entry[1];
      }
    }
    this.setState({ ingrdients: ingredientsFromParams });
  }
  chkCanceledHandler = () => {
    this.props.history.goBack();
  };
  chkContinueHandler = () => {
    this.props.history.replace("checkout/contact-data");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingrdients}
          chkCancel={this.chkCanceledHandler}
          chkContinue={this.chkContinueHandler}
        ></CheckoutSummary>
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingrdients}
              finalPrice={this.state.finalPrice}
              {...props}
            ></ContactData>
          )}
        ></Route>
      </div>
    );
  }
}

export default Checkout;
