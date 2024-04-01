import { useEffect, useMemo, useRef, useState } from "react";
import findNthPrime from "../utils/helper";

const HooksDemo = () => {
  let [text, setText] = useState(0);
  let [y, setY] = useState(0);
  let [isDarkTheme, setIsDarkTheme] = useState(false);
  let x = 0;

  // Ref variable -
  let z = useRef(0);

  useEffect(() => {
    let timer = setInterval(() => {
      console.log("Random val every 1ms is", Math.random());
    }, 1000);

    return () => clearInterval(timer);
  });

  // Heavy Operation use useMemo to memoize a value
  // Heavy Operation use useCallback to memoize a function
  let prime = useMemo(() => findNthPrime(text), [text]); //findNthPrime(text);
  return (
    <div className="text-center">
      <h2>Hooks Demo</h2>
      <div className="flex justify-center gap-3">
        <div
          className={
            "border border-gray-200 p-3 my-5 w-64 h-64" +
            (isDarkTheme && " bg-gray-400 text-black font-thin")
          }
        >
          <button
            className="px-3 py-1 bg-lime-50 font-black my-4"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            Toggle Background Theme
          </button>
          <div>
            <input
              className="border border-black "
              type="number"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></input>
          </div>
          <div>
            <h3>nth prime is: {prime}</h3>
          </div>
        </div>
        <div className="border border-gray-200 p-3 my-5 w-96 h-64">
          <div className="mb-3">
            <button
              className="px-3 py-1 font-black my-2 border mr-2 border-violet-500"
              onClick={() => {
                x = x + 1;
                console.log(x);
              }}
            >
              Increment Let Variable
            </button>
            value is: {x}
          </div>
          <div className="mb-3">
            <button
              className="px-3 py-1 font-black my-2 border mr-2 border-violet-500"
              onClick={() => setY(y + 1)}
            >
              Increment State Variable
            </button>
            value is: {y}
          </div>
          <div className="mb-3">
            <button
              className="px-3 py-1 font-black my-2 border mr-2 border-violet-500"
              onClick={() => {
                z.current = z.current + 1;
                console.log(z.current);
              }}
            >
              Increment Ref Variable
            </button>
            value is: {z.current}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HooksDemo;
