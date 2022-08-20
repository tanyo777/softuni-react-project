import styles from "./Register.module.css";
import ErrorMessage from "./ErrorMessage";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { registerHandler } from "../../services/authService";
import { UserContext } from "../../context/userContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertComponent from "../../common/Alert";

const Register = () => {

  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState({ error: false, message: ""});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (payload) => {
    const response = await registerHandler(payload);
    const jsonResponse = await response.json();
    if(jsonResponse.accessToken) {
      userContext.setUser(jsonResponse);
      navigate("/dashboard");
    } else {
      setError({ error: true, message: jsonResponse.message });
    }
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
        <h1>Register</h1>
        <TextField
          id="outlined-textarea"
          label="Username"
          placeholder="Enter username..."
          multiline
          {...register("username", { required: true })}
        />
        {errors.email && <ErrorMessage message="Email is required..." />}

        <TextField
          id="outlined-textarea"
          label="Email"
          placeholder="Enter email..."
          multiline
          {...register("email", { required: true })}
        />
        {errors.email && <ErrorMessage message="Email is required..." />}


        <TextField
          id="outlined-textarea"
          label="Password"
          placeholder="Enter password..."
          multiline
          {...register("password", { required: true })}
        />
        {errors.password && <ErrorMessage message="Password is required" />}

        <TextField
          id="outlined-textarea"
          label="Password"
          placeholder="Enter password..."
          multiline
          {...register("rePassword", { required: true })}
        />
        {errors.password && <ErrorMessage message="Passwords don't match" />}

        <Button variant="contained" type="submit">
          Register
        </Button>
      </form>
      {error.error === true ? <AlertComponent message={error.message} expirationHandler={setError}/> : ""}
    </main>
  );
};

export default Register;
