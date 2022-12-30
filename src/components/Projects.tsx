import Button from "./Button";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

export default function Projects() {
  return (
    <section className="flex flex-col justify-start items-start pt-16 w-full">
      <h2 className="font-poppins font-extrabold text-3xl text-gradient tracking-wide">
        Featured Projects
      </h2>

      <ul className="flex flex-row justify-between items-start flex-wrap mt-8">
        {projects.map((project, index) => (
          <li
            key={project.id}
            className={`${index === 0 ? "ml-0" : "ml-2"} h-full`}
          >
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              techs={project.techs}
              live={project.live}
              repository={project.repository}
            >
              {project.content}
            </ProjectCard>
          </li>
        ))}
      </ul>

      <Button href="/projects" className="mt-8">
        See more project
      </Button>
    </section>
  );
}
