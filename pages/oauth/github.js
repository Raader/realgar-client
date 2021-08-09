import { useRouter } from "next/router";
import { useEffect } from "react";
import { post } from "../../lib/api";

const Github = ({}) => {
  const router = useRouter();

  useEffect(() => {
    if (!router.query.code) return;
    post(`/oauth/github?code=${router.query?.code}`).finally(() =>
      router.push("/")
    );
  }, [router]);

  return <div></div>;
};

export default Github;
