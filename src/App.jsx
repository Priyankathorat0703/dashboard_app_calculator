import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString()); 
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full text-right text-2xl p-3 bg-gray-200 rounded mb-2"
            placeholder="0"
          />
          <h1 className="text-right text-3xl text-gray-600">{result || "0"}</h1>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <button
            className="col-span-2 bg-black text-white p-3 rounded"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            className="bg-yellow-500 text-white p-3 rounded"
            onClick={handleBackspace}
          >
            &larr;
          </button>
          <button
            className="bg-gray-400 text-white p-3 rounded"
            onClick={() => handleClick("/")}
          >
            /
          </button>

          <button
            className="bg-gray-300 text-black p-3 rounded"
            onClick={() => handleClick("7")}
          >
            7
          </button>
          <button
            className="bg-gray-300 text-black p-3 rounded"
            onClick={() => handleClick("8")}
          >
            8
          </button>
          <button
            className="bg-gray-300 text-black p-3 rounded"
            onClick={() => handleClick("9")}
          >
            9
          </button>
          <button
            className="bg-gray-400 text-white p-3 rounded"
            onClick={() => handleClick("*")}
          >
            *
          </button>

          <button
            className="bg-gray-300 text-black p-3 rounded"
            onClick={() => handleClick("4")}
          >
            4
          </button>
          <button
            className="bg-gray-300 text-black p-3 rounded"
            onClick={() => handleClick("5")}
          >
            5
          </button>
          <button
            className="bg-gray-300 text-black p-3 rounded"
            onClick={() => handleClick("6")}
          >
            6
          </button>
          <button
            className="bg-gray-400 text-white p-3 rounded"
            onClick={() => handleClick("-")}
          >
            -
          </button>

          <button
            className="bg-gray-300 text-black p-3 rounded"
            onClick={() => handleClick("1")}
          >
            1
          </button>
          <button
            className="bg-gray-300 text-black p-3 rounded"
            onClick={() => handleClick("2")}
          >
            2
          </button>
          <button
            className="bg-gray-300 text-black p-3 rounded"
            onClick={() => handleClick("3")}
          >
            3
          </button>
          <button
            className="bg-gray-400 text-white p-3 rounded"
            onClick={() => handleClick("+")}
          >
            +
          </button>

          <button
            className="col-span-2 bg-gray-300 text-black p-3 rounded"
            onClick={() => handleClick("0")}
          >
            0
          </button>
          <button
            className="bg-gray-300 text-black p-3 rounded"
            onClick={() => handleClick(".")}
          >
            .
          </button>
          <button
            className="bg-green-500 text-white p-3 rounded"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
