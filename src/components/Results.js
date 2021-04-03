import React from "react";

const Results = ({ correctResults, wrongResults, countCorrect }) => {
  return (
    <div className="results">
      <div className="title">
        <p>Correct Answers:{countCorrect}</p>
      </div>
      <div className="resultsContainer">
        <div className="correctResults">
          <p>
            Correct Results:
            {correctResults.map((word, index) => {
              <div key={index} className="row">
                <p>{word}</p>
              </div>;
            })}
          </p>
        </div>
        <div className="wrongResults">
          <p>
            Wrong Results:
            {wrongResults.map((word, index) => {
              <div key={index} className="row">
                <p>{word}</p>
              </div>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
