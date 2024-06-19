import './App.css';
import Landing from './pages/landing/index';
import AnalyticsPage from './pages/analytics/index';
import Login from './components/sign_up/Login';
import Register from './components/register_page/Register'
import Dashboard from './components/dashboard/Dashboard';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Distributor from './components/distributor/distributor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/register" element={<Register />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-distributor" element={<Distributor />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
