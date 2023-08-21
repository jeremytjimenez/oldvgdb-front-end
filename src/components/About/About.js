import React from "react";

import "./About.css";

function About() {
  return (
    <>
      <h2 id="about" className="container">
        A database for video games pre 2000.
      </h2>
      <hr />
      <br />
      <p>
        A lot of these games tend to be lost to memory or discounted because of
        how old they are, but they are wonderful experiences (and there are many
        of them!).
      </p>
      <p>
        I personally think it is worthwhile to specifically catalog these, as
        they provide a wonderful, rich foundation for the history of gaming and
        are experiences everyone should at least be aware of.
      </p>
      <br />
      <img src="https://i.pinimg.com/736x/97/ed/04/97ed0497a016102f6dc51fd6f416efca.jpg" alt="lsl screenshot"/>
      <p>A screenshot from Leisure Suit Larry 3.</p>
    </>
  );
}

export default About;
