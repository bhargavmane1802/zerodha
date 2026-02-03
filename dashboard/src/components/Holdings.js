import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { VerticalGraph } from "./VerticalGraph";
const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [totalInvestment,setTotalInvestment]=useState(0);
  const[currValue,setCurrValue]= useState(0);
  const [currReturn,setCurrReturn]=useState(0);
  const [color,setColor]=useState("green");
  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data.data);
      setCurrValue(res.data.return);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);
  
  useEffect(() => {
  const total = allHoldings.reduce(
    (sum, s) => sum + s.price * s.qty,
    0
  );
  setTotalInvestment(total);
}, [allHoldings]);

useEffect(() => {
  setCurrReturn(currValue - totalInvestment);
  if(currReturn>=0){
    setColor("green");
  }
  else{
    setColor("red");
  }
}, [currValue, totalInvestment]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };


  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {Math.ceil(totalInvestment * 100) / 100}<span>{allHoldings.length}</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currValue}<span></span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col"> 
          <h5 style={{color:"red"}}>{Math.ceil(currReturn * 100) / 100} {Math.ceil(((currReturn/totalInvestment)*100) * 100) / 100} %</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
