import logo from "./logo.svg";
import "./App.css";
import { JSON } from "./components/jsonScript";
import Script from "./components/formScript";
import Basic from "./components/basic";

function App() {
  return (
    <div className="App">
      <h1>Task</h1>
      <Basic/>
      {/* <div style={{display:"flex",justifyContent:"space-evenly",gap:"1%",padding:"1%"}}>
        {JSON.map((item, i) => {
          return (
            <div
              key={i}
              style={{ border: "1px solid black", width: "30%" }}
            >
              <h1>{item.company}</h1>
              <h1>{item.ticker}</h1>
              <h1>{item.stockPrice}</h1>
              <h1>{item.timeElapsed}</h1>
            </div>
          );
        })}
      </div> */}
     <Script/>
    </div>
  );
}

export default App;
