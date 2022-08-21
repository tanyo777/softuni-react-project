import { Link } from "react-router-dom";
import styles from "./DashboardContent.module.css";
import { memo } from "react";

const DashboardContent = ({ username }) => {
  return (
    <div>
      <h1 className={styles["text-color"]}>{username}, welcome to Carify</h1>
      <h3 className={styles["text-color"]}>
        You can create and view posts about cars
      </h3>
      <Link to="/cars" className={styles["text-color"]}>
        View cars
      </Link>
    </div>
  );
};

export default memo(DashboardContent);
