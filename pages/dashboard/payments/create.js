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
  const [formErrors, setFormErrors] = useState([]);

  const handleSubmit = (payment) => {
    post("/user/payments", payment)
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

  useEffect(() => {
    get("/templates")
      .then((data) => setTemplates(data))
      .catch(console.error);
  }, []);

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
          <Label>Templates</Label>
          <div className=" overflow-x-auto whitespace-nowrap py-4 mb-2 -mx-4">
            {templates.map((template) => (
              <Card key={template.name} className="w-[300px] inline-block mx-2">
                <IconText icon={brandIcons[template.icon]}>
                  <h3 className="text-2xl">{template.name}</h3>
                </IconText>
                <div className="flex space-x-1 items-baseline mt-2">
                  <div className="text-xl font-extrabold text-gray-800">
                    {template.price}
                  </div>
                  <div className="text-xs text-gray-500">
                    {user?.settings?.currency} /{" "}
                    {template.type === "monthly" ? "per month" : "per year"}
                  </div>
                </div>
                <div className="mt-2">
                  <Button
                    block
                    className="!bg-gray-50 hover:!bg-gray-100"
                    onClick={() => {
                      setPayment(template);
                      setFormErrors([]);
                    }}
                  >
                    Select This Template
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <PaymentForm
            payment={payment}
            submitText="Create"
            onSubmit={handleSubmit}
            errors={formErrors}
          ></PaymentForm>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePage;
