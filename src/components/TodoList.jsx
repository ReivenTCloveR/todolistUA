import React, { Fragment, useRef, useState } from "react";

/* Generar id unicas */
import uuid4 from "uuid4";

/* Importar TodoItem */
import { TodoItem } from "./TodoItem";

/* Exportar TodoList */
export function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1" },
    { id: 2, task: "Tarea 2" },
    { id: 3, task: "Tarea 3" },
    { id: 4, task: "Tarea 4" },
  ]);

  const taskRef = useRef()

  const addTask = () => {
    const tarea = taskRef.current.value.trim();
    var id = uuid4();
    alert("Agregando tarea:   "+tarea)
    alert("ID:   "+id)
  
  }
  return (
    <Fragment>
      <h1>Lista de Tareas</h1>

      {/* Input para recibir los datos */}
      <div className="input-group my-4">
        <input className="form-control" placeholder="Ingrese una tarea" ref={taskRef}></input>
        <button className="btn btn-success ms-2" onClick={addTask}><i className="bi bi-plus-circle"></i></button>
        <button className="btn btn-danger ms-2"><i className="bi bi-trash3"></i></button>
      </div>

      {/* Lista de tareas */}
      <ul className="list-group">
        {/* recorrer la lista */}
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </Fragment>
  );
}
