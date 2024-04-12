const FilterContainer = ({ children }) => {
  return (
    <div className="
    
    block

    justify-between p-4 bg-gray-700 
    sm:flex
    ">
      {children}
    </div>
  );
};

const ItemsLeftf = ({ total }) => {
  return <p className="text-gray-400 text-lg ">{total} items left</p>;
};

const FilterButtonContainer = ({ children }) => {
  return <div className=" 
  text-lg
  justify-center
  sm:flex sm:items-center space-x-6">{children}</div>;
};

const FilterButton = ({ action, active, filter }) => {
    return (
        <button onClick={action}
            className={`text-lg hover:text-green-500 cursor-pointer transition-all duration-300 ease-in-out `
                + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-400' : 'text-gray-400')}>{filter}</button>
    )
}

export { FilterContainer, ItemsLeftf, FilterButtonContainer, FilterButton };
