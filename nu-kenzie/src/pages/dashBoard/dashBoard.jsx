import React from "react"

import "./dashBoard.css"

import Header from "../../components/Header"
import AddValueForm from "../../components/FinanceForm"
import TotalMoney from "../../components/TotalMoney"
import ListsHeader from "../../components/ListsHeader"
import HaveNoValues from "../../components/HaveNoValues"
import FinanceList from "../../components/FinanceList"

const DashBoardPage = ({listTransactions, setListTransactions, addFinance, removeFinance, allMoney, setPage}) =>{

    const verifyListLength = () => {
        if(listTransactions.length === 0){
            return <HaveNoValues/>
        }else{
            return <FinanceList listTransactions={listTransactions} setListTransactions={setListTransactions}/>
        }
    }

    return (

        <div className="dashBoardPage">
            <Header setPage={setPage}/>

            <main className="dbMain">
                <div className="dbMainContainer">
                    <section className="dbFormSec">

                        <div className="dbFormDiv">
                            <AddValueForm listTransactions={listTransactions} setListTransactions={setListTransactions} addFinance={addFinance}/>
                        </div>

                        { listTransactions.length !== 0 ? (<TotalMoney allMoney={allMoney}/>) : ("")}

                    </section>

                    <section className="dbListSec">
                        <ListsHeader listTransactions={listTransactions}/>

                        {
                            listTransactions.length === 0 ? (
                                <HaveNoValues/>
                            ) : (
                                <FinanceList listTransactions={listTransactions} setListTransactions={setListTransactions} removeFinance={removeFinance}/>
                            )
                        }

                    </section>
                </div>

            </main>
        </div>

    )
}

export default DashBoardPage