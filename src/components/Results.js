import React from "react";

const Results = ({ correctResults, wrongResults, countCorrect }) => {
  console.log(correctResults, wrongResults);
  return (
    <div className="results">
      <div className="title">
        <p>Correct Answers:{countCorrect}</p>
      </div>
      <div className="resultsContainer">
        <div className="correctResults">
          {correctResults.map((word, index) => {
            return (
              <div key={index} className="row">
                <p>{word}</p>
              </div>
            );
          })}
        </div>
        <div className="wrongResults">
          {wrongResults.map((word, index) => {
            return (
              <div key={index} className="row">
                <p>{word}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;
