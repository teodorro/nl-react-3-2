import "./css/main.css";
import etsy from "./data/etsy.json";
import Listing from "./components/Listing";

function App() {
  let data = [];
  data = etsy;
  return (
    <div className="listing">
      <Listing items={data} />
    </div>
  );
}

export default App;
