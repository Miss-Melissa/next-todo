import React from "react";

function Header() {
  return (
    <div className="sticky top-0 w-full left-0 bg-slate-900 flex items-center justify-between p-4 border-b border-solid border-white">
    <h1 className="text-3xl sm:text-6xl">TODO LIST</h1>
    <i className="fa-solid fa-user text-xl duration-300 hover:opacity-40 curson-pointer sm:text-3xl"></i>
    </div>
  );
}

export default Header;
