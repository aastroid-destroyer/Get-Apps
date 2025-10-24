import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Mainlayout from "../Layouts/Mainlayout";
import AllApps from "../pages/AllApps";
import ViewFullApp from "../pages/ViewFullApp";
import InstalledApps from "../pages/InstalledApps";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement:<NotFound/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "allapps",
        element: <AllApps />,
      },
      {
        path: "appDetails/:id",
        element: <ViewFullApp />,
      },
      {
        path: "installation",
        element: <InstalledApps />,
      },
    ],
  },
]);

export default router;
