import React from "react";

const CreateTask = () => {
  return (
    <div className="w-[100vw] h-screen mt-10 flex items-center justify-center px-4 overflow-n min-h-screen lg:mt-[-50px]">
      <form className="bg-purple-500 h-auto w-full sm:w-[90%] md:w-[80%] lg:w-[60%] max-w-[800px] flex flex-col md:flex-row justify-between items-center font-black text-red p-6 rounded-lg shadow-lg gap-6 lg:top-1">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-[50%] gap-5">
          <div>
            <label className="block text-white">Task Title</label>
            <input
              type="text"
              className="w-full sm:w-[300px] md:w-[350px] p-2 text-lg outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-white focus:border-white border-2 border-white rounded-md bg-transparent text-white placeholder-gray-300"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <label className="block text-white">Date</label>
            <input
              type="date"
              className="w-full sm:w-[300px] md:w-[350px] p-2 text-lg outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-white focus:border-white border-2 border-white rounded-md bg-transparent text-white placeholder-gray-300"
            />
          </div>

          <div>
            <label className="block text-white">Assign To</label>
            <input
              type="text"
              placeholder="Employee name"
              className="w-full sm:w-[300px] md:w-[350px] p-2 text-lg outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-white focus:border-white border-2 border-white rounded-md bg-transparent text-white placeholder-gray-300"
            />
          </div>

          <div>
            <label className="block text-white">Category</label>
            <input
              type="text"
              placeholder="Design, Dev, etc."
              className="w-full sm:w-[300px] md:w-[350px] p-2 text-lg outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-white focus:border-white border-2 border-white rounded-md bg-transparent text-white placeholder-gray-300"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center gap-4 bg-gray-100 rounded-lg shadow-md w-full md:w-[50%] p-4">
          <div className="w-full">
            <textarea
              rows="5"
              className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 resize-none"
              placeholder="Write your task here..."
            ></textarea>
          </div>

          <div>
            <button className="px-6 py-2 text-white text-lg font-semibold bg-green-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
