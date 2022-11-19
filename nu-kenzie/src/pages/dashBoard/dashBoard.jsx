import React from "react"

import "./dashBoard.css"

import Header from "../../components/Header"
import AddValueForm from "../../components/FinanceForm"
import TotalMoney from "../../components/TotalMoney"
import ListsHeader from "../../components/ListsHeader"
import HaveNoValues from "../../components/HaveNoValues"
import FinanceList from "../../components/FinanceList"

const DashBoardPage = () =>{

    return (

        <div className="dashBoardPage">
            <Header/>

            <main className="dbMain">
                <div className="dbMainContainer">
                    <section className="dbFormSec">

                        <div className="dbFormDiv">
                            <AddValueForm/>
                        </div>

                        <TotalMoney/>

                    </section>

                    <section className="dbListSec">
                        <ListsHeader/>

                        {/* <HaveNoValues/> */}

                        <FinanceList/>

                    </section>
                </div>

            </main>
        </div>

    )
}

export default DashBoardPage