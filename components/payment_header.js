import PaymentDropdown from "./payment_dropdown";

const PaymentHeader = ({ name, icon }) => {
  return (
    <div className="flex items-center">
      {icon}
      <div className="grid grid-cols-4 flex-grow items-center">
        <p className="text-lg text-gray-600 whitespace-nowrap ml-2 truncate col-span-3">
          {name}
        </p>
        <div className="ml-auto">
          <PaymentDropdown></PaymentDropdown>
        </div>
      </div>
    </div>
  );
};

export default PaymentHeader;
