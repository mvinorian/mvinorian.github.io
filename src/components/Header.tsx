import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <section className="flex justify-between items-start py-16 w-full">
      <div className="flex-1 flex flex-col justify-center items-start">
        <h1 className="font-poppins font-extrabold text-5xl text-accent leading-snug">
          Hi There! <br />
          You can call me <span className="text-gradient">Vino</span>
        </h1>

        <p className="font-poppins text-sm text-accent leading-relaxed max-w-lg mt-8">
          I'm an Informatics Engineering Student at Sepuluh Nopember Institute
          of Technology, Surabaya. Currently learning to work with React
          Ecosystem.
        </p>

        <Button href="/about" className="mt-8">
          Learn more about me
        </Button>

        <div className="flex flex-row justify-start items-center mt-8">
          <Link
            href="vinorianmuhammad@gmail.com"
            className="flex justify-start items-center font-poppins text-sm text-accent hover:text-secondary"
          >
            <img src="/icons/gmail.svg" alt="" />
            <p className="ml-2 underline underline-offset-4">Contact me!</p>
          </Link>

          <Link
            href="https://github.com/mvinorian"
            className="flex justify-start items-center font-poppins text-sm text-accent hover:text-secondary ml-4"
          >
            <img src="/icons/github.svg" alt="" />
            <p className="ml-2 underline underline-offset-4">mvinorian</p>
          </Link>
        </div>
      </div>

      <img
        src="/image/background.png"
        alt=""
        className="relative w-5/12 md:-right-28 sm:-right-16 -right-8 object-contain"
      />
    </section>
  );
}
