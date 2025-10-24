import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Mainlayout from "../Layouts/Mainlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children:[
      {
        index: true,
        element:<Home/>
      }
    ]
  },
]);

export default router;