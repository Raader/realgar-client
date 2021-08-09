import { UserIcon } from "@heroicons/react/outline";

const Avatar = () => {
  return (
    <div className="p-1 bg-gray-200 rounded-full border text-gray-500 w-6 h-6 overflow-hidden">
      <UserIcon className=""></UserIcon>
    </div>
  );
};

export default Avatar;
