import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/api/todo';
function App() {
    const [todoList, setTodoList] = useState(null);

    const fetchData = async () => {
        const response = await axios.get(SERVER_URL);
        setTodoList(response.data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    console.log('TodoList : ', todoList);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        const done = e.target.done.checked;

        await axios.post(SERVER_URL, { text, done });
        fetchData();

        // fetch('http://localhost:4000/api/todo', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         text,
        //         done,
        //     }),
        // }).then(() => {
        //     fetchData();
        // });
    };
    //<button></button>
    //<button></button>

    return (
        <div>
            <h1>Todo LIST</h1>
            <form onSubmit={onSubmitHandler}>
                <input name="text" />
                <input name="done" type="checkbox" />
                <input type="submit" value="추가" />
            </form>
            {todoList?.map((todo) => (
                <div key={todo.id} style={{ display: 'flex' }}>
                    <div> {todo.id}</div>
                    <div> {todo.text}</div>
                    <div> {todo.done ? 'Y' : 'N'}</div>
                </div>
            ))}
        </div>
    );
}


export default App;
