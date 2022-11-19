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


  return (
    <div className="main">
      {/* <HomePage/> */}
      <DashBoardPage listTransactions={listTransactions} setListTransactions={setListTransactions} addFinance={addFinance}/>
    </div>
  );
}

export default App;
