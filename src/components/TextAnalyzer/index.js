import React, { useState, useEffect } from "react";
import "./index.css"; // Importing component-specific CSS
import Statistics from "../Statistics";
import ReplaceSection from "../ReplaceSection";

const TextAnalyzer = () => {
  const [text, setText] = useState("");
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    // Update unique word count
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const uniqueWords = words ? new Set(words) : new Set();
    setUniqueWordCount(uniqueWords.size);

    // Update character count excluding spaces and punctuation
    const charCountWithoutSpaces = text.replace(/[^a-zA-Z0-9]/g, "").length;
    setCharCount(charCountWithoutSpaces);
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="text-analyzer">
      <h1 className="real-h1">Real-Time Text Analysis</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type your text here..."
      />
      <Statistics uniqueWordCount={uniqueWordCount} charCount={charCount} />
      <ReplaceSection text={text} setText={setText} />
    </div>
  );
};

export default TextAnalyzer;
