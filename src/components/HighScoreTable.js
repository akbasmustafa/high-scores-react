import React from "react";
import allCountryScores from "../scores";
import PlayerScore from "./PlayerScore";
import "../App.css";

function HighScoreTable() {
  return (
    <div className="cardContainer">
      <h1 style={{ color: "blue" }}>High Scores per Countries</h1>
      {allCountryScores.map((country) => (
        <div className="countryCard">
          <h1 style={{ color: "blue" }}>{"HIGH SCORES:" + country.name}</h1>
          {country.scores.map((score) => (
            <PlayerScore name={score.n} score={score.s} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default HighScoreTable;
