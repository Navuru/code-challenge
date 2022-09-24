import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({handleSearch,handleAddTransaction,transactions}) {


  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <AddTransactionForm handleAddTransaction={handleAddTransaction}/>
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
