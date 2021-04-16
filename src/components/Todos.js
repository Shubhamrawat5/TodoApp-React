import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { useState } from "react";

function Todos() {
  const [todosList, setTodosList] = useState([
    {
      title: "Go to market",
      desc: "Description of first todo is here",
    },
    {
      title: "Do home work",
      desc: "Description of second todo is here",
    },
    {
      title: "Go evening walk",
      desc: "Description of third todo is here",
    },
  ]);

  const deleteTodo = (todoDelete) => {
    console.log("DELETE IS CLICKED", todoDelete);
    setTodosList(
      todosList.filter((todo) => {
        return todo !== todoDelete;
      })
    );
  };
  const addTodo = (newTodo) => {
    console.log("ADD TODO CLICKED", newTodo);
    // todosList.push(newTodo);
    // console.log(todosList);
    // setTodosList(todosList);

    setTodosList([...todosList, newTodo]);
  };

  return (
    <>
      <AddTodo addTodo={addTodo} />
      {/* <Todo deleteTodo={deleteTodo} /> */}
      {todosList.length === 0
        ? "No todos to show!"
        : todosList.map((todo, i) => {
            return <Todo todo={todo} key={i} deleteTodo={deleteTodo} />;
          })}
    </>
  );
}

export default Todos;
