import AppBar from "./app_bar";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen font-sans bg-gray-100">
      <AppBar></AppBar>
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
