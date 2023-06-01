import { useState } from "react";

const App = () => {
    const [todoValue, setTodoValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setTodoValue(e.target.value);
    };

    const clearInput = () => {
        document.getElementById("todoValueInput").value = "";
        setTodoValue("");
    };

    const addTodo = () => {
        setTodos([
            ...todos,
            {
                id: todos.length,
                value: todoValue,
            }
        ]);
        clearInput();
    };

    return (
        <>
            <div>
                <h2>Todo List</h2>
            </div>
            <input
                id="todoValueInput"
                onChange={(e) => handleChange(e)}
            ></input>
            <button onClick={() => addTodo()}>Add</button>
            <p>
                {todos.length} tasks
            </p>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li
                            key={todo.id}>
                            {todo.value}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default App;