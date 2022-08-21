import { Button } from "@mui/material";
import styles from "./DetailsContent.module.css";
import { useContext, useState, memo } from "react";
import { UserContext } from "../../context/userContext";
import { deleteCar } from "../../services/carService";
import { Link, useNavigate } from "react-router-dom";
import CircularLoader from "../loaders/CircularLoader";
import AlertComponent from "../../common/Alert";

const CarDetailsContent = (props) => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });

  const deleteHandler = () => {
    setIsLoading(true);
    if (props._ownerId === userContext.user._id) {
      deleteCar(props._id, userContext.user.accessToken).then((res) => {
        setIsLoading(false);
        if (res._deletedOn) {
          navigate("/cars");
        } else {
          setError({ error: true, message: "Cannot delete this post!" });
        }
      });
    }
  };

  return (
    <div className={styles["car-container"]}>
      {isLoading && <CircularLoader />}
      {!isLoading && (
        <>
          <h1>Car Info</h1>
          <h5>
            Brand: {props.brand} ({props.year})
          </h5>
          <h5>Model: {props.model}</h5>
          <h6>Price: {props.price}$</h6>
          <p>Description: {props.description}</p>
          <img src={props.imageUrl} className={styles.image} />
          {userContext.user._id === props._ownerId && (
            <div className={styles["buttons-container"]}>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteHandler()}
              >
                Delete
              </Button>
              <Button variant="contained" style={{ marginLeft: "20px" }}>
                <Link
                  to={"/cars/edit/" + props._id}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Edit
                </Link>
              </Button>
            </div>
          )}
          {error.error === true ? (
            <AlertComponent
              message={error.message}
              expirationHandler={setError}
            />
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default memo(CarDetailsContent);
