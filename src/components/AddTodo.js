import { useState } from "react";
function AddTodo(props) {
  //creating state for title and desc
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT", title, desc);
    if (!title || !desc) alert("title or description cannot be empty!");
    else {
      //add newTodo and set title and desc to empty so that its input element will get blank on screen
      props.addTodo({ title, desc });
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="my-2">
      <h4>Add a Todo</h4>
      {/* when button is pressed onSubmit will trigger and its function will be called */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          {/* when input will have any change then below function will trigger and it will set the title to current value in input element */}
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
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
            value={desc}
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
