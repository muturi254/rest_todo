import React from "react";

const TodoItem = ({ todo, onDelete }) => {

    const handleClick = (id) => {
        onDelete(id)
    }

    return (
        <>
            <h1>{ todo.name }</h1>
            <button onClick={() => handleClick(todo.id)}>delete</button>
        </>
    )
}


export default TodoItem;