import axios from "axios";

const api = process.env.NEXT_PUBLIC_API;

export async function get(path, options) {
  const res = await axios.get(api + path, {
    withCredentials: true,
    ...options,
  });
  return res.data;
}

export async function post(path, body, options) {
  const res = await axios.post(api + path, body, {
    withCredentials: true,
    ...options,
  });
  return res.data;
}

export async function remove(path, options) {
  const res = await axios.delete(api + path, {
    withCredentials: true,
    ...options,
  });
  return res.data;
}
