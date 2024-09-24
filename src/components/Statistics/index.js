import React from "react";
import "./index.css"; // Component-specific CSS

const Statistics = ({ uniqueWordCount, charCount }) => {
  return (
    <div className="stats">
      <p className="unique-p1">Unique Words:<span className="count-p">{uniqueWordCount}</span></p>
      <p className="unique-p1">Characters (excluding spaces/punctuation): <span className="count-p">{charCount}</span></p>
    </div>
  );
};

export default Statistics;
