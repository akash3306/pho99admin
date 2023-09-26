import { BrowserRouter, Routes, Route } from "react-router-dom";import './App.css';
import Layout from './layout/layout';

import Dashboard from './pages/dashboard/dashboard';
import Home from './pages/home/home';
import About from "./pages/about/about";
import Menu from './pages/menu/menu';
import Location from './pages/location/location';
import Gallery from './pages/gallery/gallery';
import Vacancy from './pages/vacancy/vacancy';
import News from './pages/news/news';
import Event from './pages/event/event';
import Contact from './pages/contact/contact';

import homeimg from './img/homeimg.png';
import aboutimg from './img/aboutimg.png';

function App() {

  const data = [
    {
      title: "Savor Vietnam's best Pho, made with love.",
      content: "Experience Pho's taste of traditional Vietnam food with every spoonful at our Pho99 restaurant.",
      button: "See Menu",
      img: homeimg,
    },
    {
      title: "Our Story",
      content: "Our Vietnamese restaurant is rooted in a love for sharing the authentic flavors of our culture through fresh, traditional dishes. Come savor the stories of Vietnam with us.",
      button: "Learn More",
      img: aboutimg,
      desc: "Pho99 Nepal serves authentic Vietnamese food. Vietnamese dishes are typically prepared with fresh herbs such as cilantro, ginger, lemongrass, mint, and basil, and often served with fish sauce, shrimp paste, or soybean sauce on the side. Because Vietnamese food is cooked with minimal oil, select spices, and fresh ingredients, it is considered one of the healthiest cuisines in the world. Pho99 Nepal reflects the amazing food culture of Vietnam, which says you don’t have to go looking for great food - great food finds you! You never go hungry in Vietnam. Great food is everywhere; street corners, alleyways, outdoor cafes, or served in the finest restaurants or from street food carts. Pho99 currently has three locations. One is in expat community area of Jhamsikhel, Lalitpur, another is located at prime location of Lazimpat, right across from hotel Shangri-La while the third one is situated right at Boudhnath stupa, a World Heritage Site; when you enter from the main gate of Stupa, you will find it right on your left after 5 to 6 shops.  All our locations have simple yet inviting decor awaits you - do visit us soon!",
    },
    {
      title: "Our Menu",
      content: "Savor the vibrant and authentic flavors of Vietnam with our carefully curated menu, featuring classic dishes and regional specialties.",
      button: "See More",
    },
    {
      title: "Location",
      content: "Discover the authentic taste of Vietnam at our restaurant, conveniently located in Kathmandu, where we bring the vibrant flavors of Vietnam to your table.",
    },
    {
      title: "Our Gallery",
      content: "Discover the artistry and care that goes into each plate before you even take your first bite.",
      button: "See More",
    },
    {
      title: "Vacancy",
      content: "Join our culinary family and experience a rewarding career in the art of flavors",
      button: "See More",
    },
    {
      title: "News",
      content: "Find out what's new and exciting at our Vietnamese restaurant, from seasonal specials to collaborations and beyond.",
    },
    {
      title: "Events",
      content: "Experience the best of Vietnamese culture and cuisine through our calendar of events, featuring unique opportunities to learn, taste, and celebrate.",
    },
    {
      title: "Contact Us",
      email: "info@pho99nepal.com",
      phone: "9803203119",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="home" element={<Home data={data[0]} />} />
          <Route path="about" element={<About data={data[1]} />} />
          <Route path="menu" element={<Menu data={data[2]} />} />
          <Route path="location" element={<Location data={data[3]} />} />
          <Route path="gallery" element={<Gallery data={data[4]} />} />
          <Route path="vacancy" element={<Vacancy data={data[5]} />} />
          <Route path="news" element={<News data={data[6]} />} />
          <Route path="events" element={<Event data={data[7]} />} />
          <Route path="contact" element={<Contact data={data[8]} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
