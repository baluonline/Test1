import React, { Component } from 'react';


export default class AddTodo extends Component {
    state ={
        content:''
    }

    submiteNewTodo = (e) => {
        e.preventDefault();
        this.setState({
            content:''
        })
    }
    newTodo = (e) => {
        this.setState({
            content:e.target.value
        })
    }
    updateTodos =(e) => {
        this.props.Addtodo(this.state);
    }
     render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submiteNewTodo} className="input-field col s6">
                    {/* <label> Please enter your todos list here</label> */}
                    <input className="input-field s6 m3 l2 left"
                    onChange={this.newTodo} type="text" value={this.state.content}>
                    </input>
                    <button className="waves-effect waves-light btn-small"
                    onClick={this.updateTodos}> Add to do</button>
                </form>
            </React.Fragment>
        );
    }
}
