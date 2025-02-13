import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddCategory from "./components/AddCategory";
import AddEmployee from "./components/AddEmployee";
import Category from "./components/Category";
import Dashboard from "./components/Dashboard";
import EditEmployee from "./components/EditEmployee";
import Employee from "./components/Employee";
import EmployeeDetail from "./components/EmployeeDetail";
import EmployeeLogin from "./components/EmployeeLogin";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import Start from "./components/Start";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/adminlogin" element={<Login />}></Route>
          <Route path="/employee_login" element={<EmployeeLogin />}></Route>
          <Route
            path="/employee_detail/:id"
            element={<EmployeeDetail />}></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }>
            <Route path="" element={<Home />}></Route>
            <Route path="/dashboard/employee" element={<Employee />}></Route>
            <Route path="/dashboard/category" element={<Category />}></Route>
            <Route path="/dashboard/profile" element={<Profile />}></Route>
            <Route
              path="/dashboard/add_category"
              element={<AddCategory />}></Route>
            <Route
              path="/dashboard/add_employee"
              element={<AddEmployee />}></Route>
            <Route
              path="/dashboard/edit_employee/:id"
              element={<EditEmployee />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
