import Modal from "./modal";
import PaymentForm from "./payment_form";

const PaymentModal = ({ active, close }) => {
  return (
    <Modal active={active} header="Add a subscription" close={close}>
      <PaymentForm></PaymentForm>
    </Modal>
  );
};

export default PaymentModal;
