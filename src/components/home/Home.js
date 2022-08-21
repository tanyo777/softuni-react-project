import styles from "./Home.module.css";
import Navigation from "../navbars/Navbar";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <h1>Welcome to Carify</h1>
          <Button variant="contained" endIcon={<Send />}>
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </Button>
      </main>
    </>
  );
};

export default Home;
