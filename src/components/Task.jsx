import React from "react";
import NewTask from "./NewTask";

export default function Task({ onAdd, onDelete, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-stone-700">TASKS</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="mb-4 text-stone-800 my-4">
          This project doesn't have any tasks
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
