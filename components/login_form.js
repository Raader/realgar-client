import Button from "../components/button";
import Form from "../components/form";
import Input from "../components/input";
import PrimaryButton from "../components/primary_button";
import Image from "next/image";
import GoogleIcon from "./google_icon";
import GithubIcon from "./github_icon";
import AppleIcon from "./apple_icon";

const LoginForm = () => {
  return (
    <Form>
      <h2 className="text-2xl font-semibold m-2">Sign in to your Account</h2>
      <div>
        <Input placeholder="Email address" type="email"></Input>
      </div>
      <div>
        <Input placeholder="Password" type="password"></Input>
      </div>
      <PrimaryButton block>Log Me In</PrimaryButton>
      <div className="w-full border-b text-gray-500 mb-2 mt-2">OR</div>
      <Button block className="bg-blue-500 hover:bg-blue-600  text-white">
        <div className="flex flex-row items-center gap-2">
          <GoogleIcon className="w-5 h-5 inline-block"></GoogleIcon>
          <div>Continue With Google</div>
        </div>
      </Button>
      <Button block className="bg-black hover:bg-gray-700 text-white">
        <div className="flex flex-row items-center gap-2">
          <AppleIcon className="w-5 h-5 inline-block"></AppleIcon>
          <div>Continue With Apple</div>
        </div>
      </Button>
      <Button block className=" bg-purple-600 hover:bg-purple-700 text-white">
        <div className="flex flex-row items-center gap-2 text-center">
          <GithubIcon className="w-5 h-5 inline-block"></GithubIcon>
          <div>Continue With Github</div>
        </div>
      </Button>
      <div className="text-gray-400 m-2">
        Don't have an account? <a className="text-green-300">Sign up here</a>
      </div>
    </Form>
  );
};

export default LoginForm;
