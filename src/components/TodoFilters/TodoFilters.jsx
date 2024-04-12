import { FilterContainer } from "./TodoFilters.componentes";
import { ItemsLeftf } from "./TodoFilters.componentes";
import { FilterButtonContainer } from "./TodoFilters.componentes";
import { FilterButton } from "./TodoFilters.componentes";

const TodoFilters = () => {
  return (
    <FilterContainer>
      <ItemsLeftf />
      <FilterButtonContainer > 
        <FilterButton action={() => {}} active="All" filter="Todos" />
        <FilterButton action={() => {}} active="All" filter="Activos" />
        <FilterButton action={() => {}} active="All" filter="Completados" />
      </FilterButtonContainer>
      <button className=" text-lg text-gray-400 hover:text-green-500 cursor-pointer transition-all duration-300 ease-in-out">
        Limpiar completados
      </button>
    </FilterContainer>
  );
};

export { TodoFilters };
