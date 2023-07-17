import  Contacts from 'pages/Contacts'
import ProtectedRout from 'routes/ProtectedRout'
import Login from 'pages/Login'
import Rergister from 'pages/Register'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Home from 'pages/Home'
import { selectIsLoggedIn } from 'redux/auth/selectors'


export const App = () => {
  const isLoggedIn  = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);
  
  return (
    <Routes>
        <Route path="/register" element={<Rergister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/"
          element={
            <ProtectedRout isLoggedIn={isLoggedIn}>
              <Contacts />
            </ProtectedRout>
          }
        />
    </Routes>
  );
};