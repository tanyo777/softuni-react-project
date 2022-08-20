import { useRoutes } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Home from "../components/home/Home";
import Dashboard from "../components/dashboard/Dashboard";
import NotFound from "../components/404/404";
import ProtectedRoute from "../common/ProtectedRoute";

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
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

export default ApplicationRouter;
