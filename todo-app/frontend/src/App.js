import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/todos').then(res => setTodos(res.data));
  }, []);

  const addTodo = () => {
    axios.post('http://localhost:5000/todos', { text: newTodo }).then(res => {
      setTodos([...todos, res.data]);
      setNewTodo('');
    });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;