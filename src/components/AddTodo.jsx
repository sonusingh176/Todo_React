import React from "react";

function AddTodo({ handleAdd }) {
  const [inputText, setText] = React.useState("");

  const handleInputchange = (event) => {
    //console.log(event)
    //console.log(event.target)
    //console.log(event.target.value);
    setText(event.target.value);
  };

  return (
    <div>
      <input
        value={inputText}
        placeholder="Add a new todo"
        // onChange={() => setTextVal()}
        onChange={handleInputchange}
      />
      <button
        onClick={() => {
          handleAdd(inputText);
          setText("");
        }}
      >
        ADD todo
      </button>
    </div>
  );
}

export default AddTodo;
