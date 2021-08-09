import AppBar from "./app_bar";
import Navbar from "./navbar";

const Layout = ({ children, user }) => {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <AppBar user={user}></AppBar>
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
