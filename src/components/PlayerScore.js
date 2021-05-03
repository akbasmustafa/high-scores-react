import React from "react";

function PlayerScore(props) {
  return (
    <div style={styles}>
      <span>{props.name.toUpperCase()}</span>
      <span style={{ color: "red" }}>{props.score}</span>
    </div>
  );
}

export default PlayerScore;

const styles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  padding: "1%",
  border: "black solid 2px",
};
