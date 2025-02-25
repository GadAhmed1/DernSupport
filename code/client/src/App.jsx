import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './pages/home';
import AboutPage from './pages/about';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import ContactUsPage from './pages/ContactUs';
import ServicePage from './pages/service';
import DashboardPage from './pages/dashboard';
import UsersDashBoardPage from './pages/userDashBoard';
// import Req from './pages/dashboard'; // Import the requests page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/dashboard/req" element={<DashboardPage />} />
        <Route path="/dashboard/users" element={<UsersDashBoardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
