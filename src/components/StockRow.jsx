import React, { Component } from "react";
import { iex } from "../config/iex";
import { stock } from "../resources/stock";

const changeStyle = {
  color: "#4caf50",
  fontSize: "0.8rem",
  marginLeft: 5,
};

class StockRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  applyData(data) {
    this.setState({
      data: data,
    });
  }

  componentDidMount() {
    //QUERY THE API
    stock.latestPrice(this.props.ticker, this.applyData.bind(this));
  }

  render() {
    return (
      <>
        <li className="list-group-item">
          <b>{this.props.ticker} </b> {this.state.data.price}
          <span className="change" style={changeStyle}>
            +12.34 (5.2%)
          </span>
        </li>
      </>
    );
  }
}

export default StockRow;
