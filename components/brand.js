import Image from "next/image";
import logo from "../public/logo.svg";

const Brand = ({ height = 40, width = 200 }) => {
  return (
    <Image
      src={logo}
      height={height}
      width={width}
      alt="realgar"
      priority={true}
    ></Image>
  );
};

export default Brand;
