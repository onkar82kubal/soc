import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Forgetpassword from "./pages/Forgetpassword";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin/Admin";
import SocietyManagement from "./pages/SocietyManagement/SocietyManagement";
import Payment from "./pages/Payments/Payment";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgetpassword />} />
        <Route path="/society-management" element={<SocietyManagement />} />
        <Route path="/payments" element={<Payment />} />
      </Routes>
    </>
  );
};

export default App;
