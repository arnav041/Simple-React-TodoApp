import React from 'react'
import './Todoitemstyle.css'

function Todoitemlist(props) {
    const items = props.itemlist;
    const listedItems = items.map(item => {
        return (
            <div className="todo-list-item">
                <p  key={item.key}>{item.text}</p>
                <span className="close-todo-item" 
                onClick={() => props.deletekey(item.key)} >&times;</span>
            </div>
        )
    })
    return (
        <div className="todoitems">
            {listedItems}
        </div>
    )
}
export default Todoitemlist