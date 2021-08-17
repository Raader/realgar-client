import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="p-4 mx-auto max-w-4xl text-gray-400">
        <div className="grid grid-cols-1 lg:grid-cols-3 space-y-4 lg:space-x-16 lg:space-y-0 py-8">
          <div>
            <h2 className="font-bold text-xl text-gray-300">Realgar</h2>
            Realgar is a free and open source tool for managing, tracking
            subcriptions and recurring payments.
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-300">Site Links</h3>
            <div>
              <Link href="/">
                <a className="hover:text-black">Home</a>
              </Link>
            </div>
            <div>
              <Link href="/about">
                <a className=" hover:text-black">About</a>
              </Link>
            </div>
            <div>
              <Link href="/dasboard">
                <a className=" hover:text-black">Dashboard</a>
              </Link>
            </div>
            <div>
              <Link href="/login">
                <a className=" hover:text-black">Login</a>
              </Link>
            </div>
            <div>
              <Link href="/register">
                <a className=" hover:text-black">Sign Up</a>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-300">
              External Links
            </h3>
            <div>
              <a className=" hover:text-black" href="#">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="text-center my-4 border-t py-4">
          Made By{" "}
          <a href="$" className="text-green-400 hover:text-green-300">
            Raader
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
