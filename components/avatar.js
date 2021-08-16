import { UserIcon } from "@heroicons/react/outline";

const Avatar = ({ className }) => {
  return (
    <div
      className={
        "p-1 bg-gray-200 rounded-full border text-gray-400 overflow-hidden" +
        " " +
        className
      }
    >
      <UserIcon className=""></UserIcon>
    </div>
  );
};

export default Avatar;
