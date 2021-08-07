import Card from "./card";
import { CashIcon, CurrencyDollarIcon } from "@heroicons/react/solid";

const Payment = ({ name, price, currency, className, icon }) => {
  return (
    <Card
      className={
        "grid grid-rows-2 p-4 overflow-x-hidden gap-2 rounded-lg" +
        " " +
        className
      }
    >
      <div className="flex items-center space-x-2">
        {icon}
        <p className=" text-lg text-gray-600 whitespace-nowrap">{name}</p>
      </div>

      <div className="text-4xl flex flex-row items-baseline font-extrabold space-x-2 text-gray-700">
        <div>{price}</div>
        <div className="text-xs font-semibold text-gray-500">{currency}</div>
      </div>
    </Card>
  );
};

export default Payment;
