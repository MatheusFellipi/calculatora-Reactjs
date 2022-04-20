import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Global";
import { theme } from "./styles/theme/theme";
import Landing from "./page/Landing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Landing />
    </ThemeProvider>
  );
}

export default App;
