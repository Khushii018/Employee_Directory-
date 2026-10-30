import React, { useEffect, useState } from "react";
import api from "../services/api";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeForm from "../components/EmployeeForm";
import {useDispatch,useSelector} from "react-redux"
import { fetchEmployees,addEmployee,updateEmployee,deleteEmployee } from "../redux/employeeSlice";



function Employees() {
  // const [employees, setEmployees] = useState([]);
  const dispatch=useDispatch();
  const [employeeData,setEmployeeData] = useState([]);
  const {employees:userData,loading,error} =useSelector((state)=>state.employees);
  // const filteredEmployees=employees.filter(...);
  console.log("userData",userData)

  // const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [editEmployee, setEditEmployee] = useState(null);
  const [sortBy,setSortBy] =useState("");
  const [showForm,setShowForm]=useState(false);
  const [currentPage, setCurrentPage]=useState(1);
 

  const recordsPerPage =10;

  useEffect(() => {
    if(userData?.users && userData?.users?.length > 0){
      setEmployeeData(userData?.users)
    }
  },[userData?.users])


  // useEffect(() => {
  //   dispatch(fetchEmployees());
  // }, [dispatch]);

  // const fetchEmployees = async () => {
  //   try {
  //     const response = await api.get("/users");
  //     setEmployees(response.data.users);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleAddEmployee = (newEmployee) => {
    dispatch(addEmployee(newEmployee));
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    despatch(updateEmployee(updatedEmployee));
    setEditEmployee(null);
    setShowForm(false);
  };

  const handleDeleteEmployee=(id)=>{
    dispatch(deleteEmployee(id));
  }

  
    
  

  const handleEdit =(employee) => {
    setEditEmployee(employee);
    setShowForm(true);
  };

  const filteredEmployees = employeeData
  .filter((employee) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      employee.firstName.toLowerCase().includes(searchText) ||
      employee.lastName.toLowerCase().includes(searchText) ||
      employee.email.toLowerCase().includes(searchText) ||
      employee.phone.toString().includes(searchText) ||
      employee.age.toString().includes(searchText) ||
      employee.company?.name.toLowerCase().includes(searchText) ||
      employee.company?.department.toLowerCase().includes(searchText) ||
      employee.address?.address.toLowerCase().includes(searchText);

    const matchesCompany =
      companyFilter === "" ||
      employee.company?.name === companyFilter;

    return matchesSearch && matchesCompany;
  })
  .sort((a, b) => {
    if (sortBy === "name") {
      return a.firstName.localeCompare(b.firstName);
    }

    if (sortBy === "ageLow") {
      return a.age - b.age;
    }

    if (sortBy === "ageHigh") {
      return b.age - a.age;
    }

    return 0;
  });

const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;

const currentEmployees = filteredEmployees.slice(firstIndex, lastIndex);

const totalPages = Math.max(1,Math.ceil(
  filteredEmployees.length / recordsPerPage
));

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
  return <h2>{error}</h2>;
}

  return (
    <div className="p-6">

      
    

      <h2 className="text-3xl font-bold text-blue-700 mb-5">
        Employee List
      </h2>

      <div className="flex flex-wrap items-center gap-4 mb-6">

        <input
          type="text"
          placeholder="Search by Name, Email, Department..."
          value={search}
          onChange={(e) => {setSearch(e.target.value); setCurrentPage(1);}}
          className="w-80 px-4 py-3 border-2 border-gray-300 rounded-xl"
        />

        <select
          value={companyFilter}
          onChange={(e) =>{ setCompanyFilter(e.target.value); setCurrentPage(1);}}
          className="border-2 border-gray-300 rounded-lg px-4 py-3"
        >
          <option value="">All Companies</option>

          {[...new Set(employeeData.map((emp) => emp.company?.name))].map(
            (company) => (
              <option key={company} value={company}>
                {company}
              </option>
            )
          )}
        </select>

        <select 
        value={sortBy}
        onChange={(e)=>{setSortBy(e.target.value); setCurrentPage(1);}}
        className="border-2 border-gray-300 rounded-lg px-4 py-3 ml-4">
            <option value="">Sort By</option>
            <option value="name">Name(A-Z)</option>
            
            <option value="ageLow">Age (Low to High)</option>
            <option value="ageHigh">Age (High to Low)</option>
        </select>

        <button onClick={()=> setShowForm(!showForm)} className="relative top-1 h-12 px-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold mb-6">
        {showForm?" close Form": "Add Employee"}
       
      </button>

       {showForm && (
        <div className="mt-6">
            <EmployeeForm
        onAddEmployee={handleAddEmployee}
        onUpdateEmployee={handleUpdateEmployee}
        editEmployee={editEmployee}
      />
        </div>
        )}

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full border border-black-300">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Age</th>
              <th className="border p-3">Phone</th>
              <th className="border p-3">Department</th>
              <th className="border p-3">Address</th>
              <th className="border p-3">Company</th>
              <th className="border p-3">Action</th>
            </tr>

          </thead>

          <tbody>

            

              {currentEmployees.map((employee)=>(
                <EmployeeCard
                key={employee.id}
                employee={employee}
                onEdit={handleEdit}
                onDelete={handleDeleteEmployee}/>
              ))}

              

          </tbody>

        </table>

        <div className="flex justify-cn=enter gap-4 mt-6">
          <button disabled={currentPage===1} 
          onClick={()=> setCurrentPage(currentPage-1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">Previous</button>
          <span className="font-semibold">Page {currentPage} of {totalPages}</span>
          <button disabled={currentPage===totalPages} onClick={()=> setCurrentPage(currentPage+1)}
           className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">Next</button>
        </div>

      </div>

    </div>
  );
}

export default Employees;