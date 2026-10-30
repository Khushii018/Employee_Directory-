import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../services/api";
import axios from "axios";

export const fetchEmployees = createAsyncThunk(
    "employees/fetchEmployees",
    async () => {
        try {
            const response = await axios.get("https://dummyjson.com/users");
            console.log("response", response);
            return response.data;

        } catch (error) {
            return error;
        }

    }
);

const employeeSlice = createSlice({
    name: "employees",
    initialState: {
        employees: [],
        loading: false,
        error: null,
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees.unshift(action.payload);
        },
        updateEmployee: (state, action) => {
            state.employees = state.employees.map((employee) => employee.id === action.payload.id ? action.payload : employee);
        },
        deleteEmployee: (state, action) => {
            state.employees = state.employees.filter((employee) => employee.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state, action) => {
                state.loading = true;

            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                console.log("action", action)
                state.loading = false;
                state.employees = action.payload;
            })
            .addCase(fetchEmployees.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch employees";
            });
    },

});

export const {
    addEmployee,
    updateEmployee,
    deleteEmployee,

} = employeeSlice.actions;

export default employeeSlice.reducer;