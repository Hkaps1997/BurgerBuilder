import React, { Component } from "react";
import Order from "../../components/Order/Order";
import instance from "../../axios-orders";

class Orders extends Component {
  state = {
    orders: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    instance
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push(res.data[key]);
        }
        this.setState({ orders: fetchedOrders });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.length > 0
          ? this.state.orders.map((order, index) => (
              <Order
                key={index}
                ingredients={order.ingredients}
                price={order.price}
              ></Order>
            ))
          : null}
      </div>
    );
  }
}

export default Orders;
