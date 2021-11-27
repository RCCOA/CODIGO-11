import {useState} from 'react';

function Task(props) {
  const { tarea, onTarea = () => {} } = props;

  return (
    <div>
      {tarea} <button onClick={() => onTarea(tarea)}>x</button>
    </div>
  );
}

function App() {
  const [tareas, setTareas] = useState([]); // ESTADO DONDE SE GUARDAN LAS TAREAS
  const [inputValue, setInputValue] = useState(''); // ESTADO DONDE SE GUARDA

  //EVENTO PARA ENVIO DE DATOS A TRAVES DEL FORMULARIO
  function handleSubmit(event) {
    event.preventDefault();

    setTareas((state) => {
      //creando un copia  de array y agregando nuevo objeto de la tarea
      console.log('state', state)
      return [
        ...state,
        {
          tarea:inputValue,
        },
      ];
    });

    setInputValue(''); // limpio estado de input
  }

  function deleteTask(tarea, tareas) {
    console.log('tarea', tarea);
    console.log('tareas', tareas);
    setTareas(tareas.filter((itemTarea) => itemTarea.tarea !== tarea));
  }

  return (
    <div>
      {/*formulario para enviar tarea*/}
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          type="text"
          placeholder="Ingresar tarea"
          required
          onChange={(e) => {
            console.log('e', e.target.value);
            setInputValue(e.target.value);
          }}
        />
        <button>+ Agregar tarea</button>
      </form>

      {tareas.length > 0 /*mapeando tareas */
      ? tareas.map((item) => (
        <Task
          tarea={item.tarea}
          onTarea={(tarea) => {
            console.log('tarea', tarea);
            deleteTask(tarea, tareas);
          }}
        />
      ))
    : 'No hay tareas pendientes'}
    </div>
  );
}

export { App };