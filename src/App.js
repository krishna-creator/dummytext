import "./App.css";
import data from "./data";
import alpha from "./alphabet";
import React, { useState, useEvent } from "react";
function App() {
  const [para, setPara] = useState([]);
  const [value, setValue] = useState(1);
  const [ralpha, setRalpha] = useState(false);
  const handle = (e) => {
    e.preventDefault();
    let p = data;
    var currentIndex = p.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * p.length);
      currentIndex -= 1;
      temporaryValue = p[currentIndex];
      p[currentIndex] = p[randomIndex];
      p[randomIndex] = temporaryValue;
    }
    setPara(p.slice(0, value));
    if (ralpha) {
      randomalpha();
    }
  };
  const randomalpha = () => {
    let array = [],
      randomIndex,
      space = 3;
    for (let i = 0; i < value; i++) {
      let str = "";
      for (let j = 0; j < 400; j++) {
        randomIndex = Math.floor(Math.random() * alpha.length);
        if (space === Math.floor(Math.random() * 4)) {
          str += " ";
        }
        str += alpha[randomIndex];
      }
      array.push(str);
    }
    setPara(array);
  };
  return (
    <>
      <h1 className="jumbotron text-center title">
        Tierd of boring Lorem ipsum
      </h1>
      <div className="mx-auto center">
        <form className="mb-5" onSubmit={handle}>
          <label className="mr-1" htmlFor="name">
            No of paragraphs :
          </label>
          <input
            className="len mr-2"
            id="name"
            type="number"
            max="8"
            min="1"
            onChange={(e) => setValue(e.target.value)}
          />
          <input className="btn title" type="submit" value="Generate" />
          <br />
          <label className="mr-2 mt-2" htmlFor="a">
            Random a-z 123
          </label>
          <input
            name="a"
            onChange={(e) => setRalpha(e.target.checked)}
            type="checkbox"
            id="a"
          />
        </form>
        {para.map((p, index) => {
          return <p key={index}>{p}</p>;
        })}
      </div>
    </>
  );
}

export default App;
