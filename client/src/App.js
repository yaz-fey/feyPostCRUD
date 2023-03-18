import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from './hooks/useToken';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';






function App() {
  const [token] =useToken();
  const {modal} =useSelector(state => state.modal);

  return (
    <div >
      <BrowserRouter>
        {token?.token && <Navbar/>}
      {modal && <Modal/>}
        <Routes>
          <Route path="/" element={!token?.token ?  <Link to={'/auth'}/> : <Home />} />
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="users/*" element={<Users />} /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
