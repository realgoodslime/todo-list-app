"use client";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // function to add the task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  // function to mark the task complete
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // function to delete the task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl text-center font-semibold text-gray-800 mb-6">
          To-Do List
        </h1>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Add
          </button>
        </div>

        <ul className="mt-6 space-y-4">
          {tasks.map((t) => (
            <li key={t.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTaskCompletion(t.id)}
                  className="accent-yellow-500 hover:yellow-indigo-600"
                />
                <span
                  className={`${
                    t.completed ? "line-through text-gray-500" : "text-gray-800"
                  } text-lg`}
                >
                  {t.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(t.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
