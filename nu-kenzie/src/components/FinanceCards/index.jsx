import React from "react";

import "./financeCards.css"

import itemDeleteImg from "../../images/trash.svg"



const EntryCard = () => {
  return (
    <li className="entrada" id="salario">
      <div className="itemDescDiv">
        <p className="itemName">Salário - Mês Dezembro</p>
        <p className="itemType">Entrada</p>
      </div>
      <div className="itemValueDiv">
        <p className="itemValue">R$ 6.660,00</p>
      </div>
      <div className="itemButtonsDiv">
        <button id="deleteItem">
          <img src={itemDeleteImg} alt="" className="deleteItemImg" />
        </button>
      </div>
    </li>
  );
};

const ExitCard = () => {
  return (
    <li className="saida" id="salario">
      <div className="itemDescDiv">
        <p className="itemName">Salário - Mês Dezembro</p>
        <p className="itemType">Entrada</p>
      </div>
      <div className="itemValueDiv">
        <p className="itemValue">R$ 6.660,00</p>
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
