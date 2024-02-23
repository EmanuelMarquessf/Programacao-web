import "./index.css";
import CopyIcon from "./Components/Icons/copy";
import Input from "./Components/Input";
import { useState } from "react";

export default function App() {
  const [copyButton, setCopyButton] = useState(false);
  const [generatedText, setGeneratedText] = useState("");
  const [passwordSize, setPasswordSize] = useState(12);
  const [showInput, setShowInput] = useState(false);
  let customSize = showInput ? passwordSize : 8;

  function CopyClick() {
    window.navigator.clipboard.writeText(generatedText);
    setCopyButton(true);
  }

  function randomPass() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";

    for (let i = 0; i < customSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setGeneratedText(newPassword);
    setCopyButton(false);
  }

  return (
    <div className="container">
      <div className="allComponents">
        <h1>Password Generator</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "1rem",
            }}
          >
            <div>
              <input
                type="checkbox"
                id="showInput"
                value={showInput}
                onChange={() => setShowInput((currentState) => !currentState)}
              ></input>
              <label htmlFor="showInput">Change size</label>
            </div>
            {showInput && (
              <div>
                <label htmlFor="passSize">Size:</label>
                <Input
                  passwordSize={passwordSize}
                  setPasswordSize={setPasswordSize}
                ></Input>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              gap: "2rem",
            }}
          >
            <button style={{ flexGrow: "1" }} onClick={randomPass}>
              New Password
            </button>
            <button style={{ flexGrow: "1" }} onClick={CopyClick}>
              {copyButton ? "Copied" : "Copy"}
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "1rem",
            }}
          >
            <label htmlFor="password">Senha:</label>
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <input id="password" disabled type="text" value={generatedText} />
              <button
                style={{
                  backgroundColor: copyButton ? "#00ff00" : "",
                  borderRadius: "0px 8px 8px 0px",
                  width: "auto",
                }}
                onClick={CopyClick}
              >
                <CopyIcon fill="#ffffff"></CopyIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
