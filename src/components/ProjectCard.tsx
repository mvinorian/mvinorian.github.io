import Link from "next/link";
import { ReactNode } from "react";

type ProjectCardProps = {
  image: string;
  title: string;
  techs: string[];
  children: ReactNode;
  live: string | null;
  repository: string;
};

export default function ProjectCard({
  image,
  title,
  techs,
  children,
  live,
  repository,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between items-start min-w-fit rounded-sm outline outline-1 outline-accent">
      <img src={image} alt="" className="w-80 object-contain" />

      <div className="flex flex-col justify-start items-start mx-4 my-4">
        <div className="flex flex-row justify-start items-center">
          <h3 className="font-poppins font-semibold text-lg text-accent leading-relaxed mr-2">
            {title}
          </h3>

          {techs.map((tech) => (
            <img src={tech} alt="" className="ml-2" />
          ))}
        </div>

        <p className="font-poppins text-sm text-accent leading-relaxed max-w-[18rem] mt-2">
          {children}
        </p>
      </div>

      <div className="flex flex-row justify-start items-start m-4">
        <Link
          href={repository}
          className="flex justify-start items-center font-poppins text-sm text-accent hover:text-secondary"
        >
          <img src="/icons/github.svg" alt="" />
          <p className="ml-2 underline underline-offset-4">Repository</p>
        </Link>

        <Link
          href={live === null ? "" : live}
          className={`${
            live === null ? "hidden" : "flex"
          } justify-start items-center font-poppins text-sm text-accent hover:text-secondary ml-4`}
        >
          <img src="/icons/page.svg" alt="" />
          <p className="ml-2 underline underline-offset-4">Open Live Site</p>
        </Link>
      </div>
    </div>
  );
}
