import DashBoardView from "./Components/DashBoardView";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] ">
        <Sidebar />
      </div>
      {/* <div className="basis-[88%] h-[100vh] overflow-y-auto">
        <DashBoardView />
        <div>
          <Outlet />
        </div>
      </div> */}
    </div>
  );
}
