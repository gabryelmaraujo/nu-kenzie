import "./dashBoard.css"

import kenzieBlackLogo from "../../images/NuKenzieLogoBlack.svg"
import itemDeleteImg from "../../images/trash.svg"
import noitens from "../../images/noitens.png"

const DashBoardPage = () =>{

    return (

        <div className="dashBoardPage">
            <header className="dbHeader">
                <nav className="dbNav">
                    <div className="navLogo">
                        <img src={kenzieBlackLogo} alt="" />
                    </div>
                    <div className="goHomeDiv">
                        <button id="goHomeBttn">Início</button>
                    </div>
                </nav>
            </header>
            <main className="dbMain">
                <div className="dbMainContainer">
                    <section className="dbFormSec">
                        <div className="dbFormDiv">
                            <form id="dbForm">
                                <label htmlFor="descriptionInput">Descrição</label>
                                <input type="text" id="descriptionInput" placeholder="Digite aqui sua descrição"/>
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
                        </div>

                        <div className="totalBalanceDiv">
                            <div className="totalBalanceHeader">
                                <p className="totalBalanceText">Valor total:</p>
                                <p className="totalBalance">R$ 999</p>
                            </div>
                            <p className="totalBalanceDesc">O valor se refere ao saldo</p>

                        </div>
                    </section>

                    <section className="dbListSec">
                        <div className="dbListHeader">
                            <p className="dbListHeaderText">Resumo financeiro</p>
                            <div className="listButtons">
                                <button id="filterAll">Todos</button>
                                <button id="filterEntry">Entradas</button>
                                <button id="filterExit">Despesas</button>
                            </div>
                        </div>

                        <div className="haveNoValues">
                            <p className="noValuesText">Você ainda não possui nenhum lançamento</p>

                            <img src={noitens} alt="" className="haveNoItemImg"/>
                            <img src={noitens} alt="" className="haveNoItemImg"/>
                            <img src={noitens} alt="" className="haveNoItemImg"/>

                        </div>
                        <ul className="dbList">
                            {/* <li className="entrada" id="salario">
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
                            </li> */}
                        </ul>

                    </section>
                </div>

            </main>
        </div>

    )
}

export default DashBoardPage