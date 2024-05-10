
// import React, {useState} from 'react';
// import NewExpense from './components/NewExpense/NewExpense';
// import Expenses from './components/Expenses/Expenses';

// //Foldder 6 Video 3

// const App = () => {
//   const DUMMY_EXPENSES = [
//     {
//       id: 'e1',
//       title: 'Toilet Paper',
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//     {
//       id: 'e3',
//       title: 'Car Insurance',
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: 'e4',
//       title: 'New Desk (Wooden)',
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     },
//   ];
  
// const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


//   //child to parent
//   const addExpenseHandler = expense => {     // jo form submit hone pr object mila tha wo is ma aagya
//     //setExpenses([expense, ...expenses]);  // addExpenseHandler ko naya data aagya as expense parameter aur baki jitne object thay DUMMY_eXPENSES K wo wese k wese array ma populate hogaye spread operator se 
//     //better way of doing is with previous state method of react to get the updated state with reference to previous state
//     setExpenses(prevExpenses=>{
//       return [expense, ...prevExpenses]; 
//  });
// };

//   // return React.createElement(
//   //   'div',
//   //   {},
//   //   React.createElement('h2', {}, "Let's get started!"),
//   //   React.createElement(Expenses, { items: expenses })
//   // );

//   return (
//     <div>
//       <NewExpense onAddExpense={addExpenseHandler} />   {/*/ yaha se ye parent ka fn() as a prop pass hoga child [NewExpense] ma aur ye child se data le kr ayega*/}
//       <Expenses items={expenses} />
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;