import React from "react";
import allCountryScores from "../scores";
import PlayerScore from "./PlayerScore";

function HighScoreTable() {
  return (
    <div>
      {allCountryScores.map((country) => (
        <div>
          <h1>{"HIGH SCORES:" + country.name}</h1>
          {country.scores.map((score) => (
            <PlayerScore name={score.n} score={score.s} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default HighScoreTable;
