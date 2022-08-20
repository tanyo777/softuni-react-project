import ProtectedNavigation from "../navbars/ProtectedNavbar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../auth/ErrorMessage";
import { TextField, Button } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import AlertComponent from "../../common/Alert";
import { createCar } from "../../services/carService";
import { useNavigate } from "react-router-dom";
import CircularLoader from "../loaders/CircularLoader";

const CreateCarComponent = () => {
  const authContext = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState({ error: false, message: "" });

  const createCarHandler = async (payload) => {
    setIsLoading(true);
    const response = await createCar(payload, authContext.user.accessToken);
    setIsLoading(false);
    if (response._id) {
      navigate("/cars/" + response._id);
    } else {
      // show error message from the server
    }
  };

  return (
    <>
      <ProtectedNavigation />
      <main>
        {!isLoading && (
          <form onSubmit={handleSubmit(createCarHandler)}>
            <h1>Create car</h1>
            <TextField
              id="outlined-textarea"
              label="Brand"
              placeholder="Enter car brand..."
              multiline
              margin="dense"
              {...register("brand", { required: true })}
            />
            {errors.brand && (
              <ErrorMessage message="Car brand is required..." />
            )}

            <TextField
              id="outlined-textarea"
              label="Model"
              placeholder="Enter car model..."
              multiline
              margin="dense"
              {...register("model", { required: true })}
            />
            {errors.model && (
              <ErrorMessage message="Car model is required..." />
            )}

            <TextField
              id="outlined-textarea"
              label="Description"
              placeholder="Enter description..."
              multiline
              margin="dense"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <ErrorMessage message="Car description is required..." />
            )}

            <TextField
              id="outlined-textarea"
              label="Year"
              placeholder="Enter description..."
              multiline
              margin="dense"
              {...register("year", { required: true })}
            />
            {errors.year && <ErrorMessage message="Car year is required..." />}

            <TextField
              id="outlined-textarea"
              label="Car image"
              placeholder="Enter car image..."
              multiline
              margin="dense"
              {...register("imageUrl", { required: true })}
            />
            {errors.imageUrl && (
              <ErrorMessage message="Car image is required..." />
            )}

            <TextField
              id="outlined-textarea"
              label="Car price(USD)"
              placeholder="Enter car price in USD..."
              multiline
              margin="dense"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <ErrorMessage message="Car price is required..." />
            )}
            <Button variant="contained" type="submit">
              Create
            </Button>
          </form>
        )}
        {isLoading && <CircularLoader />}
        {error.error === true ? (
          <AlertComponent
            message={error.message}
            expirationHandler={setError}
          />
        ) : (
          ""
        )}
      </main>
    </>
  );
};

export default CreateCarComponent;
