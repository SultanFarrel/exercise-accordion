import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          curOpen={curOpen}
          onOpen={setCurOpen}
          number={index + 1}
          title={faq.title}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ number, title, curOpen, onOpen, children }) {
  const activeIndex = number === curOpen;

  function toggleActive() {
    onOpen(activeIndex ? null : number);
  }

  return (
    <div className={`item ${activeIndex ? "open" : ""}`} onClick={toggleActive}>
      <span className="number">{number.toString().padStart(2, "0")}</span>
      <h2 className="title">{title}</h2>
      <span className="icon">{`${activeIndex ? "-" : "+"}`}</span>

      {activeIndex && <p className="content-box">{children}</p>}
    </div>
  );
}
