import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useFetch } from "./useFetch";
const App = () => {
  const [state, setState] = useState(0);

  const incrementCounter = () => {
    setState((p) => p + 1);
  };

  const { data, loading } = useFetch(`http://numberapi.com/${state}/trivia`);

  const decrementCounter = () => {
    setState((p) => p - 1);
  };
  return (
    <div className="App">
      <>
        <input type="text" placeholder="FirstName"></input>
      </>{" "}
      <>
        <br />
        <input type="text" placeholder="LasteName"></input>
      </>{" "}
      <>
        <br />
        <input type="text" placeholder="Email" autoComplete="off"></input>
      </>{" "}
      <>
        <br />
        <input type="password" placeholder="Password"></input>
      </>{" "}
      <br />
      <br />
      <br />
      <br />
      <button onClick={incrementCounter}>+</button>
      <h1>{state}</h1>
      <button onClick={decrementCounter}>-</button>
      <br />
      <br />
      <br />
      <br />
      <div>
        <p>{!data ? "loading..." : data}</p>
      </div>
    </div>
  );
};

export default App;
