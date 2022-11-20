
import React from "react";

import "./listsHeader.css"

const ListsHeader = ({ listTransactions }) => {

  const allFinances = listTransactions

  console.log(allFinances)

  return (
    <div className="dbListHeader">
      <p className="dbListHeaderText">Resumo financeiro</p>
      <div className="listButtons">
        <button id="filterAll">Todos</button>
        <button id="filterEntry">Entradas</button>
        <button id="filterExit">Despesas</button>
      </div>
    </div>
  );
};

export default ListsHeader;
