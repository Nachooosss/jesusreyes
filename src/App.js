import React, { useEffect, useState } from "react";
import Dashboard from "./Routers/Dashboard";
import Preloader from "./layout/Preloader/Preloader";
import BackGroundEffect from "./components/BackGroundEffect/BackGroundEffect";
import Layout from "./layout/Layout";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import LightTheme from "./components/Theme/LightTheme";
import DarkTheme from "./components/Theme/DarkTheme";

function App() {
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    console.log("Nice to meet you, I am Jesus Reyes .Enjoy my web site!");
    setTimeout(() => {
      setLoading(true);
    }, 4100);
  }, []);
  const ThemeActive = useSelector((state) => state.data.ThemeActive);

  return (
    <>
      <ThemeProvider theme={ThemeActive ? LightTheme : DarkTheme}>
        {Loading ? (
          <>
            <BackGroundEffect></BackGroundEffect>
            <Dashboard></Dashboard>
            <Layout></Layout>
          </>
        ) : (
          <Preloader></Preloader>
        )}
      </ThemeProvider>
    </>
  );
}
export default App;
