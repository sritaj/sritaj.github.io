const Slider = ({ range, updateSlider }) => {
  return (
    <div className="pt-4">
      <label htmlFor="range" className="text-xs font-bold font-serif">
        Length
      </label>
      <div className="flex pt-2">
        <input
          id="slider_range"
          className="w-6 bg-slate-300 border-gray-300 text-center mr-2 text-sm text-black"
          readOnly={true}
          value={range}
        ></input>
        <input
          id="range"
          type="range"
          min={8}
          max={64}
          step={1}
          value={range}
          onChange={updateSlider}
          className="w-full rounded-lg cursor-pointer bg-gray-100"
        ></input>
      </div>
    </div>
  );
};

export default Slider;
