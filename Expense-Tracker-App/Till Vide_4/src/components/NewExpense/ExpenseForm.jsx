// Folder 5 Video 7
// import React from 'react';

// import './ExpenseForm.css';

// const ExpenseForm = () => {
//   return (
//     <form>
//       <div className='new-expense__controls'>
//         <div className='new-expense__control'>
//           <label>Title</label>
//           <input type='text' />
//         </div>
//         <div className='new-expense__control'>
//           <label>Amount</label>
//           <input type='number' min='0.01' step='0.01' />
//         </div>
//         <div className='new-expense__control'>
//           <label>Date</label>
//           <input type='date' min='2019-01-01' max='2022-12-31' />
//         </div>
//       </div>
//       <div className='new-expense__actions'>
//         <button type='submit'>Add Expense</button>
//       </div>
//     </form>
//   );
// };

// // Folder 5 Video 8
// import React, { useState } from 'react';
// import './ExpenseForm.css';

// const ExpenseForm = () => {
//   // the below logic is somewhat similar as as we did in vanila JS like: (document.getElementById('').addEventListener('click', (event)=>{})
//   const [enteredTitle, setEnteredTitle] = useState('');
//   const [enteredAmount, setEnteredAmount] = useState('');
//   const [enteredDate, setEnteredDate] = useState('');

//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);
//     // console.log(event.target.value);
//   };

//   const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
//   };

//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
//   };

//   return (
//     <form>
//       <div className='new-expense__controls'>
//         <div className='new-expense__control'>
//           <label>Title</label>
//           <input type='text' onChange={titleChangeHandler} />
//         </div>
//         <div className='new-expense__control'>
//           <label>Amount</label>
//           <input
//             type='number'
//             min='0.01'
//             step='0.01'
//             onChange={amountChangeHandler}
//           />
//         </div>
//         <div className='new-expense__control'>
//           <label>Date</label>
//           <input
//             type='date'
//             min='2019-01-01'
//             max='2022-12-31'
//             onChange={dateChangeHandler}
//           />
//         </div>
//       </div>
//       <div className='new-expense__actions'>
//         <button type='submit'>Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;

// // Folder 5 Video 10
// import React, { useState } from 'react';

// import './ExpenseForm.css';

// const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState('');
//   const [enteredAmount, setEnteredAmount] = useState('');
//   const [enteredDate, setEnteredDate] = useState('');
//   // 2nd way
//   // const [userInput, setUserInput] = useState({
//   //   enteredTitle: '',
//   //   enteredAmount: '',
//   //   enteredDate: '',
//   // });

//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);

//     // setUserInput({
//     //   ...userInput,    // use state ma jitne initial states rakhay un ma se jitne nhi likhain ge hum us updated sate walay fn() ma wo saray zaya hojayeinge so hum spread se sb ko is updated state walay fn() ma spread kr dete/ likh dete aur phir jis ki state change krni usko override kr dete i.e event.target.value  here
//     //   enteredTitle: event.target.value,    // is way ka masla ye tha k jb zyada states update horhay honge tau purana state milne ka khatra rehta kun k react states ko instantly update nhi krta bulky inko schedule krta so isse bachne k liye daikho way 3
//     // });

//     //way 3
//     // setUserInput((prevState) => {   // prevState ki help se hamesha naya state hi milay ga  event.target.value k baad etc
//     //   return { ...prevState, enteredTitle: event.target.value };
//     // });
//   };

//   const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredAmount: event.target.value,
//     // });
//   };

//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredDate: event.target.value,
//     // });
//   };

//   return (
//     <form>
//       <div className='new-expense__controls'>
//         <div className='new-expense__control'>
//           <label>Title</label>
//           <input type='text' onChange={titleChangeHandler} />
//         </div>
//         <div className='new-expense__control'>
//           <label>Amount</label>
//           <input
//             type='number'
//             min='0.01'
//             step='0.01'
//             onChange={amountChangeHandler}
//           />
//         </div>
//         <div className='new-expense__control'>
//           <label>Date</label>
//           <input
//             type='date'
//             min='2019-01-01'
//             max='2022-12-31'
//             onChange={dateChangeHandler}
//           />
//         </div>
//       </div>
//       <div className='new-expense__actions'>
//         <button type='submit'>Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;

// // Folder 5 Video 12
// import React, { useState } from 'react';

// import './ExpenseForm.css';

// const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState('');
//   const [enteredAmount, setEnteredAmount] = useState('');
//   const [enteredDate, setEnteredDate] = useState('');
//   // 2nd way
//   // const [userInput, setUserInput] = useState({
//   //   enteredTitle: '',
//   //   enteredAmount: '',
//   //   enteredDate: '',
//   // });

//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);

//     // setUserInput({
//     //   ...userInput,    // use state ma jitne initial states rakhay un ma se jitne nhi likhain ge hum us updated sate walay fn() ma wo saray zaya hojayeinge so hum spread se sb ko is updated state walay fn() ma spread kr dete/ likh dete aur phir jis ki state change krni usko override kr dete i.e event.target.value  here
//     //   enteredTitle: event.target.value,    // is way ka masla ye tha k jb zyada states update horhay honge tau purana state milne ka khatra rehta kun k react states ko instantly update nhi krta bulky inko schedule krta so isse bachne k liye daikho way 3
//     // });

//     //way 3
//     // setUserInput((prevState) => {   // prevState ki help se hamesha naya state hi milay ga  event.target.value k baad etc
//     //   return { ...prevState, enteredTitle: event.target.value };
//     // });
//   };

//   const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredAmount: event.target.value,
//     // });
//   };

//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredDate: event.target.value,
//     // });
//   };

//   // Creating a shared Handler fn()
//   const inputChangeHandler = (identifier, value) => {
//     if (identifier === 'title'){
//       setEnteredTitle(value);          // fn() call
//     } else if (identifier === 'date'){
//       setEnteredDate(value);
//     }else{
//       setEnteredAmount(value);
//     }
//   };

//   return (
//     <form>
//       <div className='new-expense__controls'>
//         <div className='new-expense__control'>
//           <label>Title</label>
//               {/* // we could not write onChange={inputChangeHandler}  because we couldn't pass arguments of fn() this way thats why we made arrow fn()*/}
//           <input type='text' onChange={(event)=> inputChangeHandler('title', event.target.value)} />
//         </div>
//         <div className='new-expense__control'>
//           <label>Amount</label>
//           <input
//             type='number'
//             min='0.01'
//             step='0.01'
//             onChange={(event)=> inputChangeHandler('amount', event.target.value)}           />
//         </div>
//         <div className='new-expense__control'>
//           <label>Date</label>
//           <input
//             type='date'
//             min='2019-01-01'
//             max='2022-12-31'
//             onChange={(event)=> inputChangeHandler('date', event.target.value)}           />
//         </div>
//       </div>
//       <div className='new-expense__actions'>
//         <button type='submit'>Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;

// Folder 5 Video 13
//Handling form submission
// import React, { useState } from "react";

// import "./ExpenseForm.css";

// const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");
//   // 2nd way
//   // const [userInput, setUserInput] = useState({
//   //   enteredTitle: '',
//   //   enteredAmount: '',
//   //   enteredDate: '',
//   // });

//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);

//     // setUserInput({
//     //   ...userInput,    // use state ma jitne initial states rakhay un ma se jitne nhi likhain ge hum us updated sate walay fn() ma wo saray zaya hojayeinge so hum spread se sb ko is updated state walay fn() ma spread kr dete/ likh dete aur phir jis ki state change krni usko override kr dete i.e event.target.value  here
//     //   enteredTitle: event.target.value,    // is way ka masla ye tha k jb zyada states update horhay honge tau purana state milne ka khatra rehta kun k react states ko instantly update nhi krta bulky inko schedule krta so isse bachne k liye daikho way 3
//     // });

//     //way 3
//     // setUserInput((prevState) => {   // prevState ki help se hamesha naya state hi milay ga  event.target.value k baad etc
//     //   return { ...prevState, enteredTitle: event.target.value };
//     // });
//   };

//   const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredAmount: event.target.value,
//     // });
//   };

//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredDate: event.target.value,
//     // });
//   };

//   // Creating a shared Handler fn()
//   const inputChangeHandler = (identifier, value) => {
//     if (identifier === "title") {
//       setEnteredTitle(value); // fn() call
//     } else if (identifier === "date") {
//       setEnteredDate(value);
//     } else {
//       setEnteredAmount(value);
//     }
//   };

//   const submitHandler = (event) => {
//     event.preventDefault(); // page will not reload on submission
    
//     const expenseData = {
//       title: enteredTitle,     // so on submission we have this data stored
//       amount: enteredAmount,
//       date: new Date(enteredDate)  // it will parse string and convert it to date object
//     };

//     console.log(expenseData);
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           {/* // we could not write onChange={inputChangeHandler}  because we couldn't pass arguments of fn() this way thats why we made arrow fn()*/}
//           <input
//             type="text"
//             onChange={(event) =>
//               inputChangeHandler("title", event.target.value)
//             }
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             onChange={(event) =>
//               inputChangeHandler("amount", event.target.value)
//             }
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2022-12-31"
//             onChange={(event) => inputChangeHandler("date", event.target.value)}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;




// Folder 5 Video 15
//PROPS child to parent
import React, { useState } from "react";

import "./ExpenseForm.css";
// bcz we expect fn() from parent in props now for passing data from child to parent
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
 
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault(); // page will not reload on submission
  
    const expenseData = {      // we have to pass this object to parent
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData) ; 
    
    props.onSaveExpenseData(expenseData);  // child se data as aparameter parent ma jo fn() bnaya tha us ma pass hogya
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* // we could not write onChange={inputChangeHandler}  because we couldn't pass arguments of fn() this way thats why we made arrow fn()*/}
          <input
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
