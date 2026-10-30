# Employee Directory Management System

A responsive Employee Directory Management System built using React JS that allows users to view, search, filter, sort, and manage employee information through a clean and interactive interface.

## 🚀 Features

- **Login Page:** Simple admin login interface with credential validation.
- **Dashboard:** Displays employee statistics, including total employees, companies, and departments.
- **Employee Listing:** Displays employee information in a structured table.
- **Search Functionality:** Search employees by name, email, phone number, age, department, company, and address.
- **Company Filtering:** Filter employee records by company.
- **Sorting:** Sort employees alphabetically by name or by age in ascending and descending order.
- **Pagination:** Navigate through employee records with 10 records per page.
- **Employee Management:** Includes functionality to add, edit, and delete employee records.
- **Protected Routes:** Restricts access to the dashboard and employee pages based on login status.
- **Responsive UI:** Styled using Tailwind CSS for a clean and user-friendly interface.

## 🛠️ Technologies Used

- **Frontend:** React JS
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit, React Redux
- **Routing:** React Router DOM
- **API Integration:** Axios
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Notifications:** React Toastify
- **Data Source:** DummyJSON Users API

## 📂 Project Structure

```text
employee_directory/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── EmployeeCard.jsx
│   │   ├── EmployeeForm.jsx
│   │   ├── Nav.jsx
│   │   └── SearchBar.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Employees.jsx
│   │   └── Login.jsx
│   ├── redux/
│   │   ├── employeeSlice.js
│   │   └── store.js
│   ├── routes/
│   │   └── ProtectedRoute.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── index.html
└── vite.config.js
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd employee_directory
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 🔑 Demo Login Credentials

The current login page uses hardcoded credentials for demonstration purposes.

- **Email:** admin@gmail.com
- **Password:** 123456

**Note:** These credentials are for demonstration only. The project does not currently implement production-grade authentication.

## 🌐 API Integration

Employee data is retrieved from the DummyJSON Users API:

`https://dummyjson.com/users`

Axios is used to make HTTP requests, while Redux Toolkit manages employee-related application state.

## 📌 Future Improvements

- Implement secure authentication and authorization.
- Integrate a backend API and database.
- Persist employee additions, updates, and deletions.
- Add employee profile details and department-specific views.
- Improve form validation and error handling.
- Add automated testing.

## 👩‍💻 Author

Developed as a React JS project to practice frontend development, API integration, state management, routing, and employee data management.
