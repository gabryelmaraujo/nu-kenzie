import "./dashBoard.css"

import kenzieBlackLogo from "../../images/NuKenzieLogoBlack.svg"


const DashBoardPage = () =>{

    return (

        <div className="dashBoardPage">
            <header className="dbHeader">
                <nav className="dvNav">
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
                                <input type="text" id="descriptionInput" />
                                <p className="descriptionExample">Ex: Compra de roupas</p>

                                <div className="valueDiv">
                                    <label htmlFor="valueInput">Valor</label>
                                    <input type="text" id="valueInput" />

                                    <label htmlFor="valueType">Tipo de Valor</label>
                                    <select name="" id="valueType">
                                        <option value="entry">Entrada</option>
                                        <option value="exit">Saída</option>
                                    </select>
                                </div>

                                <button id="submitValue">Inserir Valor</button>


                            </form>
                        </div>
                    </section>

                    <section className="dbListSec"></section>
                </div>

            </main>
        </div>

    )
}

export default DashBoardPage