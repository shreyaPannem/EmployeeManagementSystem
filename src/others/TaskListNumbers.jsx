import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="flex justify-between gap-5 screen px-5 py-9">
      <div className="h-40 w-[45%] bg-red-400 rounded-2xl py-6 px-9">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="h-40 w-[45%] bg-blue-400 rounded-2xl py-6 px-9">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="h-40 w-[45%] bg-green-400 rounded-2xl py-6 px-9">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="h-40 w-[45%] bg-yellow-400 rounded-2xl py-6 px-9">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
