import { useState, useEffect } from "react";

const Title = () => {
  const [salary, setSalary] = useState(null);
  // get salry from local storage
  useEffect(() => {
    const salarioLS = localStorage.getItem("salaryLS");
    console.log(salarioLS);
    if (salarioLS) {
      setSalary(salarioLS.replace(/['"]+/g, ""));
    }
  }, []);

  
  return (
    <div className="border-double ">
      <h1 className="text-2xl font-anton font-bold tracking-widest text-green-500 sm:text-green-400">Control de Gastos</h1>
      <div>{salary && <p>Salario: Q{salary}</p>}</div>
      <div>
      </div>
    </div>
  );
};

export { Title };
