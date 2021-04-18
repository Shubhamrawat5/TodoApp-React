import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { useState } from "react";

function Todos() {
  //creating state in function with the help of useState
  //const[variable,functionToUpdate]=useState(initialValue)
  const [todosList, setTodosList] = useState([
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
    /* not work because we are giving same array reference to set
    todosList.pop();
    setTodosList(todosList);
    */
  };
  const addTodo = (newTodo) => {
    console.log("ADD TODO CLICKED", newTodo);
    /* not work because we are giving same array reference to set
    todosList.unshift(newTodo);
    console.log(todosList);
    setTodosList(todosList);
    */
    setTodosList([newTodo, ...todosList]); //new array reference
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
