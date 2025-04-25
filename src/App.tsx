
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";
import { AuthGuard } from "./components/AuthGuard";
import Login from "./pages/Login";  // This is our landing page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
