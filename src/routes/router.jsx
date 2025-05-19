// src/routes/router.js
import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import DashboardLayout from "../MainLayout/DashboardLayout";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute";
import AddEquipment from "../pages/AddEquipment";
import AllSportsEquipment from "../pages/AllSportsEquipment";
import ViewDetails from "../pages/ViewDetails";
import MyEquipmentList from "../pages/MyEquipmentList";
import UpdateEquipment from "../pages/UpdateEquipment";
import NotFound from "../pages/NotFound";
import Overview from "../pages/dashboard/Overview";
import Profile from "../pages/dashboard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-sports",
        element: <AllSportsEquipment></AllSportsEquipment>,
      },
      {
        path: "/add-equipment",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateEquipment></UpdateEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-equipment",
        element: (
          <PrivateRoute>
            <MyEquipmentList></MyEquipmentList>
          </PrivateRoute>
        ),
      },
    ],
  },
  // Dashboard routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Overview />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "my-equipment",
        element: <MyEquipmentList />,
      },
      {
        path: "add-equipment",
        element: <AddEquipment />,
      },
    ],
  },
]);

export default router;