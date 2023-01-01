import Button from "./Button";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../constants";

export default function Experiences() {
  return (
    <section className="flex flex-col justify-start items-start pt-16 w-full">
      <h2 className="font-poppins font-extrabold text-3xl text-gradient tracking-wide">
        Experiences
      </h2>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-4 w-full mt-8">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} {...experience}>
            {experience.content}
          </ExperienceCard>
        ))}
      </div>

      <Button href="/experiences" className="mt-8">
        See more experience
      </Button>
    </section>
  );
}
