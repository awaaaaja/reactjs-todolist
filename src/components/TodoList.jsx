import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList({ todos, handleEditTodo, handleDeleteTodo }) {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard 
          key={todoIndex} 
          index={todoIndex} 
          handleEditTodo={handleEditTodo} 
          handleDeleteTodo={handleDeleteTodo}
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
