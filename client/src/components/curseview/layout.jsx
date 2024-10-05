import { Outlet } from "react-router-dom";
import CurseHeader from "./header";

function CurseLayout() {
  return (
    <div>
      <div className="flex flex-col bg-inherit overflow-hidden">
        {/* common header */}
        <CurseHeader/>
        <main className="flex flex-col w-full">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default CurseLayout;
