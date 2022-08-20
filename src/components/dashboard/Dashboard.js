import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { getUser } from "../../services/authService";
import ProtectedNavigation from "../navbars/ProtectedNavbar";
import styles from "./Dashboard.module.css";
import DashboardContent from "./DashboardContent";
import CircularLoader from "../loaders/CircularLoader";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUser(user.accessToken)
      .then((res) => res.json())
      .then((user) => {
        setUserData(user);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <ProtectedNavigation />
      <main className={styles.main}>
        {isLoading ? (
          <CircularLoader />
        ) : (
          <DashboardContent
            email={userData.email}
            username={userData.username}
          />
        )}
      </main>
    </>
  );
};

export default Dashboard;
