import { useRoutes } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Home from '../components/home/Home';

const ApplicationRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    
  ]);

  return routes;
};

export default ApplicationRouter;
