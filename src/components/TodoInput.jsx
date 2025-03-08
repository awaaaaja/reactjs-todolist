export default function TodoInput({ handleAddTodos, todoValue, setTodoValue, editIndex }) {
    return (
      <header>
        <input
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          placeholder="Enter todo ..."
        />
        <button onClick={() => handleAddTodos(todoValue)}>
          {editIndex !== null ? "Edit" : "Add"}
        </button>
      </header>
    );
  }
  