import React from 'react'

export default function ShoppingItem(props) {
    return (
        <li>
            <h2 style = {{
                //ternary statement: condition ? if true : if false
                textDecoration: props.item.checked ? 'line-through' : null,
            }}>
                {props.item.name}
            </h2>
            <button 
                // Below declares onCheckItem() as a function
                // onCheckItem is defined as a key in <ShoppingList /> in the <ShoppingItem />'s 
                //    that are mapped over
                // Clicking on the button will invoke the callback from <App /> where we
                //    defined a method for handleCheckItem 
                // SUMMARY - The arrow function on onClick calls the callback props with props.item
                // onCheckItem() is updated in <App /> to call handleCheckItem() function
                // handleCheckItem() is declared in <App /> so we can use callback props here
                onClick={() => props.onCheckItem(props.item)}
                type='button'>
                check
            </button>
            <button 
                // Same comment as above
                onClick={() => props.onDeleteItem(props.item)}
                type='button'>
                delete
                </button>
        </li>
    )
}

//setting the item array to empty
//Used here in ShoppingItem()
//Also used in <ShoppingList />
ShoppingItem.defaultProps = {
    item: {}
}