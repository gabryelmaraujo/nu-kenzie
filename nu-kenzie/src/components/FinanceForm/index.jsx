import React from "react";

import "./form.css"


const AddValueForm = () => {
  return (
    <form id="dbForm">
      <label htmlFor="descriptionInput">Descrição</label>
      <input
        type="text"
        id="descriptionInput"
        placeholder="Digite aqui sua descrição"
      />
      <p className="descriptionExample">Ex: Compra de roupas</p>

      <div className="valueDiv">
        <div className="valueInputDiv">
          <label htmlFor="valueInput">Valor</label>
          <div className="valueInputDetails">
            <input type="text" id="valueInput" />
            <div className="currencyDiv">
              <span>R$</span>
            </div>
          </div>
        </div>

        <div className="valueTypeDiv">
          <label htmlFor="valueType">Tipo de Valor</label>
          <select name="" id="valueType">
            <option value="entry">Entrada</option>
            <option value="exit">Saída</option>
          </select>
        </div>
      </div>

      <button id="submitValue">Inserir valor</button>
    </form>
  );
};

export default AddValueForm;
