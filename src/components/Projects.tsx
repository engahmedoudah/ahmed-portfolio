import { ArrowUpRight, Github } from "lucide-react";
import projects from "../data/projects.json";
import site from "../data/site.json";

const Projects = () => {
  return (
    <section className="content-section section-rule page-width" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">03 / {site.sectionMarkers[2]}</p>
        <h2 id="projects-title">{projects.title}</h2>
      </div>
      <div className="project-list">
        {projects.items.map((project, index) => (
          <article className="project-row" key={project.name}>
            <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="project-main">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="technology-list" aria-label={`${project.name} technologies`}>
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
            {(project.github || project.demo) && (
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${site.githubAction}: ${project.name}`}>
                    <Github size={17} aria-hidden="true" />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${site.demoAction}: ${project.name}`}>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
