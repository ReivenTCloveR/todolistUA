import React, { Fragment, useRef, useState } from "react";

/* Generar id unicas */
import uuid4 from "uuid4";

/* Importar TodoItem */
import { TodoItem } from "./TodoItem";

/* Exportar TodoList */
export function TodoList() {
  const [todos, setTodos] = useState([
  ]);

  const taskRef = useRef()

  const addTask = () => {
    const tarea = taskRef.current.value.trim();
    
  if (tarea === '') return;

  taskRef.current.value = ''

    setTodos((prevTodos) => {
      const newTask = {
        id: uuid4(),
        task: tarea
      }
      return[...prevTodos, newTask] //Investigar
    })

  
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
