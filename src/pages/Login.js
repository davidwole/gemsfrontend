import { useState } from "react";
import { BASE_URL } from "../CONST";
import "../styles/Login.css";
import Error from "../components/Errors";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleErrors = (error) => {
    setErrors(error);
    setTimeout(() => {
      setErrors(false);
    }, 1500);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const { email, password } = credentials;

      if (!email || !password) {
        handleErrors("Please fill in all fields");
        return;
      }

      if (!isValidEmail(email)) {
        handleErrors("Please enter a valid email address");
        return;
      }

      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        window.location.assign("/");
      } else {
        handleErrors(data.message);
      }
    } catch (error) {
      handleErrors(error.message);
    } finally {
      setLoading(false);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form_fields">
        {errors && <Error error={errors} />}
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button disabled={loading}>{loading ? "Loading...." : "Login"}</button>
      </form>
    </div>
  );
}
