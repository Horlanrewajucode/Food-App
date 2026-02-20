import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
