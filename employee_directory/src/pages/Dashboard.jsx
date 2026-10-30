import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchEmployees } from "../redux/employeeSlice";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
    const dispatch=useDispatch();

  // const [darkMode,setDarkMode] =useState(false);
    const {employees:userData,loading,error} =useSelector((state)=>state.employees);
  console.log("data",{userData,loading});

   useEffect(() => {
      dispatch(fetchEmployees());
    }, [dispatch]);

    useEffect(() => {
      if(userData?.users){
        setEmployees(userData?.users)
      }
    },[userData])

  

  const totalEmployees = employees.length;

  const totalCompanies = new Set(
    employees.map((emp) => emp.company?.name)
  ).size;

  const totalDepartments = new Set(
    employees.map((emp) => emp.company?.department)
  ).size;
  
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
  return <h2>{error}</h2>;
}

  return (<>

   {/* { loading ?( <div>loading...</div>) : (<div><Dashboard/></div>)} */}
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        Dashboard
      </h1>
      {/* <button onClick={()=> setDarkMode(!darkMode)}  */}
         {/* className="px-4 py-2 rounded-lg border font-semibold">{darkMode?"Light Mode":"Dark mode"}</button> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Total Employees */}
        <div className="bg-blue-600 text-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold">
            Total Employees
          </h2>

          <p className="text-5xl font-bold mt-4">
            {totalEmployees}
          </p>
        </div>

        {/* Companies */}
        <div className="bg-green-600 text-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold">
            Companies
          </h2>

          <p className="text-5xl font-bold mt-4">
            {totalCompanies}
          </p>
        </div>

        {/* Departments */}
        <div className="bg-purple-600 text-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold">
            Departments
          </h2>

          <p className="text-5xl font-bold mt-4">
            {totalDepartments}
          </p>
        </div>

      </div>

      <div className="mt-10 bg-white rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-4">
          Employee Overview
        </h2>

        <p className="text-gray-600 mb-6">
          Manage employees, search records, filter companies,
          and update employee information.
        </p>

        <Link
          to="/employees"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Go to Employee List
        </Link>

      </div>

    </div>
    </>
  );
}

export default Dashboard;