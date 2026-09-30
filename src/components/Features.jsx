import { features } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <Reveal className="center">
          <h2 className="intro-title">Made for slow mornings, good conversations and everything in between.</h2>
        </Reveal>
        <div className="grid-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <article className="card feature-card">
                <span className="feature-icon" aria-hidden="true">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}