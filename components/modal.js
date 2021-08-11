import { XIcon } from "@heroicons/react/solid";
import { useEffect, useRef } from "react";
import Button from "./button";

const Modal = ({ children, active, header, close }) => {
  const ref = useRef();
  if (!active) return <></>;
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 overflow-scroll z-10"
      onClick={(e) => {
        if (ref.current && !ref.current?.contains(e.target)) close();
      }}
    >
      <div
        className="w-full lg:1/2 lg:max-w-lg min-h-screen lg:min-h-0 bg-gray-100 mx-auto lg:mt-40 lg:rounded-xl overflow-hidden lg:bg-white lg:p-4"
        ref={ref}
      >
        <div className="flex items-center mb-2 bg-white p-4 lg:mb-0 lg:border-b lg:p-2">
          <div className="text-2xl font-bold">{header}</div>
          <div className="ml-auto">
            <Button
              className="bg-transparent border-none hover:bg-gray-200"
              onClick={close}
            >
              <XIcon className="h-6 w-6 text-gray-400"></XIcon>
            </Button>
          </div>
        </div>
        <div className="p-4 lg:p-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
