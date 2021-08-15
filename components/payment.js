import Card from "./card";
import {
  CashIcon,
  CurrencyDollarIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";
import { CalendarIcon } from "@heroicons/react/outline";
import Dropdown from "./dropdown";
import Button from "./button";
import ClearButton from "./clear_button";
import PaymentDropdown from "./payment_dropdown";
import IconText from "./icon_text";
import PaymentHeader from "./payment_header";

function calculateNextPayment({ startingDate, type }) {
  const firstDate = new Date(startingDate);
  if (type === "monthly") {
    const day = firstDate.getDate();
    firstDate.setDate(day + 30);
  } else {
    const year = firstDate.getFullYear();
    firstDate.setFullYear(year + 1);
  }
  return firstDate;
}

function differenceInDays(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const difference = Math.abs(date2.getTime() - date1.getTime());
  return Math.floor(difference / 1000 / 60 / 60 / 24);
}

const Payment = ({ payment, className, icon, onDelete, onEdit }) => {
  return (
    <Card
      className={
        "p-4 rounded-lg animate__animated animate__fadeIn" + " " + className
      }
    >
      <div className="grid grid-rows-2 gap-2">
        <PaymentHeader icon={icon} payment={payment} onDelete={onDelete}>
          <PaymentDropdown
            payment={payment}
            onDelete={onDelete}
            onEdit={onEdit}
          ></PaymentDropdown>
        </PaymentHeader>
        <div className="text-4xl flex flex-row items-baseline font-extrabold space-x-2 text-gray-700 overflow-x-auto">
          <div>{payment?.price}</div>
          <div className="text-xs font-semibold text-gray-500 whitespace-nowrap">
            {payment?.currency || "TRY"}
            <span className=""> / {payment?.type}</span>
          </div>
        </div>
      </div>
      <div className="text-gray-500 pt-2 flex justify-between border-t mt-2">
        <div className="text-gray-600 font-semibold">
          {differenceInDays(Date.now(), calculateNextPayment(payment))} days
          left
        </div>
        <IconText icon={<CalendarIcon className="h-5 w-5"></CalendarIcon>}>
          {calculateNextPayment(payment).toLocaleDateString()}
        </IconText>
      </div>
    </Card>
  );
};

export default Payment;
