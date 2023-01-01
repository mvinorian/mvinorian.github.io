import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type ExperienceProps = {
  image: string;
  title: string;
  date: string;
  children: ReactNode;
  techs: string[];
};

export default function Experience({
  image,
  title,
  date,
  children,
  techs,
}: ExperienceProps) {
  return (
    <div className="flex flex-col justify-start w-full rounded-md outline outline-1 outline-gray-700">
      <Image
        src={image}
        alt=""
        width={536}
        height={312}
        className="w-full object-contain"
      />

      <div className="flex flex-col justify-between items-start h-full p-4">
        <div className="flex flex-col justify-start items-start">
          <h3 className="font-poppins font-semibold text-lg text-accent leading-relaxed">
            {title}
          </h3>

          <h4 className="font-poppins font-medium text-sm text-accent leading-relaxed mt-2">
            {date}
          </h4>

          <p className="flex-1 font-poppins text-sm text-accent leading-relaxed mt-2">
            {children}
          </p>
        </div>

        <div className="flex flex-row justify-start items-center mt-6">
          <p className="font-poppins text-sm text-accent leading-relaxed mr-2">
            Skills:
          </p>

          {techs.map((tech, index) => (
            <Image
              key={index}
              src={tech}
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 object-contain ml-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
