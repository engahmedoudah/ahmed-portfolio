import skills from "../data/skills.json";
import site from "../data/site.json";

const Skills = () => {
  return (
    <section
      className="content-section section-rule page-width"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <p className="eyebrow">02 / {site.sectionMarkers[1]}</p>
        <h2 id="skills-title">{skills.title}</h2>
      </div>
      <ul className="skills-list">
        {skills.items.map((skill, index) => (
          <li key={skill}>
            <span className="skill-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
