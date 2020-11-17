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
      price: null,
      date: null,
      time: null,
      dollar_change: 0,
      percent_change: 0,
    };
  }

  applyData(data) {
    this.setState({
      price: `$${data.price}`,
      date: data.date,
      time: data.time,
    });
    stock.getYesterdaysClose(this.props.ticker, data.date, (yesterday) => {
      console.log(this.props.ticker, yesterday);
      const dollar_change = (data.price - yesterday.price).toFixed(1)
      const percent_change = ((dollar_change / yesterday.price) * 100).toFixed(1)

      this.setState({
        dollar_change: `$${dollar_change}`,
        percent_change: `(${percent_change})`

      });
      console.log(data);
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
          <b>{this.props.ticker} </b> {this.state.price}
          <span className="change" style={changeStyle}>
            <span className="mr-2 ml-4">{this.state.dollar_change}</span>
            <span>{this.state.percent_change}%</span>
          
          </span>
        </li>
      </>
    );
  }
}

export default StockRow;
