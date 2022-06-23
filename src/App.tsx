import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Global";
import { light } from "./styles/theme/light";
import Landing from "./page/Landing";
import { useTheme } from "./Context/themes";
import { dark } from "./styles/theme/dark";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <Landing />
    </ThemeProvider>
  );
}

export default App;
