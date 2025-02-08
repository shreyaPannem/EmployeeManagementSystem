import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between w-screen bg-black p-2">
      <h2 className="mt-3">
        Hello
        <h1>Sarthak ❤️</h1>
      </h2>

      <span>
        <button className="bg-red-700 mt-5 p-2 rounded font-semibold mr-7">
          Log Out
        </button>
      </span>
    </div>
  );
};

export default Header;
