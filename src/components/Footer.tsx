import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center pt-64">
      <p className="flex-1 font-poppins text-sm text-accent">
        Copyright © 2022 Muhammad Ersya Vinorian
      </p>

      <div className="flex justify-center items-center">
        <Link href="https://github.com/mvinorian/" className="mr-2">
          <Image src="/icons/github.svg" alt="" width={24} height={24} />
        </Link>

        <Link href="https://www.linkedin.com/in/mvinorian/" className="mx-2">
          <Image src="/icons/linkedin.svg" alt="" width={24} height={24} />
        </Link>

        <Link href="mailto:vinorianmuhammad@gmail.com" className="ml-2">
          <Image src="/icons/gmail.svg" alt="" width={24} height={24} />
        </Link>
      </div>
    </footer>
  );
}
