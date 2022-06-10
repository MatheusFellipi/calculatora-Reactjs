import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Global";
import { light } from "./styles/theme/light";
import Landing from "./page/Landing";
import { ThemeContextProvider } from "./Context/themes";

function App() {
  return (
    <ThemeContextProvider>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Landing />
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;
