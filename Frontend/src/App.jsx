// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/Auth/auth-context';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Screens/Home';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import ContactUs from './components/ContactUs/ContactUs';
import Profile from './components/UserProfile/Profile';
import AuthModal from './components/Auth/AuthModal';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <AuthModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;