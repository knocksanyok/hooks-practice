import {useEffect, useMemo, useLayoutEffect, useState, useCallback} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function difficultCountForMemo() {
    let difficultCount = 0;
    for (let i = 0; i < 10; i++) {
        Math.sqrt(i)
        difficultCount++;
    }
    return difficultCount;
}

function App() {
    console.log("mount App component")
    const [count, setCount] = useState(0);

    let difficultCount = useMemo(() => {
        return difficultCountForMemo();
    },[])

    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
    },[setCount]);

    useEffect(() => {
        console.log('MathPI,' + ' ' + difficultCount);
    },[difficultCount]);



  return (
    <>
      <div className="card">
        <button
          onClick={handleClick}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
