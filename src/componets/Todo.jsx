import React from "react";  

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return(
        <div id='todo' 
        style={{ textDecoration: todo.isCompleted ? "line-through": "" }}>
        <div id='content'>
          <p>{todo.text}</p>
          <p id='category'>({todo.category})</p>
        </div>
        <div>
          <button id="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
          <button id="remove" onClick={() => removeTodo(todo.id) }>x</button>
        </div>
      </div>
    )
}

export default Todo