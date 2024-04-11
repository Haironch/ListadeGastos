const FilterContainer = ({ children }) => {
  return (
    <div className="
    
    block items-center 
    justify-between p-4 bg-gray-700 
    sm:flex
    ">
      {children}
    </div>
  );
};

const ItemsLeftf = ({ total }) => {
  return <p className="text-gray-400 text-sm ">{total} items left</p>;
};

const FilterButtonContainer = ({ children }) => {
  return <div className="flex items-center space-x-2">{children}</div>;
};

const FilterButton = ({ action, active, filter }) => {
    return (
        <button onClick={action}
            className={` hover:text-white cursor-pointer transition-all duration-300 ease-in-out `
                + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-400' : 'text-gray-400')}>{filter}</button>
    )
}

export { FilterContainer, ItemsLeftf, FilterButtonContainer, FilterButton };
