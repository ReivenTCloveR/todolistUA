import React, { Fragment, useState } from "react";

/* Importar TodoItem */
import { TodoItem } from "./TodoItem";

/* Exportar TodoList */
export function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task:'Tarea 1' }, 
    { id: 2, task:'Tarea 2' }, 
    { id: 3 , task:'Tarea 3'},
    { id: 4 ,task:'Tarea 4'}]);
  return (
    <Fragment>
      <h1>Lista de Tareas</h1>
      {/* Lista de tareas */}
      <ul className="list-group">
        {/* recorrer la lista */}
        {todos.map((todo)=>(
            <TodoItem todo={todo} key={todo.id}/>
        ))}
      </ul>
    </Fragment>
  );
}
