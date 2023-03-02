import './Expensetem.css'

function ExpenseItem (parameters) {
    const expenseDate = "2021-2-2";
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.34
    return (<div className='expense-item'>
        <div className='expense-item'>{expenseDate}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>${expenseAmount}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;