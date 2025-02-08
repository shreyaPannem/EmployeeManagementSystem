// import React from "react";
// import Header from "../../others/Header";

// const AdminDashboard = () => {
//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//       <div className=" w-full h-[70vh] mt-10 flex items-center justify-center">
//         <form className=" bg-purple-500 h-[55vh] w-[90vw] flex justify-between items-center font-black text-red">
//           <div className="flex flex-col ml-5 gap-5">
//             <div>
//               <label htmlFor="">Task Title</label>
//               <input
//                 type="text"
//                 className="w-full  p-2 text-xl outline-none transtion-all duration-300 ease-in-out focus:ring-2 focus:ring-white focus:border-white border-2 border-white"
//                 placeholder="Make a UI design"
//               />
//             </div>

//             <div>
//               <label htmlFor="">Date</label>
//               <br />
//               <input
//                 type="date"
//                 name=""
//                 id=""
//                 className="w-full  p-2 text-xl outline-none transtion-all duration-300 ease-in-out focus:ring-2 focus:ring-white focus:border-white border-2 border-white"
//               />
//             </div>
//             <div>
//               <label htmlFor="">Assign To</label>
//               <input
//                 type="text"
//                 placeholder="employeee name"
//                 className="w-full  p-2 text-xl outline-none transtion-all duration-300 ease-in-out focus:ring-2 focus:ring-white focus:border-white border-2 border-white"
//               />
//             </div>
//             <div>
//               <label htmlFor="">Category</label>
//               <input
//                 type="text"
//                 placeholder="design,dev,etc"
//                 className="w-full  p-2 text-xl outline-none transtion-all duration-300 ease-in-out focus:ring-2 focus:ring-white focus:border-white border-2 border-white"
//               />
//             </div>
//           </div>
//           <div class="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-lg mx-auto">
//             <div class="w-full">
//               <textarea
//                 rows="5"
//                 class="w-full p-3 text-lg border-2 border-gray-300 rounded-lg outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 resize-none"
//                 placeholder="Write your task here..."
//               ></textarea>
//             </div>

//             <div>
//               <button class="px-6 py-2 text-white text-lg font-semibold bg-green-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md">
//                 Create Task
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/createTask";
import TaskList from "../TaskList/TaskList";
import TaskListNumbers from "../../others/TaskListNumbers";

const AdminDashboard = () => {
  
  return (
    <div>
      <Header />
      <CreateTask />

      <TaskListNumbers />
    </div>
  );
};

export default AdminDashboard;
