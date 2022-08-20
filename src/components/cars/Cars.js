import { useEffect, useState } from "react";
import { getCars } from "../../services/carService";
import ProtectedNavigation from "../navbars/ProtectedNavbar";
import Car from "./Car";
import styles from "./Cars.module.css";
import CircularLoader from "../loaders/CircularLoader";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCars().then((carsData) => {
      setCars(carsData);
      setIsLoading(false);
      console.log(carsData);
    });
  }, []);
  return (
    <>
      <ProtectedNavigation />
      <main className={styles.main}>
        {cars.length > 0 && (
          cars.map((car) => <Car {...car} key={car._id} />)
        )}
        {cars.length === 0 && isLoading === false && <h3>There are no cars added!</h3>}
        {isLoading && cars.length === 0 && <CircularLoader />}
      </main>
    </>
  );
};

export default Cars;
