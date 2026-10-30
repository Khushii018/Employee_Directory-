import React, { useState, useEffect } from "react";

function EmployeeForm({ onAddEmployee, editEmployee,onUpdateEmployee }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
   const [errors,setErrors]=useState({});

  useEffect(() => {
    if (editEmployee) {
      setFirstName(editEmployee.firstName || "");
      setLastName(editEmployee.lastName || "");
      setEmail(editEmployee.email || "");
      setAge(editEmployee.age || "");
      setPhone(editEmployee.phone || "");
      setDepartment(editEmployee.company?.department || "");
      setCompany(editEmployee.company?.name || "");
      setAddress(editEmployee.address?.address || "");
    }
  }, [editEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors ={};

    if(!firstName.trim()){
      validationErrors.firstName="first name is required";
    }
    if(!lastName.trim()){
      validationErrors.lastName="last name is required";
    }
    if(!email.trim()){
      validationErrors.email="email is required";
    }
    if(!phone.trim()){
      validationErrors.phone="Phone Number is required";
    }
    if(!age.trim()){
      validationErrors.age="age is required";
    }
    if(!department.trim()){
      validationErrors.department="Department is required";
    }
    if(!company.trim()){
      validationErrors.company="Company is required";
    }
    if(!address.trim()){
      validationErrors.address="Address is required";
    }
    setErrors(validationErrors);
     if(Object.keys(validationErrors).length>0){
      return;
    }

    const newEmployee = {
      id: editEmployee ? editEmployee.id : Date.now(),
      firstName,
      lastName,
      email,
      age,
      phone,
      company: {
        name: company,
        department: department,
      },
      address: {
        address: address,
      },
    };

    // onAddEmployee(newEmployee);
    if(editEmployee){
      onUpdateEmployee(newEmployee);
    }else{
      onAddEmployee(newEmployee);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setAge("");
    setPhone("");
    setDepartment("");
    setCompany("");
    setAddress("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Employee Directory
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
    <div>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
        )}
        </div>
        <div>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sum focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
        )}
        </div>
        <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}

        </div>
        <div>

        <input
          type="number"
          placeholder="Age"
          value={age}
          min="0"
          onChange={(e) => setAge(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.age && (
          <p className="text-red-500 text-sm mt-1">{errors.age}</p>
        )}
        </div>
        <div>

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          maxLength={10}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
        </div>
        <div>

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.department && (
          <p className="text-red-500 text-sm mt-1">{errors.department}</p>
        )}
        </div>
        <div>

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.company && (
          <p className="text-red-500 text-sm mt-1">{errors.company}</p>
        )}
        </div>
        <div>

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
        )}
        </div>
        <button
          type="submit"
          className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg py-2 font-semibold transition duration-300"
        >
          {editEmployee ? "Update Employee" : "Add Employee"}
        </button>

      </form>
    </div>
  );
  }

export default EmployeeForm;