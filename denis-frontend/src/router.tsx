import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Index from "./pages/Index";
import SingleGame from "./pages/SingleGame";
import AddGame from "./pages/AddGame";
import EditGame from "./pages/EditGame";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/game/:id",
        element: <SingleGame />,
      },
      {
        path: "/game/add",
        element: <AddGame />,
      },
      {
        path: "/game/edit/:id",
        element: <EditGame />,
      },
    ],
  },
]);

export default router;
