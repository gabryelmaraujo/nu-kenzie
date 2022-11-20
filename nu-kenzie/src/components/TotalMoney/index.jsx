import React from "react";

import "./totalMoney.css"


const TotalMoney = ({allMoney}) => {
  const totalValue = allMoney()
    
  return (
    <div className="totalBalanceDiv">
      <div className="totalBalanceHeader">
        <p className="totalBalanceText">Valor total:</p>
        <p className="totalBalance">R$ {totalValue}</p>
      </div>
      <p className="totalBalanceDesc">O valor se refere ao saldo</p>
    </div>
  );
};

export default TotalMoney;
