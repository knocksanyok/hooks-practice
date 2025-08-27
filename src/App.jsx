import {useEffect, useLayoutEffect, useState, useCallback} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

    console.log("mount App component")


    useEffect(() => {
        console.warn('useEffect has been called')
        const id = setTimeout(() => {
            alert('YAKF')
        }, 1000)

        return () => {
            clearTimeout(id)
        }
    }, [count]);

  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
