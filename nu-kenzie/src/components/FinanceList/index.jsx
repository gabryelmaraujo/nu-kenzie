
import React from "react"

import { EntryCard, ExitCard } from "../FinanceCards"

import "./financeList.css"


const FinanceList = () => {

return (
    <ul className="dbList">
        <EntryCard/>
        <ExitCard/>
        <EntryCard/>
        <ExitCard/>
        <EntryCard/>
        <ExitCard/>
    </ul>
)

}

export default FinanceList