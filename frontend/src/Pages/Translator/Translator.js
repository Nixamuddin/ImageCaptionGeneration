import React, {  useState } from "react";
import { FaExchangeAlt, FaCopy,FaVolumeUp} from 'react-icons/fa'
import './Translator.css'
import countries from './Data'
const Translator = () => {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [fromLang, setFromLang] = useState("en-GB");
  const [toLang, setToLang] = useState("ur-PK");

  const translateText = async () => {
    if (!fromText) {
      setToText("");
      return;
    }

    const apiUrl = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLang}|${toLang}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data && data.responseData && data.responseData.translatedText) {
        setToText(data.responseData.translatedText);
      }
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  const handleTranslateClick = () => {
    translateText();
  };

  const handleExchangeClick = () => {
    setFromText(toText);
    setToText(fromText);
    setFromLang(toLang);
    setToLang(fromLang);
  };

  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleSpeakClick = (text, lang) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
  };

  return (
    <div id="translate">
    <div className="container conatinerss">
      <div className="wrapper">
        <div className="text-input">
          <textarea
            spellCheck={false}
            className="from-text"
            placeholder="Enter text"
            value={fromText}
            onChange={(e) => setFromText(e.target.value)}
          ></textarea>
          <textarea
            spellCheck={false}
            readOnly
            disabled
            className="to-text"
            placeholder="Translation"
            value={toText}
          ></textarea>
        </div>
        <ul className="controls">
          <li className="row from">
            <div className="icons">
              <FaVolumeUp size={20} onClick={() => handleSpeakClick(fromText, fromLang)} />
           <FaCopy  onClick={() => handleCopyClick(fromText)}/> 
            </div>
            <select value={fromLang} onChange={(e) => setFromLang(e.target.value)}> 
              {Object.keys(countries).map((country_code) => (
                <option key={country_code} value={country_code}>
                  {countries[country_code]}
                </option>
              ))}
            </select>
          </li>
          <li className="exchange">
            <i>
              <FaExchangeAlt size={30} onClick={handleExchangeClick} />
            </i>
          </li>
          <li className="row to">
            <div className="icons">
              <FaVolumeUp size={20} onClick={() => handleSpeakClick(toText, toLang)} />  
            <FaCopy  onClick={() => handleCopyClick(toText)} />
            </div>
            <select value={toLang} onChange={(e) => setToLang(e.target.value)}>
              {Object.keys(countries).map((country_code) => (
                <option key={country_code} value={country_code}>
                  {countries[country_code]}
                </option>
              ))}
            </select>
          </li>
        </ul>
        <button className="translatebtn" onClick={handleTranslateClick}>Translate Text</button>
      </div>
    </div>
    </div>
  );
};

export default Translator;
