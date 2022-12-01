import { Routes, Route, Navigate } from "react-router-dom";
import ConsoleLayout from './layouts/ConsoleLayout';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';


function  App() {
  return (
        <Routes>
            <Route path="" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
      
          {/* Protected Routes */}
          <Route element={<ConsoleLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
  );
}

export default App;