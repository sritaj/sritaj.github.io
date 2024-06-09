import SettingsMenu from "./SettingsMenu";
import Slider from "./Slider";
import Reset from "./Reset";
import { useEffect, useRef, useState } from "react";
import PasswordDisplay from "./PasswordDisplay";
import backgroundImage from "../assets/background_wallpaper.jpg";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [range, setRange] = useState(8);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [copied, setCopied] = useState(false);

  const updateSlider = (e) => {
    setRange(e.target.value);
  };

  const setUppercaseCheckboxStatus = () => {
    setUppercase(!uppercase);
  };

  const setLowercaseCheckboxStatus = () => {
    setLowercase(!lowercase);
  };

  const setSymbolsCheckboxStatus = () => {
    setSymbols(!symbols);
  };

  const setNumbersCheckboxStatus = (e) => {
    setNumbers(!numbers);
  };

  const passwordLogic = () => {
    const allUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const allLowercase = "abcdefghijklmnopqrstuvwxyz";
    const allNumbers = "0123456789";
    const allSpecialCharacters = "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~`=";

    let charSet = "";
    if (uppercase) charSet += allUppercase;
    if (lowercase) charSet += allLowercase;
    if (numbers) charSet += allNumbers;
    if (symbols) charSet += allSpecialCharacters;

    if (charSet === "") {
      setPassword("");
      return;
    }

    let password = "";
    for (let i = 0; i < range; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }
    setPassword(password);
  };

  useEffect(() => {
    passwordLogic();
  }, [uppercase, lowercase, symbols, numbers, range]);

  const passwordReference = useRef(null);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordReference.current?.select();
    setCopied(true);
  };

  const reset = () => {
    setPassword("");
    setUppercase(true);
    setLowercase(true);
    setSymbols(true);
    setNumbers(true);
    setRange(8);
    setCopied(false);
  };

  return (
    <div
      className="w-full h-screen bg-gradient-to-r from-cyan-50 to-cyan-100 flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-3/5 h-fit rounded-2xl border-2 border-white shadow p-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-center font-bold text-blue-700 font-mono">
          Password Generator
        </h1>
        <p className="text-xs text-center py-4 font-light font-mono">
          Generate a secure and random password
        </p>
        <PasswordDisplay
          password={password}
          copyPassword={copyPassword}
          copied={copied}
        />
        <div className="pt-4">
          <label className="text-xs font-bold font-serif">Settings</label>

          <div className="flex flex-row">
            <SettingsMenu
              id="id"
              checkboxName="Uppercase"
              defaultChecked={uppercase}
              setCheckboxStatus={setUppercaseCheckboxStatus}
            />
            <SettingsMenu
              id="lowercase"
              checkboxName="Lowercase"
              defaultChecked={lowercase}
              setCheckboxStatus={setLowercaseCheckboxStatus}
            />
            <SettingsMenu
              id="symbols"
              checkboxName="Symbols"
              defaultChecked={symbols}
              setCheckboxStatus={setSymbolsCheckboxStatus}
            />
            <SettingsMenu
              id="numbers"
              checkboxName="Numbers"
              defaultChecked={numbers}
              setCheckboxStatus={setNumbersCheckboxStatus}
            />
          </div>
        </div>
        <Slider range={range} updateSlider={updateSlider} />
        <Reset reset={reset} />
      </div>
    </div>
  );
};

export default PasswordGenerator;
