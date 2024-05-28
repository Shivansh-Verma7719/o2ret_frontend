import './App.css';
import Landing from './pages/landing/index';
import AnalyticsPage from './pages/analytics/index';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        {/* Remove when page is complete */}
        {/* <Route path="/analytics" element={<AnalyticsPage/>} /> */}
        <Route path="/analytics" element={<AnalyticsPage/>} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;