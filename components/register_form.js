import Button from "./common/button";
import Form from "./common/form";
import Input from "./common/input";
import PrimaryButton from "./common/primary_button";
import GoogleIcon from "./icons/google_icon";
import GithubIcon from "./icons/github_icon";
import AppleIcon from "./icons/apple_icon";
import { useEffect, useState } from "react";
import { get, post } from "../lib/api";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const RegisterForm = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    post("/users", { username, email, password })
      .then(() => router.push("/"))
      .catch(console.error);
  };

  return (
    <Form className="text-center">
      <h2 className="text-2xl font-semibold m-4">Sign Up an Account</h2>
      <div>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
      </div>
      <div>
        <Input
          placeholder="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </div>
      <div>
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
      </div>
      <PrimaryButton block onClick={handleSubmit}>
        Sign Me Up
      </PrimaryButton>
      <div className="w-full border-b text-gray-500 mb-2 mt-2">OR</div>
      <Button block className="bg-blue-500 hover:!bg-blue-600  text-white">
        <div className="flex flex-row items-center space-x-2">
          <GoogleIcon className="w-5 h-5 inline-block"></GoogleIcon>
          <div>Continue With Google</div>
        </div>
      </Button>
      <Button block className="bg-gray-900 hover:!bg-gray-700 text-white">
        <div className="flex flex-row items-center space-x-2">
          <AppleIcon className="w-5 h-5 inline-block"></AppleIcon>
          <div>Continue With Apple</div>
        </div>
      </Button>
      <Button block className=" bg-purple-600 hover:!bg-purple-700 text-white">
        <a
          href="/api/oauth/github"
          className="flex flex-row items-center space-x-2 text-center"
        >
          <GithubIcon className="w-5 h-5 inline-block"></GithubIcon>
          <div>Continue With Github</div>
        </a>
      </Button>
      <div className="text-gray-400 m-2">
        Already have an account?{" "}
        <Link href="/login">
          <a className="text-green-300">Log in here</a>
        </Link>
      </div>
    </Form>
  );
};

export default RegisterForm;
