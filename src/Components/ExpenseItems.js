import './ExpenseItem.css';

function ExpenseItems(props) {
    return (
        <div className="expense-item">
            <div>
                {props.date}
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h4 className='expense-item__price'>$ {props.amount}</h4>
            </div>
        </div>
    )
};
export default ExpenseItems;