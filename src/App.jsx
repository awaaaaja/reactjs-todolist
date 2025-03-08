import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodos(newTodo) {
    if (!newTodo.trim()) return; 
    
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = newTodo;
      setTodos(updatedTodos);
      setEditIndex(null); // Reset mode edit
    } else {
      setTodos([...todos, newTodo]);
    }
    
    setTodoValue(""); 
  }

  function handleDeleteTodo(index) {
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
  }

  function handleEditTodo(index) {
    setTodoValue(todos[index]);
    setEditIndex(index);
  }

  return (
    <>
      <TodoInput 
        todoValue={todoValue} 
        setTodoValue={setTodoValue} 
        handleAddTodos={handleAddTodos} 
        editIndex={editIndex} 
      />
      <TodoList 
        handleEditTodo={handleEditTodo} 
        handleDeleteTodo={handleDeleteTodo} 
        todos={todos} 
      />
    </>
  );
}

export default App;
