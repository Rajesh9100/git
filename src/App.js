import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './component/Login';
import Signup from './component/Signup';
import Maindashboard from './component/Maindashboard';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/maindashboard' element={<Maindashboard />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
