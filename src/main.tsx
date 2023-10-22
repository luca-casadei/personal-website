import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GenericErrorPage from "./errors/GenericErrorPage";
import Home from "./routes/Home";
import ContactPage from "./routes/ContactPage";
import ProjectPage from "./routes/ProjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <GenericErrorPage />,
    children: [
      {
        errorElement: <GenericErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/contatti",
            element: <ContactPage />,
          },
          {
            path: "/progetti",
            element: <ProjectPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
