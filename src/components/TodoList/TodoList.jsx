import { TodoFilters } from "../TodoFilters/TodoFilters";
import { Todo } from "../Todo/Todo";
import PropTypes from "prop-types";

const TodoList = ({ todos,  handleSetCompleted, handleDeleteTodo }) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl ">
      {todos?.map((todo) => {
        return <Todo key={todo.id} todo={todo} 
        handleSetCompleted={handleSetCompleted}
        handleDeleteTodo={handleDeleteTodo}
        />;
      })}
      <TodoFilters/>
    </div>
  );
};
export { TodoList };

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleSetCompleted: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
}
