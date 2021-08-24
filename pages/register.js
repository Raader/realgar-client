import Brand from "../components/brand";
import Card from "../components/common/card";
import Hero from "../components/hero";
import RegisterForm from "../components/register_form";

const Login = () => {
  return (
    <div className="lg:h-screen bg-gray-50 pb-8 lg:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-5 items-center max-w-4xl mx-auto py-10 px-4 h-5/6">
        <div className="col-span-3 mb-4">
          <Hero>
            <div>
              <Brand height={80} width={300}></Brand>
            </div>
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
        <div className="md:w-96 col-span-2 xl:col-span-1">
          <Card>
            <RegisterForm></RegisterForm>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
