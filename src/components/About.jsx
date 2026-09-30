import { aboutImage, backgrounds, values } from "../data.js";
import Img from "./Img.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="section bg-section" style={{ "--bg": `url(${backgrounds.about})` }}>
      <div className="container">
        <div className="about-grid">
          <Reveal>
            <p className="eyebrow">About Us</p>
            <h2>
              A little café
              <br />
              with a lot of heart.
            </h2>
            <p className="lead">
              Sip Story was created as a small, welcoming space where good coffee, comforting food and
              meaningful moments come together.
            </p>
            <p className="lead">
              Whether you're starting your morning, catching up with a friend or simply taking a quiet
              break, there's always a seat waiting for you.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="story-card">
              <Img src={aboutImage} alt="A cozy corner at Sip Story café" />
              <div className="story-note">
                <h3>Our Story</h3>
                <p>One small table, one warm cup, and a lot of conversations that stayed with us.</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid-3 values">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <article className="card value-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}