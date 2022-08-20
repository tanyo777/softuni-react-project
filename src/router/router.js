import { useRoutes } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Home from "../components/home/Home";
import Dashboard from "../components/dashboard/Dashboard";
import NotFound from "../components/404/404";
import ProtectedRoute from "../common/ProtectedRoute";
import Cars from "../components/cars/Cars";
import CarDetails from "../components/cars/Details";
import CreateCarComponent from "../components/cars/CreateCar";

const ApplicationRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/cars",
      element: (
        <ProtectedRoute>
          <Cars />
        </ProtectedRoute>
      ),
    },
    {
      path: "/cars/:id",
      element: (
        <ProtectedRoute>
          <CarDetails />
        </ProtectedRoute>
      ),
    },
    {
      path: "/cars/create",
      element: (
        <ProtectedRoute>
          <CreateCarComponent />
        </ProtectedRoute>
      ),
    },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

export default ApplicationRouter;
