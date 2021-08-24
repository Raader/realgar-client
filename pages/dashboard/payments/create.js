import PaymentForm from "../../../components/payment_form";
import Layout from "../../../components/layout";
import BreadCrumb from "../../../components/common/crumb";
import { useRouter } from "next/dist/client/router";
import { post } from "../../../lib/api";

const CreatePage = () => {
  const router = useRouter();

  const handleSubmit = (payment) => {
    post("/user/payments", payment)
      .then(() => router.push("/dashboard"))
      .catch((err) => console.error(err));
  };
  return (
    <Layout>
      <div className="max-w-lg mx-auto">
        <BreadCrumb
          links={[
            { name: "Dashboard", href: "/dashboard" },
            { name: "Payments", href: "/dashboard/payments" },
            { name: "Create Payment" },
          ]}
        ></BreadCrumb>
      </div>
      <div className="max-w-lg mx-auto">
        <div className="py-4">
          <PaymentForm
            submitText="Create"
            onSubmit={handleSubmit}
          ></PaymentForm>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePage;
