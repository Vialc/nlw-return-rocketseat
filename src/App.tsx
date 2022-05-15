import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Login } from './pages/Login';
import { Widget } from './components/Widget';
import { Register } from './pages/Register';

function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
   // await auth.signout();
    window.location.href = window.location.href;
  }

  return ( 
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
      </Routes>
      <Widget />
    </div>
  );
}

export default App;