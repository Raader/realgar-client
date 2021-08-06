import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar></Navbar>
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
