import Head from "next/head";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { get } from "../lib/api";
import "../styles/global.css";
import "animate.css";
import UserContext from "../components/user_context";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();

  useEffect(() => {
    if (user) return;
    get("/user")
      .then((user) => setUser(user))
      .catch((err) => {
        if (err.response?.status === 401) return;
      });
  }, [Component, user]);

  return (
    <>
      <Head>
        <title>Realgar</title>
        <meta
          name="description"
          content="Realgar is a free and open source tool for managing, tracking
            subcriptions and recurring payments."
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        ></meta>
      </Head>
      <UserContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
