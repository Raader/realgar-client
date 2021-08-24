import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

const BreadCrumb = ({ links }) => {
  return (
    <div className="flex mb-2 w-full overflow-x-auto whitespace-nowrap">
      {links.map((link, index) =>
        index === links?.length - 1 ? (
          <div key={link.href} className="flex items-center">
            <div className="text-gray-500 font-semibold">{link.name}</div>
          </div>
        ) : (
          <div key={link.href} className="flex items-center">
            <Link href={link.href}>
              <a className="text-green-500 hover:text-green-400 ">
                {link.name}
              </a>
            </Link>
            <ChevronRightIcon className="h-6 w-6 text-gray-500"></ChevronRightIcon>
          </div>
        )
      )}
    </div>
  );
};

export default BreadCrumb;
