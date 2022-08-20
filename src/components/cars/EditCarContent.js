import { TextField, Button } from "@mui/material";
import ErrorMessage from "../auth/ErrorMessage";
import CircularLoader from "../loaders/CircularLoader";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { editCar } from "../../services/carService";
import { useNavigate } from "react-router-dom";

const EditCarContent = (props) => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  console.log(props);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const editCarHandler = (payload) => {
    setIsLoading(true);
    editCar(props._id,payload, userContext.user.accessToken).then((res) => {
        setIsLoading(false);
        navigate('/cars/' + res._id);
    });
  };

  return (
    <>
      {!isLoading && (
        <form onSubmit={handleSubmit(editCarHandler)}>
          <h1>Create car</h1>
          <TextField
            id="outlined-textarea"
            label="Brand"
            placeholder="Enter car brand..."
            multiline
            margin="dense"
            defaultValue={props.brand}
            {...register("brand", { required: true })}
          />
          {errors.brand && <ErrorMessage message="Car brand is required..." />}

          <TextField
            id="outlined-textarea"
            label="Model"
            placeholder="Enter car model..."
            multiline
            margin="dense"
            defaultValue={props.model}
            {...register("model", { required: true })}
          />
          {errors.model && <ErrorMessage message="Car model is required..." />}

          <TextField
            id="outlined-textarea"
            label="Description"
            placeholder="Enter description..."
            multiline
            margin="dense"
            defaultValue={props.description}
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
            defaultValue={props.year}
            {...register("year", { required: true })}
          />
          {errors.year && <ErrorMessage message="Car year is required..." />}

          <TextField
            id="outlined-textarea"
            label="Car image"
            placeholder="Enter car image..."
            multiline
            margin="dense"
            defaultValue={props.imageUrl}
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
            defaultValue={props.price}
            {...register("price", { required: true })}
          />
          {errors.price && <ErrorMessage message="Car price is required..." />}
          <Button variant="contained" type="submit">
            Edit
          </Button>
        </form>
      )}
      {isLoading && <CircularLoader />}
    </>
  );
};

export default EditCarContent;
