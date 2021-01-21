import React, { useState } from "react";
import "./styles.css";
const coursesDataBase = {
  "Web Developement": [
    { name: "Tanay Pratap" },
    { name: "Web Dev Simplified" },
    { name: "Apna College" }
  ],
  Business: [
    { name: "Y Combinator Stratup Series" },
    { name: "Vivek Bindra" },
    { name: "Ankur Warikoo" }
  ],
  Art: [{ name: "Ten Hundred" }, { name: "Kesh" }, { name: "Gawx Art" }]
};

export default function App() {
  var [genreChosen, setGenreChosen] = useState("Art");
  var coursesGenre = Object.keys(coursesDataBase);
  function genreClicker(genre) {
    setGenreChosen(genre);
  }
  return (
    <div className="App">
      <img
        style={{ maxWidth: "300px" }}
        alt="learning"
        src="https://higherlogicdownload.s3.amazonaws.com/NACE/cedda8a4-c3c0-4583-b1b6-3b248e6eb1f2/UploadedImages/hp-ecourses.png"
      ></img>
      <h1>Coursepedia</h1>
      <p>See free youtube course recommendation here</p>
      <hr />
      {coursesGenre.map((genre) => {
        return (
          <button
            onClick={() => genreClicker(genre)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              border: "1px solid black",
              margin: "5px "
            }}
          >
            {genre}
          </button>
        );
      })}
      <hr />
      <div>
        <ul style={{ paddingLeft: 0 }}>
          {coursesDataBase[genreChosen].map((course) => (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {course.name} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
