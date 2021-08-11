import Card from "./card";
import {
  CashIcon,
  CurrencyDollarIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";
import Dropdown from "./dropdown";
import Button from "./button";
import ClearButton from "./clear_button";
import PaymentDropdown from "./payment_dropdown";
import IconText from "./icon_text";
import PaymentHeader from "./payment_header";

const Payment = ({ payment, className, icon, onDelete }) => {
  return (
    <Card className={"grid grid-rows-2 p-4 gap-2 rounded-lg" + " " + className}>
      <PaymentHeader icon={icon} payment={payment} onDelete={onDelete}>
        <PaymentDropdown
          payment={payment}
          onDelete={onDelete}
        ></PaymentDropdown>
      </PaymentHeader>
      <div className="text-4xl flex flex-row items-baseline font-extrabold space-x-2 text-gray-700">
        <div>{payment?.price}</div>
        <div className="text-xs font-semibold text-gray-500">
          {payment?.currency}
          <span className=""> / {payment?.type}</span>
        </div>
      </div>
    </Card>
  );
};

export default Payment;
