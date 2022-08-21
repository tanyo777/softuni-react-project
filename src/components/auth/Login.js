import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import ErrorMessage from "./ErrorMessage";
import { login } from "../../services/authService";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import AlertComponent from "../../common/Alert";
import Navigation from "../navbars/Navbar";
import Footer from "../footer/Footer";

const Login = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState({ error: false, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (payload) => {
    const response = await login(payload);
    const jsonResponse = await response.json();
    if (jsonResponse.accessToken) {
      userContext.setUser(jsonResponse);
      navigate("/dashboard");
    } else {
      setError({ error: true, message: jsonResponse.message });
    }
  };

  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
          <h1>Login</h1>
          <TextField
            id="outlined-textarea"
            label="Username"
            placeholder="Enter username..."
            multiline
            margin="dense"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <ErrorMessage message="Username is required..." />
          )}

          <TextField
            id="outlined-textarea"
            label="Password"
            placeholder="Enter password..."
            margin="dense"
            type="password"
            autoComplete="current-password"
            {...register("password", { required: true })}
          />
          {errors.password && <ErrorMessage message="Password is required" />}
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
        {error.error === true ? (
          <AlertComponent
            message={error.message}
            expirationHandler={setError}
          />
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
};

export default Login;
