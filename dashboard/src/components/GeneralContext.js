import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";


const GeneralContext = React.createContext({
  openBuyWindow: (uid,mode) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [selectedMode,setMode]=useState("");
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid,mode) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setMode(mode);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setMode("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} mode={selectedMode} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
