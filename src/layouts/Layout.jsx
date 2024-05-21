import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <header>
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Batch 13 Management
        </h1>
      </header>
      <div className="w-[1200px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
