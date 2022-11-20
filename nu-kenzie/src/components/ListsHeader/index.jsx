
import React, { useState } from "react";

import "./listsHeader.css"

const ListsHeader = ({ listTransactions, setListTransactions }) => {

  function allFinances(){

    const financesList = listTransactions.filter((finances)=> {
      finances.visible = true

      return finances
    })

    setListTransactions(financesList)
  }

  function filterEntry(){

    const filteredList = listTransactions.filter((finance)=>{

      if(finance.type === "entrada"){
        finance.visible = true
      }else{
        finance.visible = false
      }

      return finance

    })
    
    setListTransactions(filteredList)
  }

  function filterExit(){

    const filteredList = listTransactions.filter((finance)=>{

      if(finance.type === "saida"){
        finance.visible = true
      }else{
        finance.visible = false
      }

      return finance

    })
    
    setListTransactions(filteredList)

  }

  return (
    <div className="dbListHeader">
      <p className="dbListHeaderText">Resumo financeiro</p>
      <div className="listButtons">
        <button id="filterAll" onClick={()=>allFinances()}>Todos</button>
        <button id="filterEntry" onClick={()=>filterEntry()}>Entradas</button>
        <button id="filterExit" onClick={()=>filterExit()}>Despesas</button>
      </div>
    </div>
  );
};

export default ListsHeader;
