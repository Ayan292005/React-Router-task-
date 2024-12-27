
import AdminProducts from "../pages/admin/books"
import AdminRoot from "../pages/admin/books/AdminRoot"
import UserProducts from "../pages/user/books"
import UserRoot from "../pages/user/books/userRoot"
import Home from "../pages/user/home/home"
import Dashboard from "../pages/admin/dashboard"

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