import "./App.css";
import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Preloader from "./components/others/Preloader/Preloader";
function App() {
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      console.log("Ready");
      setLoading(true);
    }, 4300);
  }, []);
  return (
    <div className="App">
      {Loading ? <Main></Main> : <Preloader></Preloader>}
    </div>
  );
}

export default App;
