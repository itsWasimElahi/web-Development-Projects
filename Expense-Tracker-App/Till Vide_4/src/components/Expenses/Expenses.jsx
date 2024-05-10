// import ExpenseItem from './ExpenseItem';
// import Card from '../UI/Card';
// import './Expenses.css';


// //Foldder 6 Video 2 
// function Expenses(props) {
//   return (
//     <Card className="expenses">   {/* ye box aik overall card hoga jis ma row wise subCards honge */}
//      {/* aik set of parameters/means aik object of array k liye fn() call hua and so on with map bar bar alag se alag objects or set of parameters k sath fn() call nhi krna pra alag card bnane k liye map ne sb objects k liye khud hi card bna diye hain */}
     
//      {props.items.map((expense) => (
//       <ExpenseItem
//        title={expense.title}
//        amount={expense.amount}
//        date={expense.date}
//   />
// ))}
     
     
//       {/*now we take rid of these hardcoded expense item by map fn() we dont have to write them again and again
        
        
//         /* <ExpenseItem
//         title={props.items[0].title}     //items here is the variable items in app.js in which we stored array of objects and send it as arguments props in fn() call
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//       />
//       <ExpenseItem
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date}
//       />
//       <ExpenseItem
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date}
//       />
//       <ExpenseItem
//         title={props.items[3].title}
//         amount={props.items[3].amount}
//         date={props.items[3].date}
//       /> */}
//     </Card>
//   );
// }

// export default Expenses;



import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);  // updated value child se aye aur is fn() se update hogaiye
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}  //initial value which is 2020
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key = {expense.id}    // now with the help of this key we are not getting warning as keys to uniquely identify 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;