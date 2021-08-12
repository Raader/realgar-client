import { UserIcon } from "@heroicons/react/outline";

const Avatar = ({ className }) => {
  return (
    <div
      className={
        "p-1 bg-gray-200 rounded-full border text-gray-500 w-7 h-7 overflow-hidden lg:w-6 lg:h-6" +
        " " +
        className
      }
    >
      <UserIcon className=""></UserIcon>
    </div>
  );
};

export default Avatar;
