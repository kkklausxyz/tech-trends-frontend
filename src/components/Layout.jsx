import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full px-4 flex justify-center p-4">
        <div className="w-full max-w-[1000px]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
