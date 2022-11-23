function TodoItem(props) {
  const { id, title, status } = props;
  return (
    <div key={id}>
      {/* <div style={{border:'1px solid black',margin:'5px',padding:'8px'}}>
          <p>Eat :status</p>
          <button>TOGGLE</button>
          <button>DELETE</button>
        </div> */}
      <p>
        {title}
        {"----"}
        {status ? "COMPLETED" : "NOT COMPLETED"}
      </p>
    </div>
  );
}

export default TodoItem;
