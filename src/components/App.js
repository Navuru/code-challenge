import React ,{useState,useEffect}from "react";
import AccountContainer from "./AccountContainer";
// import TransactionsList from "./TransactionsList";

function App() {

  const [transactions,setTransactions] = useState([])

  const handleAddTransaction = (transaction) => {
     // to note transaction to transactions
    setTransactions([...transactions,transaction])
  }

  const handleSearch = (search) => {
    if (search) {
      const searchItem = transactions.filter(() => {
        // to note transaction to transactions
        if (transactions.description === searchItem){
          return true;
        } else { 
          return false;
        }
      });
      setTransactions(searchItem)
    }
  }

  useEffect(() => {
    // const res = 
    fetch("http://localhost:8001/transactions")
    .then((res) => res.json())
    // const data = res.json();
    .then((data) => {
      setTransactions(data);
    });
    
  },[])



  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer
        handleAddTransaction={handleAddTransaction}
        transactions={transactions}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default App;
