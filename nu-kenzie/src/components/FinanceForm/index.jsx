import React, { useState } from "react";

import "./form.css"


const AddValueForm = ({listTransactions, setListTransactions, addFinance}) => {

  const [formData, setFormData] = useState({
    description: "",
    value: "",
    type: ""
  })

  const submitFinance = (event) => {
    event.preventDefault()
    addFinance(formData)
    setFormData({
      description: "",
      type: "",
      value: ""
    })
  }

  return (
    <form id="dbForm"  onSubmit={submitFinance}>

      <label htmlFor="descriptionInput">Descrição</label>
      <input
        type="text"
        id="descriptionInput"
        placeholder="Digite aqui sua descrição"
        onChange={(event)=>{
          setFormData({...formData, description: event.target.value})
        }
      }
        value={formData.description}
        required
      />
      <p className="descriptionExample">Ex: Compra de roupas</p>

      <div className="valueDiv">
        <div className="valueInputDiv">
          <label htmlFor="valueInput">Valor</label>
          <div className="valueInputDetails">
            <input type="number" 
              id="valueInput" 
              onChange={(event)=>{
                setFormData({...formData, value: event.target.value})
              }}
              value={formData.value}
              required
            />
            <div className="currencyDiv">
              <span>R$</span>
            </div>
          </div>
        </div>

        <div className="valueTypeDiv">
          <label htmlFor="valueType">Tipo de Valor</label>
          <select 
            name="" 
            id="valueType" 
            onChange={(event)=>{
                setFormData({...formData, type: event.target.value})
              }}
            value={formData.type}
            required
            >
            <option value ="" disabled selected>Selecione o tipo</option>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </div>

      <button type="submit" id="submitValue">Inserir valor</button>
    </form>
  );
};

export default AddValueForm;
