import React from "react";

const TaskListNumbers = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-8 pt-10 px-[60px] justify-items-center">
        <div className="bg-red-400 h-[110px] w-[85%] rounded-2xl text-white ">
          1
        </div>
        <div className="bg-blue-400 h-[110px] w-[85%] rounded-2xl text-white ">
          2
        </div>
        <div className="bg-green-400 h-[110px] w-[85%] rounded-2xl text-white">
          3
        </div>
        <div className="bg-yellow-400 h-[110px] w-[85%] rounded-2xl text-white ">
          4
        </div>
      </div>
    </div>
  );
};

export default TaskListNumbers;
