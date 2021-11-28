import * as PATHS from "../utils/paths";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import SignUp from "../pages/SignUp";

const routes = (props) => {
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.SIGNUP,
      element: <SignUp {...props} />,
    },
    {
      path: PATHS.LOGIN,
      element: <Login {...props} />,
    },
  ];
};

export default routes;
