import "./styles.css";
import React from "react";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = React.useState([]);
  //inputText-current state of input value;
  //setText- update /dispatcher ->everytime you want to update text state it can be only update via setText.

  const handleAdd = (inputText) => {
    //what should happen when user clicks on add todo.
    //we have to catch hold of thatinput value
    // console.log("todo added")
    const newTodo = {
      id: Math.floor(),
      title: inputText,
      status: false
    };

    // setTodos([...copy/paste All the previous todos item here, newTodo]);
    setTodos([...todos, newTodo]);
    //everytime you create anew array using spread operator.
    //and then add new todo item created inside that
    //that new array you passed inside setTodos
    //becomes your updated todo state
  };
  console.log(todos);

  return (
    <div className="App">
      <AddTodo handleAdd={handleAdd} />
      <div>
        {todos.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            title={todoItem.title}
            status={todoItem.status}
            id={todoItem.id}
          />
        ))}
      </div>
    </div>
  );
}
