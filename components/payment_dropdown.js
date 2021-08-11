import {
  DotsVerticalIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { patch, remove } from "../lib/api";
import ClearButton from "./clear_button";
import Dropdown from "./dropdown";
import IconText from "./icon_text";
import Modal from "./modal";
import PaymentForm from "./payment_form";

const PaymentDropdown = ({ onDelete, onEdit }) => {
  return (
    <Dropdown
      label={
        <ClearButton>
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
