import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { Login } from "../pages/Login";
import Register from "../pages/Register";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);
