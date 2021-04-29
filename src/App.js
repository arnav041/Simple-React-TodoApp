import React, { Component } from 'react'
import "./App.css"
import Todoitemlist from './Components/Todoitemlist'

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items:[],
             currentItem: {
                 text: '',
                 key: ''
             }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.deletekey = this.deletekey.bind(this)
    }
    handleChange(e) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        const todoitem = this.state.currentItem
        const todoitems = [todoitem,...this.state.items]
        if(todoitem.text!=='' ){
            this.setState({
                items: todoitems,
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
    }
    deletekey(keyNeedtoDelete) {
        const olditems = this.state.items;
        const newitems = olditems.filter(item => {
            return item.key!==keyNeedtoDelete
        })
        this.setState({
            items: newitems,
            currentItem: {
                item: '',
                key:''
            }
        })
    }
    render() {
        return (
            <div className="todo-body">
                <form className="todo-app" onSubmit={this.handleSubmit}>
                    <input type="text"  placeholder="Enter Todo" onChange={this.handleChange} value={this.state.currentItem.text}  />
                    <input type="submit" value="Add Todo" />
                </form>
                <Todoitemlist className="list-item-section" deletekey={this.deletekey} itemlist={this.state.items} />
            </div>
        )
    }
}

export default App