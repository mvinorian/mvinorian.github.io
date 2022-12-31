import Image from "next/image";
import { Experiences, Header, Projects } from "../components";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col justify-center items-end pr-[inherit] w-full h-screen absolute z-0">
        <Image
          src="/image/background.png"
          alt=""
          width={512}
          height={512}
          className="lg:w-96 md:w-80 w-64"
        />
      </div>

      <div className="relative z-10">
        <Header />
        <Projects />
      </div>
      {/* <Experiences /> */}
    </>
  );
}
