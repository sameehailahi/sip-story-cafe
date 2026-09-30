import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.join(__dirname, "messages.json");
const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");

  if (!name || name.trim().length < 2 || !emailOk || !message || message.trim().length < 5) {
    return res.status(400).json({ ok: false, error: "Please fill in all fields correctly." });
  }

  let messages = [];
  try {
    if (fs.existsSync(FILE)) messages = JSON.parse(fs.readFileSync(FILE, "utf8"));
  } catch {
    messages = [];
  }

  messages.push({
    id: Date.now(),
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  });

  fs.writeFileSync(FILE, JSON.stringify(messages, null, 2));
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Sip Story server running on http://localhost:${PORT}`));