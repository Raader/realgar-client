import AppBar from "./app_bar";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children, user }) => {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <AppBar user={user}></AppBar>
      <div className="container mx-auto p-4">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
