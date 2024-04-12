import { useState } from "react";
import PropTypes from "prop-types";

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

    if (e.key.toLowerCase() === "enter" && title && price) {
      addTodo(title, price);
      setTitle(null);
      setPrice(null);
      console.log(e.target.value);
    }
  };

  return (
    <div
      className="block 
    sm:flex 
    sm:w-full 
    sm:justify-between
  "
    >
      
        <div
          className="
        mt-3  relative 
        sm:w-[60%]
        "
        >
          <div className=" absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
          </div>
          <input
            id="title"
            type="text"
            className="sm:flex-1 
            w-full
            sm:w-full
            sm:flex-grow 
            focus:shadow-lg 
            font-Inter focus:shadow-blue-800 pl-12 py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
            placeholder="cual es el siguiente"
            value={title ? title : ""}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => handleAddTodo(e)}
          />
        </div>
      

      <div
        className="
      mt-3 relative 
      sm:ml-2 
      sm:[30%]
      "
      
      
      >
        <input
          id="priceinput"
          type="text"
          inputMode="numeric"
          className="sm- w-full focus:shadow-lg font-Inter focus:shadow-blue-800 pl-3 
          py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 
          ease-in-out"
          placeholder="precio"
          value={price ? price : ""}
          onChange={(e) => setPrice(e.target.value)}
          onKeyDown={(e) => handleAddTodo(e)}
        />
      </div>
    </div>
  );
};

export { TodoInput };

TodoInput.propTypes = { addTodo: PropTypes.func.isRequired };
