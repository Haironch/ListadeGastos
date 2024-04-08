import { useState } from "react";
const Todo = ({ todo,  handleSetCompleted, handleDeleteTodo }) => {
  const { id, title, completed, price } = todo;
  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600 ">
      <div className="flex items-center ">
        {" "}
        {completed ? (
          <div onClick={()=>  handleSetCompleted(id)} className=" bg-green-700 p-1 rounded-full cursor-pointer">
          <img className="h-4 w-4 " src="/check-icon.svg" alt="check" />
          </div>
        ) : (
          <span onClick={()=>  handleSetCompleted(id)} className={`border border-gray-500 rounded-full p-3 cursor-pointer`}></span>                                      
          )}
        <p className={"ml-1 pl-3" + (completed && "text-decoration-line: line-through bg-red-500 rounded")}>{title} {price}</p>
      </div>
      <img
        onClick={() => handleDeleteTodo(id)}
        className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
        src="/close-icon.svg"
        alt="close icon"
      />
    </div>
  );
};
export { Todo };
