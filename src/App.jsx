import {useEffect, useLayoutEffect, useState, useCallback} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [todos, setTodos] = useState([])

    console.log("mount App component")
    //
    // useEffect(() => {
    //     console.warn('useEffect called for fetching todos')
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             setTodos(data)
    //         })
    // }, [count])
    //
    // useLayoutEffect(() => {
    //     console.error('useLayoutEffect')
    // }, []);
    //
    // useEffect(() => {
    //     if(!(count % 2 === 0)) return
    //     // console.log('useEffect', {count});
    // }, []);

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

        <button
          onClick={() => {
            setCount2((prev) => prev + 1);
          }}>
          count2 is {count2}
        </button>

          {JSON.stringify(todos)}

      </div>
    </>
  );
}

export default App;
