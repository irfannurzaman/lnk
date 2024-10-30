import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

const PrivateLogin: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { token } = useAuth();
  return !token ? children : <Navigate to="/" />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <PrivateLogin>
                <LoginPage />
              </PrivateLogin>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
