import Button from "../components/button";
import Form from "../components/form";
import Input from "../components/input";
import PrimaryButton from "../components/primary_button";

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
      <Button block>Continue With Google</Button>
      <Button block>Continue With Github</Button>
      <div className="text-gray-400 m-2">
        Don't have an account? <a className="text-green-300">Sign up here</a>
      </div>
    </Form>
  );
};

export default LoginForm;
