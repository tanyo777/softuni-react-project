import styles from "./ProtectedNavigation.module.css";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Button } from "@mui/material";
import { logout } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";

const ProtectedNavigation = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    const token = userContext.user.accessToken;
    logout(token).then((res) => {
      if (res.status === 204) {
        navigate("/login");
      }
    });
  };

  return (
    <nav className={styles.navigationContainer}>
      <div className={styles["links-container"]}>
        <h5 className={styles["nav-header"]}>
          User: {userContext.user.username}
        </h5>
        <Link to="/dashboard" style={{ marginLeft: "20px"}}>Dashboard</Link>
        <Link to="/cars" style={{ marginLeft: "20px"}}>Cars</Link>
        <Link to="/cars/create" style={{ marginLeft: "20px"}}>Create</Link>
      </div>
      <Button variant="contained" onClick={logoutHandler}>
        Logout
      </Button>
    </nav>
  );
};

export default ProtectedNavigation;
