import { useState } from 'react';


import './App.css';

import HomePage from './pages/homePage/HomePage.jsx';
import DashBoardPage from './pages/dashBoard/dashBoard.jsx';
import { financesData } from './data/financesData';



function App() {

const [page, setPage] = useState("home")

const [listTransactions, setListTransactions] = useState(financesData)


function addFinance(financesData){
  setListTransactions([...listTransactions, financesData])
}

function removeFinance(financeId){
  const newList = listTransactions.filter(finance => finance.id !== financeId)

  setListTransactions(newList)
}

function allMoney(){
  const entriesValue = []
  const exitsValue = []

  if(listTransactions.length !== 0){
    listTransactions.map((finances) => {
      if(finances.type === "entrada"){
        entriesValue.push(finances.value)
      }else{
        exitsValue.push(finances.value)
      }
      })
  
    const entriesSum = entriesValue.reduce( (accum, curr) => accum + curr, 0 )
    const exitsSum = exitsValue.reduce( (accum, curr) => accum + curr, 0 )
  
    const balance = entriesSum-exitsSum
  
    return balance
  }


}

  return (

    <div className="main">

    {page === "home" ? (
          <HomePage setPage={setPage}/>
        ):(
          <DashBoardPage listTransactions={listTransactions} setListTransactions={setListTransactions} addFinance={addFinance} removeFinance={removeFinance} allMoney={allMoney} setPage={setPage}/>
        )}

    </div>
  );
}

export default App;
