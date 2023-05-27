import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";

const App = (): JSX.Element => {
  return (
    <>
      <>
        <ToastContainer />
        <Header />
        <div className="w-11/12 mx-auto">
          <Outlet />
        </div>
      </>
    </>
  );
};

export default App;
