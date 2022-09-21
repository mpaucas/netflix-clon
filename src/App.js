import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HomeSesion from "./pages/HomeSesion";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import { AuthContextProvider, useAuthState } from "./context/AuthContext";
import ProtectedRoute from "./protectedRoute";

function App() {

  return (
    <>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={
            <ProtectedRoute>
                <HomeSesion />
            </ProtectedRoute>
          } />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<Signup />} />
          <Route path='/Account' element={
            <ProtectedRoute>
                <Account />
              </ProtectedRoute>
          } />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
