import { useState } from 'react';


import './App.css';

import HomePage from './pages/homePage/HomePage.jsx';
import DashBoardPage from './pages/dashBoard/dashBoard.jsx';
import { financesData } from './data/financesData';



function App() {

  const [listTransactions, setListTransactions] = useState(financesData)


function addFinance(financesData){
  setListTransactions([...listTransactions, financesData])
}

function removeFinance(financeDesc){
  const newList = listTransactions.filter(finance => finance.description !== financeDesc)
  setListTransactions([newList])
}

function allMoney(){
  const entriesValue = []
  const exitsValue = []
  listTransactions.map((finances) => {
    if(finances.type === "entrada"){
      entriesValue.push(finances.value)
    }else{
      exitsValue.push(finances.value)
    }
    })

  const entriesSum = entriesValue.reduce( (accum, curr) => accum + curr )
  const exitsSum = exitsValue.reduce( (accum, curr) => accum + curr )

  const balance = entriesSum-exitsSum

  return balance

}

  return (
    <div className="main">
      {/* <HomePage/> */}
      <DashBoardPage listTransactions={listTransactions} setListTransactions={setListTransactions} addFinance={addFinance} removeFinance={removeFinance} allMoney={allMoney}/>
    </div>
  );
}

export default App;
