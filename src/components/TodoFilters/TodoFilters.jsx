import { FilterContainer } from "./TodoFilters.componentes";
import { ItemsLeftf } from "./TodoFilters.componentes";
import { FilterButtonContainer } from "./TodoFilters.componentes";
import { FilterButton } from "./TodoFilters.componentes";

const TodoFilters = () => {
  return (
    <FilterContainer>
      <ItemsLeftf />
      <FilterButtonContainer>
        <FilterButton action={() => {}} active="All" filter="All" />
        <FilterButton action={() => {}} active="All" filter="Active" />
        <FilterButton action={() => {}} active="All" filter="Completed" />
      </FilterButtonContainer>
      <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
        Clear Completed
      </button>
    </FilterContainer>
  );
};

export { TodoFilters };
