import PaymentForm from "../../../components/payment_form";
import Layout from "../../../components/layout";
import BreadCrumb from "../../../components/common/crumb";
import { useRouter } from "next/dist/client/router";
import { get, patch } from "../../../lib/api";
import { useEffect, useState } from "react";

const EditPage = () => {
  const router = useRouter();
  const [payment, setPayment] = useState();
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    if (router?.query?.id) {
      get("/user/payments/" + router.query.id)
        .then((data) => setPayment(data))
        .catch(console.error);
    }
  }, [router.query]);

  const handleSubmit = (update) => {
    if (!payment) return;
    patch("/user/payments/" + payment.id, update)
      .then(() => router.push("/dashboard"))
      .catch((err) => {
        if (err.response.data.errors) {
          const errors = {};
          err.response.data.errors.forEach(
            (error) => (errors[error.field] = error.message)
          );
          setFormErrors(errors);
        }
      });
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto">
        <BreadCrumb
          links={[
            { name: "Dashboard", href: "/dashboard" },
            { name: "Payments", href: "/dashboard/payments" },
            { name: "Edit Payment" },
          ]}
        ></BreadCrumb>
      </div>
      <div className="max-w-lg mx-auto">
        <div className="py-4">
          <PaymentForm
            submitText="Update"
            onSubmit={handleSubmit}
            payment={payment}
            errors={formErrors}
          ></PaymentForm>
        </div>
      </div>
    </Layout>
  );
};

export default EditPage;
