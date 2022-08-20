import { Alert } from "@mui/material";
import { useEffect } from "react";
import styles from "./Alert.module.css";

const AlertComponent = (props) => {
  useEffect(() => {
    const storedTimeout = setTimeout(() => {
      props.expirationHandler({ error: false, message: "" });
    }, 2500);

    return () => {
      clearTimeout(storedTimeout);
    };
  }, []);

  return (
    <Alert severity="error" className={styles.alert}>
      {props.message}
    </Alert>
  );
};

export default AlertComponent;
