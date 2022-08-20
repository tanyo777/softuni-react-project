import styles from "./Home.module.css";
import Navigation from "../navbars/Navbar";

const Home = () => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <h1>Home Page</h1>
      </main>
    </>
  );
};

export default Home;
