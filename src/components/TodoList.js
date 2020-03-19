import React from 'react';

const TodoList = ({todos,deleteTodo}) => {
    const todoList = todos.length
        ? (todos.map((todo) => {
            return (
                <ul className="collection with-header" key={todo.id}>
                    <li className="collection-item center blue-text">
                        <div className="blue-text left">{todo.content}
                            <a href="#!" className="secondary-content">
                                <i className="material-icons delete-icon right"
                                 onClick={()=>{deleteTodo(todo.id)}}>
                            Delete</i>
                            </a>
                        </div>
                    </li>
                </ul>
            )
        }))
        : (
            <p className="center red-text ">
                there is no more todo's list
            </p>
        )

    return (
        <div className="collection col s12 m6 l4">
            {todoList}
        </div>
    )

}

export default TodoList;