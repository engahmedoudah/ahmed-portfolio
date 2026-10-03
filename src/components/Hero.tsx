
import { ArrowDownToLine } from "lucide-react";
import education from "../data/education.json";
import personal from "../data/personal.json";
import projects from "../data/projects.json";
import site from "../data/site.json";
import skills from "../data/skills.json";
import cvUrl from "../assets/cv/Ahmed-Al-Ghamdi-CV.pdf?url";

const Hero = () => {
  const stats = [projects.items.length, skills.items.length, education.items.length];

  return (
    <section className="hero page-width" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-mark" />{site.heroKicker}</p>
        <h1 id="hero-title">{personal.name}</h1>
        <p className="hero-role">{personal.title}</p>
        <p className="hero-summary">{personal.summary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={cvUrl} download="Ahmed-Al-Ghamdi-CV.pdf">
            <ArrowDownToLine size={17} aria-hidden="true" />
            {site.downloadCv}
          </a>
        </div>
      </div>
      <aside className="profile-index" aria-label="Portfolio overview">
        <div className="profile-index-head">
          <span className="eyebrow">{site.profileIndex}</span>
        </div>
        <div className="index-monogram" aria-hidden="true">
          {personal.name.split(" ").map((part) => part[0]).join("")}
        </div>
        <div className="profile-stats">
          {site.stats.map((label, index) => (
            <div className="profile-stat" key={label}>
              <strong>{String(stats[index]).padStart(2, "0")}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <span className="profile-index-foot">{personal.title}</span>
      </aside>
    </section>
  );
};

export default Hero;
