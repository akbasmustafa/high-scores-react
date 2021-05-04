import React, { useState } from "react";
import allCountryScores from "../scores";
import PlayerScore from "./PlayerScore";
import "../App.css";

function HighScoreTable() {
  const [sortDescending, setSortDescending] = useState(true);
  const [highest, setHighest] = useState(findTopScore());

  function sortName(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  }

  function sortNumber(a, b) {
    return a.s < b.s
      ? sortDescending
        ? 1
        : -1
      : a.s > b.s
      ? sortDescending
        ? -1
        : 1
      : 0;
  }
  function handleSort() {
    console.log(sortDescending);
    setSortDescending(!sortDescending);
  }

  function findTopScore() {
    let highest = {
      country: null,
      name: null,
      score: null,
    };
    allCountryScores.forEach((country) => {
      country.scores.forEach((score) => {
        if (highest.name === null) {
          highest.name = score.n;
          highest.score = score.s;
        } else if (highest.score < score.s) {
          highest.score = score.s;
          highest.name = score.n;
        }
      });
    });
    return highest;
  }

  return (
    <div className="cardContainer">
      <div onClick={handleSort} className="customToggle">
        {sortDescending ? "Descending" : "Ascending"}
      </div>
      <h1 style={{ color: "blue" }}>High Scores per Countries</h1>
      <div className="countryCard">
        <h1>HIGH Score World Wide</h1>
        <PlayerScore name={highest.name} score={highest.score} />
      </div>
      {allCountryScores.sort(sortName).map((country, index) => (
        <div key={index} className="countryCard">
          <h1 style={{ color: "blue" }}>{"HIGH SCORES:" + country.name}</h1>
          {country.scores.sort(sortNumber).map((score, index) => (
            <PlayerScore key={index} name={score.n} score={score.s} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default HighScoreTable;
