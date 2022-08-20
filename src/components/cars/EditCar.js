import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProtectedNavigation from "../navbars/ProtectedNavbar";
import { getCarById } from "../../services/carService";
import CircularLoader from "../loaders/CircularLoader";
import EditCarContent from "./EditCarContent";

const EditCar = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [car, setCar] = useState({});

  useEffect(() => {
    getCarById(params.id).then((res) => {
      setCar(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <ProtectedNavigation />
      <main>
        {isLoading && <CircularLoader />}
        {!isLoading && <EditCarContent {...car} />}
      </main>
    </>
  );
};

export default EditCar;
