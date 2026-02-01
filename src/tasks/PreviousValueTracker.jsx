import { useEffect, useRef, useState } from "react";

const PreviousValueTracker = () => {
  const [input, setInput] = useState("");
  const prevRef = useRef("");

  useEffect(() => {
    prevRef.current = input;
  }, [input]);

  return (
    <div className="flex flex-col gap-6">
        <input
        className="py-2 px-3 rounded-xl border border-blue-800"
        type="text"
        placeholder="Enter text..."
        value={input}
        onChange={e => setInput(e.target.value)}
        />

        <div>Current value: {input}</div>
        <div>Previous value: {prevRef.current}</div>
    </div>
  );
};

export default PreviousValueTracker;
