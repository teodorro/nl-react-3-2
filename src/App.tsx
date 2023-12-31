import "./css/main.css";
import etsy from "./data/etsy.json";
import Listing from "./components/Listing";

function App() {
  let data = [];
  data = etsy;
  return (
    <div className="listing">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Listing items={data} />
    </div>
  );
}

export default App;
