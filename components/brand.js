import Image from "next/image";

const Brand = ({ height = 40, width = 200 }) => {
  return (
    <Image src="/logo.svg" height={height} width={width} alt="realgar"></Image>
  );
};

export default Brand;
