
import './App.css';
import Footer from './components/Layout/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/antd/dist/antd.min.css'

import Header from './components/Header/Header';
import { Layout } from './components/Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Edittran from './components/edit/Edittran';
import Analyites from './components/analyites/Analyites';

function App() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<ProductRoutes>
          <HomePage />
        </ProductRoutes>} />
        <Route path='/analyites' element={<Analyites />} />


        {/* <Route path='editbook/:id' element={<Edittran />} /> */}

      </Routes>
    </>
  );
}
export function ProductRoutes(Props) {
  // console.log(Props.children);
  if (localStorage.getItem('user')) {
    return Props.children
  } else {
    return <Navigate to='/login' />
  }
}
export default App;
