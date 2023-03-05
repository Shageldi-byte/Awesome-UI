import About from "./page/About";
import AppSwiper from "./component/Swiper";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Index from "./page/Index";
import Logo from "./component/Icon/Logo";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, responsiveFontSizes, useTheme } from "@mui/material/styles";
import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppButton, Basic, UsingMediaQuery, UsingTheme } from "./component/AppComponent";
import { useWidth } from "./core/hook";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#647B64",
      dark: "#465646",
      light: "#839583",
      contrastText: "#FEFEFE"
    },
    secondary: {
      main: "#F0DCC5",
      dark: "#a89a89",
      light: "#f3e3d0",
      contrastText: "#333333"
    },
    grey: {
      900: "#333333",
      800: "#4F4F4F",
      700: "#828282",
      600: "#BDBDBD",
      500: "#E0E0E0",
      400: "#F2F2F2"
    }
  }
})

export const AppContext = createContext();

function App() {
  const width = useWidth();
  const checker = (w) => {
    return ["xs", "sm"].includes(w);
  }
  const [isMobile, setIsMobile] = useState(checker(width));
  useEffect(() => {
    setIsMobile(checker(width));
  }, [width])

  return (
    <AppContext.Provider value={{
      mobile: isMobile
    }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default App
