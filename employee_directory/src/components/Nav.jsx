import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  // Hide navbar on login page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">
          Employee Directory
        </h1>

        <div className="flex gap-6">
          <Link
            to="/dashboard"
            className="hover:text-yellow-300 font-medium"
          >
            Dashboard
          </Link>

          <Link
            to="/employees"
            className="hover:text-yellow-300 font-medium"
          >
            Employees
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;