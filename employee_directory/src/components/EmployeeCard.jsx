import React from "react";

function EmployeeCard({ employee, onEdit, onDelete}) {
  return (
    <tr className="border-b hover:bg-blue-50 transition-all duration-300">

      <td className="border border-black px-6 py-4 font-semibold text-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold">
            {employee.firstName?.charAt(0)}
          </div>

          <div>
            <p className="font-semibold">
              {employee.firstName} {employee.lastName}
            </p>
            <p className="text-xs text-gray-500">
              Employee
            </p>
          </div>
        </div>
      </td>

      <td className=" border border-black px-6 py-4 text-gray-700">
        {employee.email}
      </td>

      <td className="border border-black px-6 py-4">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          {employee.age} Years
        </span>
      </td>

      <td className="border border-black px-6 py-4 text-gray-700">
        {employee.phone}
      </td>

      <td className="border border-black px-6 py-4">
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
          {employee.company?.department}
        </span>
      </td>

      <td className="border border-black px-6 py-4 text-gray-700">
        {employee.address?.address}, {employee.address?.city}
      </td>

      <td className="border border-black px-6 py-4 font-medium text-indigo-600">
        {employee.company?.name}
      </td>

      <td className="border border-black px-6 py-4">
        <div className="flex flex-col items-center">
        <button
          onClick={() => onEdit(employee)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
           Edit
        </button>
    <br/> <br/>
        <button onClick={()=> onDelete(employee.id)}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">Delete</button>
            </div>
      </td>

    </tr>
  );
}

export default EmployeeCard;