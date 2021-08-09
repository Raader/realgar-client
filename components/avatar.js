import { UserIcon } from "@heroicons/react/outline";

const Avatar = () => {
  return (
    <div className="inline-block p-1 bg-gray-200 rounded-full border text-gray-600">
      <UserIcon className="w-5 h-5"></UserIcon>
    </div>
  );
};

export default Avatar;
