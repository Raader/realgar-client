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

const Payment = ({ name, price, currency, className, icon, type }) => {
  return (
    <Card className={"grid grid-rows-2 p-4 gap-2 rounded-lg" + " " + className}>
      <PaymentHeader icon={icon} name={name}></PaymentHeader>
      <div className="text-4xl flex flex-row items-baseline font-extrabold space-x-2 text-gray-700">
        <div>{price}</div>
        <div className="text-xs font-semibold text-gray-500">
          {currency}
          <span className=""> / {type}</span>
        </div>
      </div>
    </Card>
  );
};

export default Payment;
