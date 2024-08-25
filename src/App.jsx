import React from "react";
import texts from "./data";
import { useState } from "react";
function App() {
  const [value, setValue] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(texts.slice(0, value));
  };
  return (
    <section className="section-center">
      <h4>Create Not So Booring Lorem Ipsum</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="1"
          max="8"
          value={value}
          onChange={(e) => {
            setValue(parseInt(e.target.value));
          }}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <div className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </section>
  );
}

export default App;
