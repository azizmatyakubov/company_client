import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import ConsoleLayout from './layouts/ConsoleLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Apps from './pages/Apps';
import Users from './pages/Users';
import Settings from './pages/Settings';


function  App() {
  return (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
        
          </Route>
          {/* Protected Routes */}

          <Route element={<ConsoleLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="apps" element={<Apps />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>

  );
}

export default App;