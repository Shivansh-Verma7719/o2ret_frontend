import './App.css';
import Landing from './pages/landing/index';
import AnalyticsPage from './pages/analytics/index';
import Login from './components/sign_up/Login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login />} />        
        {/* Remove when page is complete */}
        {/* <Route path="/analytics" element={<AnalyticsPage/>} /> */}
        <Route path="/analytics" element={<AnalyticsPage/>} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;