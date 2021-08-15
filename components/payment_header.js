import PaymentDropdown from "./payment_dropdown";

const PaymentHeader = ({ icon, payment, children }) => {
  return (
    <div className="flex items-center">
      {icon}
      <div className="grid grid-cols-4 flex-grow items-center">
        <p className="text-lg text-gray-600 whitespace-nowrap ml-2 truncate col-span-3 font-bold">
          {payment?.name}
        </p>
        <div className="ml-auto">{children}</div>
      </div>
    </div>
  );
};

export default PaymentHeader;
