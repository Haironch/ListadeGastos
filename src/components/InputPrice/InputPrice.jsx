export default function InputPrice() {

  function handleSubmit(e) {
    // Previene que el navegador recargue la página
    e.preventDefault();

    // Lee los datos del formulario
    const form = e.target;
    const formData = new FormData(form);
    // O puedes trabajar con él como un objecto plano:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }


  console.log()

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="price" className="block text-sm font-medium leading-6 text-whithe-900">
          Ingrese su prestacion salarial
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">Q</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
          />
          
        </div>
        </form>
    )
  }