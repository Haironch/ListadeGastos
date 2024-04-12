import React, { useEffect, useState } from "react";
import { Title } from "./components/Title/Title";
import { TodoInput } from "./components/TodoInput/Todoinput";
import { TodoList } from "./components/TodoList/TodoList";
import InputPrice from "./components/InputPrice/InputPrice";

function App() {
  const [todos, setTodos] = useState([]);
  const [salary, setSalary] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remainingSalary, setRemainingSalary] = useState(0);

  useEffect(() => {
    const todoLS = localStorage.getItem("todosLS");
    if (todoLS) {
      setTodos(JSON.parse(todoLS));
    }
  }, []);

  useEffect(() => {
    const salarioLS = localStorage.getItem("salaryLS");
    if (salarioLS) {
      setSalary(JSON.parse(salarioLS));
    }
  }, []);

  useEffect(() => {
    if (salary) {
      localStorage.setItem("salaryLS", JSON.stringify(salary));
    } else if (salary === 1) {
      localStorage.removeItem("salaryLS");
    }
  }, [salary]);

  useEffect(() => {
    if (todos?.length > 0) {
      localStorage.setItem("todosLS", JSON.stringify(todos));
    } else if (todos?.length === 0){
      localStorage.removeItem("todosLS");
      setTotalPrice(0);
    }
  }, [todos]);

  
  const addTodo = (title, price, salary) => {
    const lastId = todos?.length > 0 ? todos[todos?.length - 1].id : 1;
    const newTodo = {
      id: lastId + 1,
      title,
      price,
      salary,
      completed: false,
    };
    const todoList = [...todos];
    todoList?.push(newTodo);
    setTodos(todoList);
  };

  const handleSetCompleted = (id) => {
    const updatedList = todos?.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedList);
  };

  const handleDeleteTodo = (id) => {
    const updatedList = todos?.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  
  useEffect(() => {
    const todosLS = localStorage.getItem("todosLS");
    if (todosLS) {
      console.log("Entro al if")
      const completedTodos = todos.filter(todo => todo.completed); 
      const sum = completedTodos.reduce((acc, curr) => acc + parseFloat(curr.price), 0); 
      setTotalPrice(sum);
      console.log(sum)
      const remainingSalary = salary - sum;
      setRemainingSalary(remainingSalary);
    } else {
      console.log("Nego el if")
      // Si complete es false, no hagas nada
    }
  }, [todos, salary]);
 

  return (
    <div className="bg-gray-900 min-h-screen font-inter h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <p>Saldo disponible: {remainingSalary}</p>
        <h1>Total gastado: {totalPrice}</h1>
        <InputPrice setSalary={setSalary} />
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          handleSetCompleted={handleSetCompleted}
          handleDeleteTodo={handleDeleteTodo}
        />
        
      </div>
    </div>
  );
}

export default App;