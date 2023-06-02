import React from "react";

export function TodoItem({ todo }) {
  const { id, task } = todo;
  return (
    <li className="list-group-item" key={id}>
      {task}
    </li>
  );
}
