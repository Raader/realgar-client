import Card from "../../components/card";
import Layout from "../../components/layout";
import PaymentForm from "../../components/payment_form";

const AddPage = () => {
  return (
    <Layout>
      <Card>
        <PaymentForm></PaymentForm>
      </Card>
    </Layout>
  );
};

export default AddPage;
