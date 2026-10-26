
import { createBrowserRouter } from "react-router";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BookingPage from "./pages/BookingPage";
import BookingPage1 from "./pages/BookingPage1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookingPage1 />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

export default router;
