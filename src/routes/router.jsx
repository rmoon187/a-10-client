import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
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




const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/all-sports',
                element: <AllSportsEquipment></AllSportsEquipment>,
            },
            {
                path: '/add-equipment',
                element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>,
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateEquipment></UpdateEquipment></PrivateRoute>,
            },

            {
                path: '/my-equipment',
                element: <PrivateRoute><MyEquipmentList></MyEquipmentList></PrivateRoute>,
            },
        ]
    }
])

export default router;