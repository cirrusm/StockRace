import { iex } from "../config/iex";

export const stock = {
  latestPrice: (ticker, callback) => {
    fetch(stock.latestPriceUrl(ticker))
      .then((response) => response.json())
      .then((data) => callback(stock.formatPriceData(data)));
  },

  latestPriceUrl: (ticker) => {
    return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`;
  },

  //FORMATTER THAT MAKES SWITCHING BETWEEN DIFFERENT STOCK APIS EASY
  formatPriceData: (data) => {
    const stockData = data[data.length - 1];
    const formattedData = {};
    formattedData.price = stockData.close;
    formattedData.date = stockData.date;
    formattedData.time = stockData.label;
    return formattedData;
  },

  getYesterdaysClose: (ticker, date, callback) => {
    fetch(stock.yesterdaysCloseUrl(ticker, date))
      .then((response) => response.json())
      .then((data) => callback(stock.formatPriceData(data)));
  },

  yesterdaysCloseUrl: (ticker, date) => {
    return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&exactDate=20201112&token=${iex.api_token}`;
  },
};
