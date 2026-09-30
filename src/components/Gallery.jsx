import { useEffect, useState } from "react";
import { backgrounds, gallery } from "../data.js";
import Img from "./Img.jsx";
import Reveal from "./Reveal.jsx";

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section id="gallery" className="section bg-section" style={{ "--bg": `url(${backgrounds.gallery})` }}>
      <div className="container">
        <Reveal className="center">
          <p className="eyebrow">Gallery</p>
          <h2>A glimpse of Sip Story</h2>
          <p className="lead">Little moments, warm corners and everything we love about café life.</p>
        </Reveal>

        <div className="masonry">
          {gallery.map((g) => (
            <button
              key={g.alt}
              className={`gallery-item ${g.tall ? "tall" : ""}`}
              onClick={() => setSelected(g)}
              aria-label={`Open photo: ${g.alt}`}
            >
              <Img src={g.img} alt={g.alt} />
              <span className="gallery-overlay">
                <span>{g.alt}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.alt} onClick={() => setSelected(null)}>
          <button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close photo">×</button>
          <img src={selected.img.replace("w=800", "w=1400")} alt={selected.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}