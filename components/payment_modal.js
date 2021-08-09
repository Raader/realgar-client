import Modal from "./modal";
import PaymentForm from "./payment_form";

const PaymentModal = ({ active, close, onSubmit }) => {
  return (
    <Modal active={active} header="Add a subscription" close={close}>
      <PaymentForm
        onSubmit={(e) => {
          close();
          onSubmit(e);
        }}
      ></PaymentForm>
    </Modal>
  );
};

export default PaymentModal;
