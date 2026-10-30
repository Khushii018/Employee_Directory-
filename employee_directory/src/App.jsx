import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./routes/ProtectedRoute"
import Employees from "./pages/Employees"
import Nav from "./components/Nav"
import { useState } from "react"


function App(){

    return (
        <Routes>
            <Route path="/"
            element ={<Login/>} />

            <Route path="/dashboard"
            element={
                <ProtectedRoute><Dashboard/></ProtectedRoute>
            }/>

            <Route path="/employees"
            element={
            <ProtectedRoute><Employees/></ProtectedRoute>}
            />

        </Routes>
    );
}

export default App;
