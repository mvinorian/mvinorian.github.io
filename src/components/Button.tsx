import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  className,
  children,
  href,
}: {
  className: string;
  children: ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`${className} flex justify-center items-center px-4 py-2 rounded-sm bg-primary outline outline-2 outline-secondary relative`}
    >
      <p className="font-poppins text-sm text-accent">{children}</p>

      <div className="absolute z-0 w-full h-full rounded-sm bg-transparent outline outline-2 outline-secondary hover:blur-md" />
    </Link>
  );
}
