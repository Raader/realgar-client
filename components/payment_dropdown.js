import { DotsVerticalIcon } from "@heroicons/react/solid";
import { remove } from "../lib/api";
import ClearButton from "./clear_button";
import Dropdown from "./dropdown";

const PaymentDropdown = ({ payment, onDelete }) => {
  const deletePayment = () => {
    remove("/user/payments/" + payment?.id)
      .then(() => onDelete?.())
      .catch();
  };

  return (
    <Dropdown
      label={
        <ClearButton>
          <DotsVerticalIcon className="w-5 h-5"></DotsVerticalIcon>
        </ClearButton>
      }
    >
      <ClearButton>Edit</ClearButton>
      <ClearButton onClick={deletePayment}>Delete</ClearButton>
    </Dropdown>
  );
};

export default PaymentDropdown;
