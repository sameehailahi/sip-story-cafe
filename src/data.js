// Change any photo by replacing its ID (the part after "photo-").
const u = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const backgrounds = {
  home: u("1495474472287-4d71bcdd2085", 1600),
  menu: u("1447933601403-0c6688de566e", 1600),
  about: u("1554118811-1e0d58224f24", 1600),
  gallery: u("1442512595331-e89e73853f31", 1600),
  contact: u("1541167760496-1628856ab772", 1600),
};

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "Menu", id: "menu" },
  { label: "About Us", id: "about" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

export const features = [
  { icon: "☕", title: "Freshly Brewed", text: "Thoughtfully prepared coffee made fresh for you." },
  { icon: "🤍", title: "Made with Love", text: "Comforting food and drinks prepared with care." },
  { icon: "🌿", title: "Cozy Moments", text: "A little space to pause, relax and enjoy." },
];

export const categories = ["All", "Coffee", "Non-Coffee", "Food"];

export const menuItems = [
  { name: "Espresso", category: "Coffee", price: 120, text: "Rich, bold and beautifully simple.", img: u("1572442388796-11668a67e53d", 600) },
  { name: "Cappuccino", category: "Coffee", price: 150, text: "Smooth espresso with creamy steamed milk.", img: u("1517701550927-30cf4ba1dba5", 600) },
  { name: "Café Latte", category: "Coffee", price: 160, text: "Soft espresso balanced with silky milk.", img: u("1509042239860-f550ce710b93", 600) },
  { name: "Mocha", category: "Coffee", price: 180, text: "Chocolate, espresso and comfort in every sip.", img: u("1514432324607-a09d9b4aefdd", 600) },
  { name: "Hot Chocolate", category: "Non-Coffee", price: 170, text: "Warm, creamy and chocolatey.", img: u("1544787219-7f47ccb76574", 600) },
  { name: "Fresh Tea", category: "Non-Coffee", price: 110, text: "Light, soothing and refreshing.", img: u("1556679343-c7306c1976bc", 600) },
  { name: "Iced Tea", category: "Non-Coffee", price: 140, text: "Cool, refreshing and perfect for slow afternoons.", img: u("1499638673689-79a0b5115d87", 600) },
  { name: "Classic Croissant", category: "Food", price: 130, text: "Flaky, buttery and freshly baked.", img: u("1555507036-ab1f4038808a", 600) },
  { name: "Chocolate Cake", category: "Food", price: 190, text: "Rich, soft and indulgent.", img: u("1578985545062-69928b1d9587", 600) },
  { name: "Club Sandwich", category: "Food", price: 220, text: "Fresh, filling and made for a quick bite.", img: u("1528735602780-2552fd46c7af", 600) },
  { name: "Pasta", category: "Food", price: 260, text: "Comforting, flavourful and freshly prepared.", img: u("1621996346565-e3dbc646d9a9", 600) },
];

export const values = [
  { title: "Quality", text: "We care about every cup and every plate." },
  { title: "Comfort", text: "Come as you are and stay as long as you like." },
  { title: "Connection", text: "Because the best café moments are shared." },
];

export const aboutImage = u("1501339847302-ac426a4a7cbb", 900);

export const gallery = [
  { alt: "Latte art in a ceramic cup", img: u("1461023058943-07fcbe16d735"), tall: true },
  { alt: "Coffee cup resting near a sunny window", img: u("1497935586351-b67a49e012bf") },
  { alt: "Golden croissants on a plate", img: u("1509365390695-33aee754301f"), tall: true },
  { alt: "Warm café interior with wooden tables", img: u("1600093463592-8e36ae95ef56") },
  { alt: "Slice of chocolate cake", img: u("1565958011703-44f9829ba187") },
  { alt: "Friends sharing coffee and conversation", img: u("1445116572660-236099ec97a0"), tall: true },
  { alt: "Roasted coffee beans up close", img: u("1559056199-641a0ac8b55e") },
  { alt: "Cozy café seating area", img: u("1501339847302-ac426a4a7cbb") },
  { alt: "Breakfast plate on a café table", img: u("1504754524776-8f4f37790ca0"), tall: true },
  { alt: "Café exterior with a welcoming entrance", img: u("1559925393-8be0ec4767c8") },
];