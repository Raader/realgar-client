import PaymentForm from "../../../components/payment_form";
import Layout from "../../../components/layout";
import BreadCrumb from "../../../components/common/crumb";
import { useRouter } from "next/dist/client/router";
import { get, post } from "../../../lib/api";
import { useContext, useEffect, useState } from "react";
import SelectInput from "../../../components/common/select_input";
import Card from "../../../components/common/card";
import brandIcons from "../../../components/icons/brand_icons";
import IconText from "../../../components/common/icon_text";
import UserContext from "../../../components/user_context";
import Label from "../../../components/common/label";
import Button from "../../../components/common/button";
import ClearButton from "../../../components/common/clear_button";

const CreatePage = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const [templates, setTemplates] = useState([]);
  const [payment, setPayment] = useState();

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
            payment={payment}
            submitText="Create"
            onSubmit={handleSubmit}
          ></PaymentForm>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePage;
