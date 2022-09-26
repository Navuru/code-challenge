import React ,{useState,useEffect}from "react";
import AccountContainer from "./AccountContainer";
// import TransactionsList from "./TransactionsList";

function App() {

  const [transactions,setTransactions] = useState([])
  let [searchState, setSearchState] = useState(false)

  useEffect(() => {
    fetchTransactions()
  },[searchState])


    const fetchTransactions = async () => {
        const res = await fetch("http://localhost:8001/transactions")
        const jsonRes = await res.json()
        console.log(jsonRes)
          setTransactions(jsonRes);
        
      };
    
  const handleAddTransaction = (transaction) => {

     console.log("transaction: ", transaction)
    setTransactions([...transactions,transaction]);
  };

  const handleSearch = (search) => {
    console.log(search)

    if(search === ""){
      console.log("load all")
      setSearchState(!searchState)
    }

    let filteredTransactions = transactions.filter((transaction)=>{
      if(transaction.description.toLowerCase().startsWith(search.toLowerCase())){
        return transaction
      }
    })

    setTransactions(filteredTransactions)

  
  }

  
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
