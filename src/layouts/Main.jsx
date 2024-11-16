import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Main() {
  return (
    <div>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
