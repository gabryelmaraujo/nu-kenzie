
import React from "react";

import "./haveNoValues.css"

import noitens from "../../images/noitens.png"

const HaveNoValues = () => {
  return (
    <div className="haveNoValues">
      <p className="noValuesText">Você ainda não possui nenhum lançamento</p>

      <img src={noitens} alt="" className="haveNoItemImg" />
      <img src={noitens} alt="" className="haveNoItemImg" />
      <img src={noitens} alt="" className="haveNoItemImg" />
    </div>
  );
};

export default HaveNoValues;
