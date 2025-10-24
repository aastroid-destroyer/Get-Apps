import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Mainlayout from "../Layouts/Mainlayout";
import AllApps from "../pages/AllApps";
import ViewFullApp from "../pages/ViewFullApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children:[
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/allapps",
        element:<AllApps/>
      },
      {
        path:"/appDetails/:id",
        element:<ViewFullApp/>
      }
    ]
  },
]);

export default router;