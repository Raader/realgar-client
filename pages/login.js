import Button from "../components/button";
import Card from "../components/card";
import Form from "../components/form";
import Hero from "../components/hero";
import Input from "../components/input";
import Layout from "../components/layout";
import LoginForm from "../components/login_form";
import PrimaryButton from "../components/primary_button";

const Login = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-5 m-4">
        <div className="col-span-3 order-2 md:order-1">
          <Hero>
            <div className="max-w-md">
              <h1 className="text-3xl font-semibold mb-2">
                Never let subscription services get out of hand again.{" "}
              </h1>
              <h3 className="text-xl text-gray-400">
                <strong>Realgar</strong> tracks all your recurring payments,
                subscriptions and notifies you before every payment day.
              </h3>
            </div>
          </Hero>
        </div>
        <div className="md:w-96 col-span-2 xl:col-span-1 order-1 md:order-2">
          <Card>
            <LoginForm></LoginForm>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
