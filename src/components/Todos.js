import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';


export default class Todos extends Component {
    constructor(props){
        super(props);
        this.state={
            todos:[
                {id:1,content:'wake up'},
                {id:2,content:'brush up'},
                {id:3,content:'breakfast'}
            ]
        }
    }
    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
            });
        this.setState({
            todos:todos
        })
    }

    addTodo = (todo) => {
        todo.id=Math.random;
        let todos = [...this.state.todos,todo];
        this.setState({
            todos
        })
    }

    render(){
        return(
            <div>
                <h4> Todo's list </h4>
                <TodoList todos={this.state.todos} deleteTodo= {this.deleteTodo}/>
                <AddTodo Addtodo={this.addTodo}/>
            </div>
        )
    }
}

   