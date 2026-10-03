import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import social from "../data/social.json";
import site from "../data/site.json";

const SocialLinks = () => (
  <section className="content-section section-rule page-width" id="contact" aria-labelledby="contact-title">
    <div className="section-heading">
      <p className="eyebrow">05 / {site.sectionMarkers[4]}</p>
      <h2 id="contact-title">{social.title}</h2>
    </div>
    <div className="social-list">
      {social.links.map((link) => {
        const Icon = link.name === "GitHub" ? Github : link.name === "LinkedIn" ? Linkedin : Mail;
        const external = link.url.startsWith("https://");

        return (
          <a
            className="social-link"
            href={link.url}
            key={link.name}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
          >
            <span className="social-name"><Icon size={18} aria-hidden="true" />{link.name}</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  </section>
);

export default SocialLinks;
