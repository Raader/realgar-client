import Card from "./common/card";
import { CalendarIcon } from "@heroicons/react/outline";
import PaymentDropdown from "./payment_dropdown";
import IconText from "./common/icon_text";
import PaymentHeader from "./payment_header";
import { differenceInDays, formatDate } from "../lib/date_helper";

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
        <div className="text-4xl flex flex-row items-baseline font-extrabold space-x-2 text-gray-700 overflow-x-auto overflow-y-hidden">
          <div>{payment?.price}</div>
          <div className="text-xs font-semibold text-gray-500 whitespace-nowrap">
            {payment?.currency || "TRY"}
            <span className=""> / {payment?.type}</span>
          </div>
        </div>
      </div>
      <div className="text-gray-500 pt-2 flex justify-between border-t mt-2">
        <div className="text-gray-600 font-semibold">
          {differenceInDays(payment?.nextDate, Date.now())} days left
        </div>
        <IconText icon={<CalendarIcon className="h-5 w-5"></CalendarIcon>}>
          {formatDate(payment?.nextDate)}
        </IconText>
      </div>
    </Card>
  );
};

export default Payment;
