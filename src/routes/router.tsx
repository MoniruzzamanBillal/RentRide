import App from "@/App";
import { AboutUs, CarDetail, HomePage } from "@/pages";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/detail/:id",
        element: <CarDetail />,
      },
      {
        path: "/about",
        element: <p>about us </p>,
      },
    ],
  },
]);

export default router;
