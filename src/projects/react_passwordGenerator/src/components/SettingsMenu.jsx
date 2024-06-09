import React from "react";

const SettingsMenu = ({
  id,
  checkboxName,
  defaultChecked,
  setCheckboxStatus,
}) => {
  return (
    <div className="flex pt-2 pr-5">
      <input
        id={id}
        className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded"
        type="checkbox"
        checked={defaultChecked}
        onChange={setCheckboxStatus}
      />
      <label htmlFor={id} className="ms-2 text-xs font-medium text-gray-700">
        {checkboxName}
      </label>
    </div>
  );
};

export default SettingsMenu;
