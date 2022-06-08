import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Global";
import { dark } from "./styles/theme/dark";
import Landing from "./page/Landing";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Landing />
    </ThemeProvider>
  );
}

export default App;
