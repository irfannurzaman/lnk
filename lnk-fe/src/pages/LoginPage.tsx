import React, { useState } from "react";
import "./Login.css";
import { useAuth } from "../contexts/AuthContext";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(username, password);
    // setUsername("");
    // setPassword("");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
