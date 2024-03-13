import './App.css';
import Landing from './components/landing/index';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;