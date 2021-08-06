import Image from "next/image";

const Brand = ({ children }) => {
  return (
    <div className="font-bold text-4xl">
      <Image src="/logo.svg" height={40} width={180}></Image>
    </div>
  );
};

export default Brand;
