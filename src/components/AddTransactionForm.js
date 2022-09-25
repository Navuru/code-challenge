import React, { useState } from "react";
// import { header } from "server/reply";

function AddTransactionForm({handleAddTransaction}) {

  const [formData,setFormData] = useState({
    date:"",
    description:"",
    category:"",
    amount:""
  })

  const handlePostTransaction = async (e) => {
    e.preventDefault();
    console.log(formData)

  const res = await fetch(" http://localhost:8001/transactions",{
    method: "POST",
    headers : {
      "Content-Type": "application/json",
    },
    body : JSON.stringify({
          date:formData.date,
          description:formData.description,
          category:formData.category,
          amount:formData.amount
    }),
  });


  const data = res.json();

  handleAddTransaction (data)
    setFormData({
      date:"",
      description:"",
      category:"",
      amount:"",
    })
  }
  

  function handleChange(event) {
    setFormData({...formData,[event.target.name] : [event.target.value]});
  }


  return (
    <div className="ui segment">

      <form 
      className="ui form"
      onSubmit={handlePostTransaction}
      >
        <div className="inline fields">

          <input
           type="date" 
           name="date" 
           onChange={handleChange}
           value={formData.date}
           />

          <input
           type="text" 
           name="description" 
           placeholder="Description" 
           onChange={handleChange}
           value={formData.description}
           />

          <input 
          type="text" 
          name="category" 
          placeholder="Category" 
          onChange={handleChange}
          value={formData.category}
          />
          <input 
          type="number" 
          name="amount" 
          placeholder="Amount" 
          step="0.01" 
          onChange={handleChange}
          value={formData.amount}
          />

        </div>
        <button className="ui button" type="submit" >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;