import education from "../data/education.json";
import site from "../data/site.json";

const Education = () => (
  <section className="content-section section-rule page-width" id="education" aria-labelledby="education-title">
    <div className="section-heading">
      <p className="eyebrow">04 / {site.sectionMarkers[3]}</p>
      <h2 id="education-title">{education.title}</h2>
    </div>
    <div className="education-list">
      {education.items.map((item) => (
        <article className="education-row" key={`${item.program}-${item.institution}`}>
          <span className="education-mark" aria-hidden="true">CS</span>
          <div>
            <h3>{item.program}</h3>
            <p>{item.institution}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Education;
