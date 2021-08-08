import axios from "axios";

const api = process.env.NEXT_PUBLIC_API;

export async function getUser() {
  const res = await axios.get(`${api}/user`, { withCredentials: true });
  return res.data;
}

export async function postGithub(code) {
  const res = await axios.post(
    `${api}/oauth/github?code=${code}`,
    {},
    {
      withCredentials: true,
    }
  );
  return res.data;
}
