import { useParams } from "react-router-dom";
import { getCarById } from "../../services/carService";
import { useEffect, useState } from "react";
import ProtectedNavigation from "../navbars/ProtectedNavbar";
import CarDetailsContent from "./DetailsContent";
import CircularLoader from "../loaders/CircularLoader";

const CarDetails = () => {

    const params = useParams();
    const [car, setCar] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCarById(params.id).then(res => {
            console.log(res);
            setCar(res);
            setIsLoading(false);
        });
    }, []);

    return(
        <>
        <ProtectedNavigation />
        <main>
            {isLoading && <CircularLoader />}
            {!isLoading && <CarDetailsContent {...car}/>}
        </main>
        </>
    );
};

export default CarDetails;