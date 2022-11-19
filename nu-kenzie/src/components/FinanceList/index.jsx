
import React from "react"

import { EntryCard, ExitCard} from "../FinanceCards"

import "./financeList.css"


const FinanceList = ({listTransactions}) => {

return (
    <ul className="dbList">
        {
            listTransactions.map((finances, index) => {
                if(finances.type === "entrada"){
                    return <EntryCard key={index} financeInfos={finances}/>
                }else if(finances.type === "saida"){
                    return <ExitCard key={index} financeInfos={finances}/>
                }
            })
        }
    </ul>
)

}

export default FinanceList