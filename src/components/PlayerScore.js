import React from "react";

function PlayerScore(props) {
  return <div>{props.name + "  :  " + props.score}</div>;
}

export default PlayerScore;
