import { useState } from "react";
function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("SUBMIT", title, desc);
    if (!title || !desc) alert("title or description cannot be empty!");
    else props.addTodo({ title, desc });
  };
  return (
    <div className="my-2">
      <h4>Add a Todo</h4>
      <form onSubmit={submit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            autoComplete="off"
            placeholder="title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="desc"
            autoComplete="off"
            placeholder="description..."
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
