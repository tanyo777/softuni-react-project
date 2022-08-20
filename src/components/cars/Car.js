import styles from "./Car.module.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Car = (props) => {

    useEffect(() => {
        console.log(props);
    }, []);

  return (
    <div className={styles["car-container"]}>
      <h4>{props.brand} ({props.year})</h4>
      <p>Model: {props.model}</p>
      <div>
        <Button variant="contained" color="success">
          <Link to={"/cars/" + props._id} style={{ color: "white", textDecoration: "none"}}>Details</Link>
        </Button>
      </div>
    </div>
  );
};

export default Car;
