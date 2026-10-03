import personal from "../data/personal.json";
import site from "../data/site.json";

const About = () => {
  return (
    <section
      className="content-section page-width"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="section-heading">
        <p className="eyebrow">01 / {site.sectionMarkers[0]}</p>
        <h2 id="about-title">{personal.aboutTitle}</h2>
      </div>
      <div className="about-copy">
        {personal.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
