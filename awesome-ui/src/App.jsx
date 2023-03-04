import AppSwiper from "./component/Swiper";
import Logo from "./component/Icon/Logo";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { AppButton, Basic, UsingMediaQuery, UsingTheme } from "./component/AppComponent";
import { useWidth } from "./core/hook";

const theme = createTheme({

})

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
    <div>

    </div>
  )
}

export default App
