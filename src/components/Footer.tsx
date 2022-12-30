import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center pt-64">
      <p className="flex-1 font-poppins text-sm text-accent">
        Copyright © 2022 Muhammad Ersya Vinorian
      </p>

      <div className="flex justify-center items-center">
        <Link href="https://github.com/mvinorian/" className="mr-2">
          <img src="/icons/github.svg" alt="" />
        </Link>

        <Link href="https://www.linkedin.com/in/mvinorian/" className="mx-2">
          <img src="/icons/linkedin.svg" alt="" />
        </Link>

        <Link href="mailto:vinorianmuhammad@gmail.com" className="ml-2">
          <img src="/icons/gmail.svg" alt="" />
        </Link>
      </div>
    </footer>
  );
}
