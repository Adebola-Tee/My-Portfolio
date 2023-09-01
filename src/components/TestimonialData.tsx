import React from "react";
import Image from "next/image";

interface TestimonialProps {
  companyName: string;
  desc: string;
  img: string;
  name: string;
  designation: string;
}
const TestimonialData: React.FC<TestimonialProps> = ({
  companyName,
  desc,
  img,
  name,
  designation,
}) => {
  return (
    <div>
      <div className="border border-accent  container h-[450px] flex flex-col justify-between" data-aos="zoom-in-up">
        <h2 className="text-3xl text-accent">{companyName}</h2>
        <p>{desc}</p>
        <div className="flex gap-4">
          <Image className="grayscale rounded-full" src={img} height={40} width={40} alt='profile' />
          <div>
            <h2>{name}</h2>
            <p className="text-gray-500">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialData;
