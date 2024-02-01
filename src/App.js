/** @format */

import "./App.css";
import "./Cards.css";
import { Link, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Web Design Terminology Contract Project</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">Terms</Link>
        <Link to="/contact">Resources</Link>
      </nav>
      <p>
        As you complete labs, do assignments and prepare for interview - always
        be aware of the importance of terminoloy and the correct use of key
        words that describe our industry. This can make the difference between
        full comprehension of an assignment, and delivering a below-par
        solution, and coming across as a well prepared interview candidate, or
        one who is not entirely comfortable with the expectations and norms of a
        professional placement in the computer industry.
      </p>
    </div>
  );
}

const words = [
  { term: "barebones document", def: "document with basic HTML5 tags", key: 1 },
  { term: "render", def: "display web page via browser", key: 2 },
  { term: "CSS", def: "Cascading Style Sheets" },
  { term: "inline styling", def: "Placing style rules inside the tag" },
  {
    term: "internal styling",
    def: "Placing style rules between the style tags in the head of the document",
  },
  { term: "external styling", def: "Placing style rules in an external file" },
];

export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Terms</Link>
        <Link to="/contact">Resources</Link>
      </nav>
      <h1>Terms</h1>
      <div class="cards">
        {words.map((word) => (
          <div class="card">
            <div class="card-content">
              <h2>{word.term}</h2> <h4>{word.def}</h4>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Resources</h1>
      <ul>
        <li>
          <a href="https://www.w3schools.com/w3css/">W3 Schools</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/">
            Mozilla Developer Network
          </a>
        </li>
      </ul>
    </div>
  );
}

export function App() {
  return <Home />;
}
