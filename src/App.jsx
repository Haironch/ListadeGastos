import { useEffect, useState } from "react";
import { Title } from "./components/Title/Title";
import { Todo } from "./components/Todo";
import { TodoInput } from "./components/TodoInput/Todoinput";
import { TodoList } from "./components/TodoList/TodoList";
import InputPrice from "./components/InputPrice/InputPrice";

function App() {

   const [todos, setTodos] = useState([])


 // get todos from local storage
  useEffect(() => {
    const todoLS = localStorage.getItem('todosLS')
    if(todoLS) {
      setTodos(JSON.parse(todoLS))
    }
  }, [])

useEffect(() => {
  if(todos?.length > 0) {
    localStorage.setItem('todosLS', JSON.stringify(todos))
  }else if(todos?.length === 0) {
    localStorage.removeItem('todosLS')
  }
}, [todos])


  const addTodo = (title, pr1) => {
    const lastId = todos?.length > 0 ? todos[todos?.length - 1].id : 1;

    const newTodo ={
      id: lastId + 1,
      title,
      completed: false,
      pr1: "local",
    }
 
    const todoList = [...todos]
    todoList?.push(newTodo);
    setTodos(todoList);
  }

  const handleSetCompleted = (id) => {
    const updatedList = todos?.map(todo => {
      if (todo.id === id) {
      return{
        ...todo, completed: !todo.completed
      }}
      return todo
    })
    setTodos(updatedList)
    
  }

  const handleDeleteTodo = (id) => {
    const updatedList= todos?.filter(todo => todo.id !== id) 
      setTodos(updatedList)
  }

  return (
    <div className="bg-gray-900 min-h-screen font-inter h-full text-gray-100 flex items-center justify-center py-20 px-5">
    <div className="container flex flex-col max-w-xl">
        <Title />
       <InputPrice />
        <TodoInput  addTodo={addTodo}/>
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
