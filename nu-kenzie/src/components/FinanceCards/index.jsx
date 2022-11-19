import React from "react";

import "./financeCards.css"

import itemDeleteImg from "../../images/trash.svg"



const EntryCard = ({financeInfos}) => {

  const {description, type, value} = financeInfos

  return (
    <li className="entrada" id="salario">
      <div className="itemDescDiv">
        <p className="itemName">{description}</p>
        <p className="itemType">Entrada</p>
      </div>
      <div className="itemValueDiv">
        <p className="itemValue">R$ {value}</p>
      </div>
      <div className="itemButtonsDiv">
        <button id="deleteItem">
          <img src={itemDeleteImg} alt="" className="deleteItemImg" />
        </button>
      </div>
    </li>
  );
};

const ExitCard = ({financeInfos}) => {

  const {description, type, value} = financeInfos

  return (
    <li className="saida" id="salario">
      <div className="itemDescDiv">
        <p className="itemName">{description}</p>
        <p className="itemType">Saída</p>
      </div>
      <div className="itemValueDiv">
        <p className="itemValue">R$ {value}</p>
      </div>
      <div className="itemButtonsDiv">
        <button id="deleteItem">
          <img src={itemDeleteImg} alt="" className="deleteItemImg" />
        </button>
      </div>
    </li>
  );
};

export { EntryCard, ExitCard }
