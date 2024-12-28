
import AdminProducts from "../pages/admin/books"
import AdminRoot from "../pages/admin/books/AdminRoot"
import UserProducts from "../pages/user/books"
import UserRoot from "../pages/user/books/userRoot"
import Home from "../pages/user/home/home"
import Dashboard from "../pages/admin/dashboard"
import Basket from "../pages/user/basket"
import Favorites from "../pages/user/favorites"

const Routes = [
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "/books",
                element: <UserProducts />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/basket",
                element: <Basket />,
            },
            {
                path: "/favorites",
                element: <Favorites />,
            }
        ]
    }
    ,
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path: "products",
                element: <AdminProducts/>,
            },
            {
                path: "dashboard",
                element: <Dashboard/>,
            }
        ]
    }
]
export default Routes