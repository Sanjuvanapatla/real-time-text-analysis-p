// components/HighlightedText.js
import React from 'react';

const HighlightedText = ({ text, searchText, replaceText }) => {
  const highlightedText = text.split(searchText).join(`<span class="highlight">${replaceText}</span>`);

  return (
    <div 
      className="highlighted-text" 
      dangerouslySetInnerHTML={{ __html: highlightedText }}
    />
  );
};

export default HighlightedText;
