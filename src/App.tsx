import { useState } from "react";
import "./App.css";
import { DialogNewExpenses } from "./component/dialogNewExpenses.component";



function App() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  async function fetchValues(url:string) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return data;
  }

  const handleClickOpen = () => {
    setActive(true);
  }


  const handleClose = () => {
    setActive(false);
  };




  fetchValues('http://localhost:8088/users')

  return (
    <>
      <nav className="navBar">
        <div>
          <button mat-button>Home</button>
        </div>
        <div>
          <button mat-button onClick={handleClickOpen}>new cost</button>
          <button mat-button>Pages</button>
          <button mat-button>Pages</button>
        </div>
        <div>
          <button mat-button>LogOut</button>
        </div>
      </nav>
      dashboard
      <div className="body">
        <div className="LeftBoard">
          <div className="MainBoard">
            <div className="Title">
              <h2>Personal account</h2>
              <div>options</div>
            </div>
            <div className="Balance">
              <p>Today's Balance</p>
              <p>5,000€</p>
            </div>
            <div className="MoneyInMoneyOut">
              <div className="MoneyIn">
                <p>Money In</p>
                <p>30.000</p>
              </div>
              <div className="MoneyOut">
                <p>Money In</p>
                <p>30.000</p>
              </div>
              <div className="MoneyTotal">
                <p>Money In</p>
                <p>30.000</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="ChartOverwiew">
            <h2>Chart Overview</h2>
            <div className="ChartSelection">
              <button>Balance</button>
              <button>Income</button>
              <button>Expenses</button>
            </div>
            <div>ChartItself</div>
          </div>
          <div className="CategoriesAndTransactions">
            <div className="CategoriesOverview">categories</div>
            <div className="TopTransactions">transaction</div>
          </div>
        </div>
        <div className="RightBoard">
          <h2>Transactions</h2>
          <div>Buttons</div>
          <div>Expenses</div>
        </div>
      </div>
      <DialogNewExpenses active={active} onClose={handleClose}/>
    </>
  );
}

export default App;
