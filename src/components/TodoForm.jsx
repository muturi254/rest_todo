import React, { useState } from "react";



const TodoForm = ({ onAdd }) => {

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
       if (name) {
           onAdd(name)
           console.log("alaa");
           
           setName('')
       }
        
    }

    const handleChange = (e) => {
        const name = {
            [e.target.name]: e.target.value
        }

       setName(name)
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} value={name}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}


export default TodoForm;