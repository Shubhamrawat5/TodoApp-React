// import PropTypes from 'prop-types'
function Todo(props) {
  console.log(props.todo);
  const { todo, deleteTodo } = props;
  return (
    <>
      <div className="card ml-20">
        <div className="card-body p-3">
          <h5 className="card-title mb-1">{todo.title}</h5>
          <p className="card-text mb-2">{todo.desc}</p>
          <button
            type="button"
            className="btn btn-success btn-sm"
            onClick={() => deleteTodo(todo)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

Todo.defaultProps = {
  todo: {
    title: "xyz",
    desc: "abc",
  },
};

export default Todo;
