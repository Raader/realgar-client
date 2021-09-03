import Image from "next/image";
import logo from "../public/logo.svg";
import IconText from "./common/icon_text";

const BrandIcon = ({ className }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 250 250"
      className={"fill-current" + " " + className}
    >
      <defs>
        <path
          d="M125 11.67L31.22 66.67L31.22 176.67L125 231.67L218.78 176.67L218.78 66.67L125 11.67Z"
          id="b3eVJassLK"
        ></path>
        <path
          d="M125 46.77L56.45 85.89L56.45 164.11L125 203.23L193.55 164.11L193.55 85.89L125 46.77Z"
          id="a1DeSKyYvg"
        ></path>
      </defs>
      <g>
        <g id="aq0ZT95W1">
          <use
            xlinkHref="#d2bBip0Tkp"
            opacity="1"
            fill="#374151"
            fillOpacity="1"
          ></use>
        </g>
        <g>
          <use
            xlinkHref="#b3eVJassLK"
            opacity="1"
            fill="#fde68a"
            fillOpacity="1"
          ></use>
        </g>
        <g>
          <use
            xlinkHref="#a1DeSKyYvg"
            opacity="1"
            fill="#34d399"
            fillOpacity="1"
          ></use>
        </g>
      </g>
    </svg>
  );
};
const Brand = ({ height = 40, width = 200 }) => {
  return (
    <IconText
      icon={<BrandIcon className="h-10 w-10 lg:w-12 lg:h-12"></BrandIcon>}
      className="font-sans font-extrabold text-gray-700 text-2xl lg:text-3xl"
    >
      Realgar
    </IconText>
  );
};

export default Brand;
