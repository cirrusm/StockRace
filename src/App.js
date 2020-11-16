import logo from './logo.svg';
import StockRow from './components/StockRow'



function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-md-5 mt-5">
          <div className="card">
            
              <ul className="list-group list-group-flush">
                <StockRow ticker='aapl'/>
                <StockRow ticker ='msft' />
                <StockRow ticker= 'nio' />
                <StockRow ticker ='tsla' />
              </ul>
            
          </div>
        </div>
        {/* <table className="table mt-5">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <StockRow ticker="aapl" />
            <StockRow ticker="goog" />
            <StockRow ticker="msft" />
            <StockRow ticker="tsla" />
          </tbody>
        </table> */}
        
      </div>
    </div>
  );
}

export default App;
