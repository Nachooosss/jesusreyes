import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Preloader from "./components/StyledComponents/Preloader/Preloader";
import BackGroundEffect from "./components/StyledComponents/BackGroundEffect/BackGroundEffect";
import Layout from "./components/Sections/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import LightTheme from "./Theme/LightTheme";
import DarkTheme from "./Theme/DarkTheme";

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
