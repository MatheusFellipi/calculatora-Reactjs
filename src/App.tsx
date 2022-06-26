import { ThemeProvider } from "styled-components";
import Landing from "./page/Landing";

import { useTheme } from "./Context/themes";

import { dark } from "./styles/theme/dark";
import { light } from "./styles/theme/light";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
