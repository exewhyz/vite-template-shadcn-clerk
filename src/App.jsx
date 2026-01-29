import { RouterProvider, createBrowserRouter } from "react-router";

import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "profile",
            element: (
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            ),
            children: [
              {
                path: "security",
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
