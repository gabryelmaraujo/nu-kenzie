
import React from "react"

import { EntryCard, ExitCard} from "../FinanceCards"
import HaveNoValues from "../HaveNoValues"

import "./financeList.css"


const FinanceList = ({listTransactions, removeFinance}) => {

return (
    <ul className="dbList">
        {
            listTransactions.map((finances, index) => {
                if(finances.type === "entrada"){
                    return <EntryCard key={index} financeInfos={finances} removeFinance={removeFinance}/>
                }else if(finances.type === "saida"){
                    return <ExitCard key={index} financeInfos={finances} removeFinance={removeFinance}/>
                }
            })
        }
    </ul>
)

}

export default FinanceList