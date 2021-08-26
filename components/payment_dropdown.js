import {
  DotsVerticalIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import ClearButton from "./common/clear_button";
import Dropdown from "./common/dropdown";
import IconText from "./common/icon_text";

const PaymentDropdown = ({ onDelete, onEdit }) => {
  return (
    <Dropdown
      label={
        <ClearButton className="no-highlight">
          <DotsVerticalIcon className="w-5 h-5"></DotsVerticalIcon>
        </ClearButton>
      }
    >
      <ClearButton onClick={onEdit}>
        <IconText icon={<PencilAltIcon className="h-5 w-5"></PencilAltIcon>}>
          Edit
        </IconText>
      </ClearButton>
      <ClearButton onClick={onDelete}>
        <IconText icon={<TrashIcon className="h-5 w-5"></TrashIcon>}>
          Delete
        </IconText>
      </ClearButton>
    </Dropdown>
  );
};

export default PaymentDropdown;
