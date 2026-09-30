import { useState } from "react";
import { backgrounds } from "../data.js";
import Reveal from "./Reveal.jsx";

const empty = { name: "", email: "", message: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Please enter a valid email.";
  if (v.message.trim().length < 5) e.message = "Please write a short message.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section bg-section" style={{ "--bg": `url(${backgrounds.contact})` }}>
      <div className="container">
        <Reveal className="center">
          <p className="eyebrow">Contact</p>
          <h2>Let's make it a coffee moment.</h2>
          <p className="lead">
            Have a question, want to say hello, or simply looking for your next coffee spot? We'd love to
            hear from you.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="card info-card">
              <div className="info-block">
                <h3>Visit Us</h3>
                <p>Sip Story Café</p>
                <p>Chennai, Tamil Nadu</p>
              </div>
              <div className="info-block">
                <h3>Opening Hours</h3>
                <p><strong>Monday – Friday</strong><br />8:00 AM – 9:00 PM</p>
                <p><strong>Saturday – Sunday</strong><br />9:00 AM – 10:00 PM</p>
              </div>
              <div className="info-block">
                <h3>Email</h3>
                <p><a href="mailto:hello@sipstorycafe.com">hello@sipstorycafe.com</a></p>
              </div>
              <div className="info-block">
                <h3>Phone</h3>
                <p><a href="tel:+919876543210">+91 98765 43210</a></p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form className="card form-card" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" value={values.name} onChange={onChange} placeholder="Your name" autoComplete="name" aria-invalid={!!errors.name} />
                {errors.name && <span className="error" role="alert">{errors.name}</span>}
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={values.email} onChange={onChange} placeholder="you@example.com" autoComplete="email" aria-invalid={!!errors.email} />
                {errors.email && <span className="error" role="alert">{errors.email}</span>}
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={values.message} onChange={onChange} placeholder="Say hello..." aria-invalid={!!errors.message}></textarea>
                {errors.message && <span className="error" role="alert">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary full" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="notice success" role="status">Thank you! Your message has been sent. We'll be in touch soon. ☕</p>
              )}
              {status === "error" && (
                <p className="notice fail" role="alert">Something went wrong. Please make sure the server is running and try again.</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}