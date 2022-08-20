import { useNavigate } from "react-router-dom";
import styles from "./404.module.css";
import { Button } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>404! Page Not Found</h1>
      <Button color="error" variant="outlined" onClick={backHandler}>
        Back
      </Button>
    </main>
  );
};

export default NotFound;
