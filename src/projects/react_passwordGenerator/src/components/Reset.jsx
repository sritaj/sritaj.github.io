const Reset = ({ reset }) => {
  return (
    <div className="mt-6 flex justify-center">
      <button
        id="convert"
        className="text-white bg-blue-600 hover:bg-blue-800 rounded-full px-5 py-1 ring-offset-1 ring-1"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default Reset;
