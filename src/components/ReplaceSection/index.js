import React, { useState } from "react";
import "./index.css"; // Component-specific CSS

const ReplaceSection = ({ text, setText }) => {
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("");

  const handleReplace = () => {
    const newText = text.split(searchString).join(replaceString);
    setText(newText);
  };

  return (
    <div className="replace-section">
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        placeholder="Search string"
      />
      <input
        type="text"
        value={replaceString}
        onChange={(e) => setReplaceString(e.target.value)}
        placeholder="Replace string"
      />
      <button onClick={handleReplace} className="btn-c">Replace All</button>
    </div>
  );
};

export default ReplaceSection;
