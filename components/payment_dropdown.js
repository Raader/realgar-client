import {
  DotsVerticalIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { remove } from "../lib/api";
import ClearButton from "./clear_button";
import Dropdown from "./dropdown";
import IconText from "./icon_text";

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
      <ClearButton>
        <IconText icon={<PencilAltIcon className="h-5 w-5"></PencilAltIcon>}>
          Edit
        </IconText>
      </ClearButton>
      <ClearButton onClick={deletePayment}>
        <IconText icon={<TrashIcon className="h-5 w-5"></TrashIcon>}>
          Delete
        </IconText>
      </ClearButton>
    </Dropdown>
  );
};

export default PaymentDropdown;
