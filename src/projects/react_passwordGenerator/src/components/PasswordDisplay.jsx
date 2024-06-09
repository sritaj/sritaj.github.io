import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faLock } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";

const PasswordDisplay = ({ password, copyPassword, copied }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
        <FontAwesomeIcon icon={faLock} style={{ color: "#38997c" }} />
      </div>
      <input
        id="password_field"
        className="text-sm rounded-2xl border border-gray-300 text-gray-900 h-8 w-full align-middle text-center ps-8 pe-8"
        readOnly={true}
        value={password}
        placeholder={
          password === "" ? "Please select at least one setting" : ""
        }
      ></input>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
        <FontAwesomeIcon
          icon={faCopy}
          style={{ color: copied ? "#008000" : "#dbdbdb" }}
          onClick={copyPassword}
        />
      </div>
    </div>
  );
};

export default PasswordDisplay;
