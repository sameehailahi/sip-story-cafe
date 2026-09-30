import { useState } from "react";
import { backgrounds, categories, menuItems } from "../data.js";
import Img from "./Img.jsx";
import Reveal from "./Reveal.jsx";

export default function Menu() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? menuItems : menuItems.filter((m) => m.category === active);

  return (
    <section id="menu" className="section bg-section" style={{ "--bg": `url(${backgrounds.menu})` }}>
      <div className="container">
        <Reveal className="center">
          <p className="eyebrow">Our Menu</p>
          <h2>
            Good coffee.
            <br />
            Good food.
            <br />
            Good moments.
          </h2>
          <p className="lead">Simple ingredients, comforting flavours and your favourite café classics.</p>
        </Reveal>

        <div className="tabs" role="tablist" aria-label="Menu categories">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              className={`tab ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {items.map((item) => (
            <article key={item.name} className="card menu-card">
              <div className="menu-img">
                <Img src={item.img} alt={`${item.name} at Sip Story`} />
              </div>
              <div className="menu-body">
                <span className="tag">{item.category}</span>
                <div className="menu-row">
                  <h3>{item.name}</h3>
                  <span className="price">₹{item.price}</span>
                </div>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}