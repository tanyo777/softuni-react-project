import styles from "./Dashboard.module.css";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
