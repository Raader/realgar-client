import { DotsVerticalIcon } from "@heroicons/react/solid";
import ClearButton from "./clear_button";
import Dropdown from "./dropdown";

const PaymentDropdown = () => {
  return (
    <Dropdown
      label={
        <ClearButton>
          <DotsVerticalIcon className="w-5 h-5"></DotsVerticalIcon>
        </ClearButton>
      }
    >
      <ClearButton>Edit</ClearButton>
      <ClearButton>Delete</ClearButton>
    </Dropdown>
  );
};

export default PaymentDropdown;
