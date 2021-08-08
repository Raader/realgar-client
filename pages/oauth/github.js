import { useRouter } from "next/router";
import { useEffect } from "react";
import { postGithub } from "../../lib/api";

const Github = ({}) => {
  const router = useRouter();

  useEffect(() => {
    if (!router.query.code) return;
    postGithub(router.query?.code).finally(() => router.push("/"));
  }, [router]);

  return <div></div>;
};

export default Github;
