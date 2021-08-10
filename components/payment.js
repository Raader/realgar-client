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

const Payment = ({ name, price, currency, className, icon, type }) => {
  return (
    <Card className={"grid grid-rows-2 p-4 gap-2 rounded-lg" + " " + className}>
      <div className="flex items-center">
        {icon}
        <p className="text-lg text-gray-600 whitespace-nowrap ml-2 w-44 sm:w-52 truncate">
          {name}
        </p>
        <div className="ml-auto">
          <PaymentDropdown></PaymentDropdown>
        </div>
      </div>

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
