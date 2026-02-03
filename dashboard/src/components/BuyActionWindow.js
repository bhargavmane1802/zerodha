import React, { useState ,useEffect,useContext} from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid ,mode}) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(0);
  const [currPrice,setCurrPrice]=useState(0.0);
  const [stockPrice, setStockPrice] = useState(currPrice);
  const [selectedMode,setMode]=useState("");

  useEffect(() => {
      axios.get(`http://localhost:3002/order/${uid}`).then((res) => {
        setMode(mode);
        const price = res.data[0].price;
        setCurrPrice(price);
      });
    }, []);
  const handleBuyClick = async () => {
    try{
      axios.post("http://localhost:3002/buyorder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number (stockPrice),
        mode: String(selectedMode),
      }).then(()=>{
      console.log("done");
    })
    }
    catch(e){
      console.log("unable to send");
    }
    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => {
                setStockQuantity(e.target.value);
                setStockPrice(e.target.value * currPrice);
              }}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => {
                setStockPrice(e.target.value);
                setStockQuantity(e.target.value/currPrice);
              }}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
