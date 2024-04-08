import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleAddTodo = (e) => {
    
    //if(!title || !price) return;

    //if price is not null, press enter to focus on title input
    if (e.key.toLowerCase() === "enter" && price) {
      document.getElementById("title").focus();
    }

    if (e.key.toLowerCase() === "enter" && title) {
      document.getElementById("priceinput").focus();
    }

    if (e.key.toLowerCase() === "enter" && title && price){
      addTodo(title, price);
      setTitle(null);
      setPrice(null);
      console.log(e.target.value);
    }
  };

  return (
    <div className="flex">
      <div>
        <div className="mt-6 w-96 relative ">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
          </div>
          <input
          id="title"
            type="text"
            className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
            placeholder="cual es el siguiente"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => handleAddTodo(e)}
          />
        </div>
      </div>

      <div className="mt-6 ml-4 relative w-25">
        <input
          id="priceinput"
          type="text"
          className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-3 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
          placeholder="precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          onKeyDown={(e) => handleAddTodo(e)}
        />
      </div>
    </div>
  );
};

export { TodoInput };
