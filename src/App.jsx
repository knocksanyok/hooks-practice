import {useEffect, useMemo, useLayoutEffect, useState, useCallback, useRef, use, useId} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {

    console.log("mount App component")
    const [count, setCount] = useState(0);
    const countRef = useRef(0)
    const id = useId();
    const id2 = useId();
    console.log({id, id2})



    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
    },[setCount]);


    const handleClickRef = useCallback(() => {
        countRef.current += 1;
    },[setCount]);


    useEffect(() => {
        if(!countRef.current)
            return;
        console.log(countRef.current);
    },[countRef]);



  return (
    <>
      <div className="card">

        <button
          onClick={handleClick}>
          count is {count}
        </button>

          <button
              onClick={handleClickRef}>
              countRef is {countRef.current}
          </button>



      </div>
    </>
  );
}

export default App;
