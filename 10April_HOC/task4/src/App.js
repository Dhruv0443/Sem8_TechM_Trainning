import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedDashboard from './pages/ProtectedDashboard';
import Login from './pages/Login';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedDashboard />} />
        </Routes>
    </Router>
  );
}
export default App;
