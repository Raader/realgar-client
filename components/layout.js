import AppBar from "./app_bar";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <AppBar></AppBar>
      <div className="container mx-auto p-4 w-full overflow-x-hidden">
        <div className="layout-animation">{children}</div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
