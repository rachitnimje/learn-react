import { useCallback, useEffect, useRef, useState } from "react";
import PasswordCard from "../src/components/passwordCard";

function App() {
  const [length, setLength] = useState(10);
  const [numbersAllowed, setNumbersAllowed] = useState(true);
  const [charsAllowed, setCharsAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const [savedPasswords, setSavedPasswords] = useState([]);
  const [showSavedPasswords, setShowSavedPasswords] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWZYXabcdefghijjklmnopqrstuvwxyz";

    if (numbersAllowed) str += "0123456789";

    if (charsAllowed) str += "!@#$%^&*";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }

    setPassword(pass);
  }, [length, numbersAllowed, charsAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charsAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const addPassword = useCallback(() => {
    setSavedPasswords((prev) => {
      if (prev.includes(password)) {
        return prev;
      } else {
        return [...prev, password];
      }
    });
  }, [password]);

  const changeShowPasswords = () => {
    setShowSavedPasswords((prev) => !prev);
  };

  // added for debugging
  useEffect(() => {
    console.log("Updated savedPasswords:", savedPasswords);
  }, [savedPasswords]);

  return (
    <div className="w-full min-h-screen bg-slate-300 flex flex-col items-center">
      <div
        id="password-gen"
        className="bg-gray-700 flex-col justify-center items-center rounded-lg p-3 mt-20 mb-8 w-full max-w-lg"
      >
        <h1 className="text-orange-500 text-center text-xl">
          Password Generator
        </h1>

        <div id="password-box" className="flex m-5 top-1/4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder="Generated password appears here"
            className="p-2 w-80 rounded-tl-md rounded-bl-md outline-none"
          />

          <button
            id="saveBtn"
            className="p-2 bg-green-400 outline-none border-none"
            onClick={addPassword}
          >
            Save
          </button>

          <button
            id="copyBtn"
            className="p-2 bg-orange-500 border-none text-white rounded-tr-md rounded-br-md"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>

        <div id="comp-box" className="flex gap-x-2">
          <div id="length-slider" className="flex w-60">
            <input
              type="range"
              min={5}
              max={50}
              value={length}
              className="ml-4 w-32"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <p className="text-white p-2">Length: {length}</p>
          </div>

          <div id="num-checkbox" className="flex align-middle">
            <input
              type="checkbox"
              defaultChecked={numbersAllowed}
              className="checkbox checkbox-primary"
              onChange={() => {
                setNumbersAllowed((prev) => !prev);
              }}
            />
            <label className="text-white p-2">Numbers</label>
          </div>

          <div id="char-checkbox" className="flex align-middle">
            <input
              type="checkbox"
              defaultChecked={charsAllowed}
              className="checkbox checkbox-primary"
              onChange={() => {
                setCharsAllowed((prev) => !prev);
              }}
            />
            <label className="text-white p-2">Characters</label>
          </div>
        </div>
      </div>

      {savedPasswords.length !== 0 && (
        <div
          className="border-b border-black m-2 w-full max-w-lg flex items-center text-black"
          onClick={changeShowPasswords}
        >
          <h2>Show Saved Passwords ({savedPasswords.length})</h2>

          {showSavedPasswords ? (
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              stroke-strokelinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path d="m16.843 13.789c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291 1.002 1.299 3.044 3.945 4.243 5.498z" />
            </svg>
          ) : (
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              stroke-strokelinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
            </svg>
          )}
        </div>
      )}

      {showSavedPasswords &&
        savedPasswords.map((savedPassword, index) => (
          <PasswordCard
            key={index}
            password={savedPassword}
            savedPasswords={savedPasswords}
          />
        ))}
    </div>
  );
}

export default App;
