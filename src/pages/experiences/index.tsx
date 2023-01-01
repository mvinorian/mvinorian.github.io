import { ExperienceCard } from "../../components";
import { experiences } from "../../constants";

export default function ExperiencesPage() {
  return (
    <section className="flex flex-col justify-center items-start mt-24 w-full">
      <h1 className="font-poppins font-extrabold text-5xl text-gradient leading-normal">
        Experiences
      </h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-4 w-full mt-8">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} {...experience}>
            {experience.content}
          </ExperienceCard>
        ))}
      </div>
    </section>
  );
}
