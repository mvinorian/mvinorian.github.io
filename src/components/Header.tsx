import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
  return (
    <section className="bg-transparant flex flex-col justify-center items-start w-full h-screen">
      <h1 className="font-poppins font-extrabold md:text-6xl text-5xl text-accent leading-normal">
        Hi There! <br />
        You can call me <span className="text-gradient">Vino</span>
      </h1>

      <p className="font-poppins text-sm text-accent leading-relaxed max-w-lg mt-8">
        I&apos;m an Informatics Engineering Student at Sepuluh Nopember
        Institute of Technology, Surabaya. Currently learning to work with React
        Ecosystem.
      </p>

      <Button href="/about" className="mt-8">
        Learn more about me
      </Button>

      <div className="flex flex-row justify-start items-center mt-8">
        <Link
          href="mailto:vinorianmuhammad@gmail.com"
          className="flex justify-start items-center font-poppins text-sm text-accent hover:text-secondary"
        >
          <Image src="/icons/gmail.svg" alt="" width={24} height={24} />
          <p className="ml-2 underline underline-offset-4">Contact me!</p>
        </Link>

        <Link
          href="https://github.com/mvinorian"
          className="flex justify-start items-center font-poppins text-sm text-accent hover:text-secondary ml-4"
        >
          <Image src="/icons/github.svg" alt="" width={24} height={24} />
          <p className="ml-2 underline underline-offset-4">mvinorian</p>
        </Link>
      </div>
    </section>
  );
}
