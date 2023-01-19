import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import AuthDetails from "./components/auth/AuthDetails";
import Signin from "./components/auth/Signin";
import SignUpCopy from "./components/SignUpCopy";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <AuthDetails />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Signin />} />
          <Route path="register" element={<SignUpCopy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
