import { XIcon } from "@heroicons/react/solid";
import Button from "./button";

const Modal = ({ children, active, header }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-700 bg-opacity-30 overflow-scroll">
      <div className="w-full lg:w-1/2 xl:w-1/3 min-h-screen lg:min-h-0 bg-gray-100 mx-auto lg:mt-40 lg:rounded-md overflow-hidden lg:bg-white">
        <div className="flex items-center mb-2 bg-white p-4 lg:mb-0">
          <div className="text-2xl font-bold">{header}</div>
          <div className="ml-auto">
            <Button className="bg-transparent border-none hover:bg-gray-200">
              <XIcon className="h-6 w-6"></XIcon>
            </Button>
          </div>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
