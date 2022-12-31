import Button from "./Button";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

export default function Projects() {
  return (
    <section className="flex flex-col justify-start items-start pt-16 w-full">
      <h2 className="font-poppins font-extrabold text-3xl text-gradient tracking-wide">
        Featured Projects
      </h2>

      <div className="flex flex-wrap justify-start items-stretch w-full mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project}>
            {project.content}
          </ProjectCard>
        ))}
      </div>

      <Button href="/projects" className="mt-8">
        See more project
      </Button>
    </section>
  );
}
