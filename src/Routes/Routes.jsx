import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Mainlayout from "../Layouts/Mainlayout";
import AllApps from "../pages/AllApps";

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
      }
    ]
  },
]);

export default router;