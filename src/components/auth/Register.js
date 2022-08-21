import styles from "./Register.module.css";
import ErrorMessage from "./ErrorMessage";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { registerHandler } from "../../services/authService";
import { UserContext } from "../../context/userContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertComponent from "../../common/Alert";
import Navigation from "../navbars/Navbar";
import Footer from "../footer/Footer";
import validator from "validator";

const Register = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState({ error: false, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (payload) => {
    if (!validator.isEmail(payload.email)) {
      setError({ error: true, message: "Invalid email" });
      return;
    }

    if (payload.password !== payload.rePassword) {
      setError({ error: true, message: "Passwords don't match" });
      return;
    }

    const response = await registerHandler(payload);
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
          <h1>Register</h1>
          <TextField
            id="outlined-textarea"
            label="Username"
            placeholder="Enter username..."
            multiline
            margin="dense"
            {...register("username", { required: true })}
          />
          {errors.email && <ErrorMessage message="Email is required..." />}

          <TextField
            id="outlined-textarea"
            label="Email"
            placeholder="Enter email..."
            multiline
            margin="normal"
            {...register("email", { required: true })}
          />
          {errors.email && <ErrorMessage message="Email is required..." />}

          <TextField
            id="outlined-textarea"
            label="Password"
            placeholder="Enter password..."
            margin="dense"
            autoComplete="current-password"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <ErrorMessage message="Password is required" />}

          <TextField
            id="outlined-textarea"
            label="Password"
            placeholder="Enter password..."
            margin="normal"
            type="password"
            autoComplete="current-password"
            {...register("rePassword", { required: true })}
          />
          {errors.rePassword && (
            <ErrorMessage message="Password confirmation is required" />
          )}

          <Button variant="contained" type="submit">
            Register
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

export default Register;
