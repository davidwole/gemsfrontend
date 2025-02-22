import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BranchInfo from "./pages/BranchInfo";
import JobApplicationForm from "./components/forms/JobApplicationForm";

export default function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Routes>
      <Route path="/" element={user ? <Dashboard /> : <Login />} />
      <Route path="/branch/:id" element={<BranchInfo />} />
      <Route path="/jobform/" element={<JobApplicationForm />} />
    </Routes>
  );
}
