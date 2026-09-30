import { backgrounds } from "../data.js";

export default function Hero() {
  return (
    <section id="home" className="hero bg-section" style={{ "--bg": `url(${backgrounds.home})` }}>
      <div className="hero-blob blob-1" aria-hidden="true"></div>
      <div className="hero-blob blob-2" aria-hidden="true"></div>
      <div className="container hero-content">
        <p className="eyebrow hero-in" style={{ animationDelay: "0.05s" }}>Welcome to Sip Story</p>
        <h1 className="hero-in" style={{ animationDelay: "0.15s" }}>
          Every cup has a story.
          <br />
          Come find yours.
        </h1>
        <p className="hero-sub hero-in" style={{ animationDelay: "0.3s" }}>
          Warm coffee, comforting food and little moments worth remembering.
        </p>
        <div className="hero-buttons hero-in" style={{ animationDelay: "0.45s" }}>
          <a href="#menu" className="btn btn-primary">Explore Menu</a>
          <a href="#contact" className="btn btn-outline">Visit Us</a>
        </div>
      </div>
      <a href="#features" className="scroll-hint" aria-label="Scroll down">↓</a>
    </section>
  );
}