import React, { useState } from "react";

const Paragraph = () => {
  const [wordCount, setWordCount] = useState(10); // Words per paragraph
  const [paraCount, setParaCount] = useState(1); // Number of paragraphs
  const [tag, setTag] = useState("p"); // HTML tag
  const [includeSymbols, setIncludeSymbols] = useState(false); // Include symbols
  const [paragraphs, setParagraphs] = useState([]); // Generated paragraphs

  // Random words and symbols
  const words = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do"];
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  // Generate random paragraphs
  const generateParagraphs = () => {
    const generated = [];
    for (let i = 0; i < paraCount; i++) {
      let paragraph = [];
      for (let j = 0; j < wordCount; j++) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        if (includeSymbols) {
          const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
          paragraph.push(`${randomWord}${randomSymbol}`);
        } else {
          paragraph.push(randomWord);
        }
      }
      generated.push(paragraph.join(" "));
    }
    setParagraphs(generated);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Random Paragraph Generator</h1>

      <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-lg">
        {/* Word count input */}
        <div className="flex justify-between items-center mb-4">
          <label className="text-lg font-medium">Words per Paragraph:</label>
          <input
            type="range"
            min="5"
            max="50"
            value={wordCount}
            onChange={(e) => setWordCount(parseInt(e.target.value))}
            className="w-2/3"
          />
          <span className="text-lg">{wordCount}</span>
        </div>

        {/* Paragraph count input */}
        <div className="flex justify-between items-center mb-4">
          <label className="text-lg font-medium">Number of Paragraphs:</label>
          <input
            type="number"
            min="1"
            max="10"
            value={paraCount}
            onChange={(e) => setParaCount(parseInt(e.target.value))}
            className="w-1/3 border rounded-md p-2"
          />
        </div>

        {/* Tag name selection */}
        <div className="flex justify-between items-center mb-4">
          <label className="text-lg font-medium">Tag Name:</label>
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="w-1/3 border rounded-md p-2"
          >
            <option value="p">Paragraph (p)</option>
            <option value="h1">Heading 1 (h1)</option>
            <option value="h2">Heading 2 (h2)</option>
            <option value="h3">Heading 3 (h3)</option>
            <option value="h4">Heading 4 (h4)</option>
          </select>
        </div>

        {/* Include symbols toggle */}
        <div className="flex items-center mb-4">
          <label className="text-lg font-medium mr-2">Include Symbols:</label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            className="h-6 w-6"
          />
        </div>

        {/* Generate button */}
        <button
          onClick={generateParagraphs}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Generate
        </button>
      </div>

      {/* Display generated paragraphs */}
      <div className="w-full max-w-2xl mt-6">
        {paragraphs.map((para, index) => {
          const Tag = tag;
          return (
            <Tag key={index} className="mb-6 text-lg">
              {para}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export default Paragraph;