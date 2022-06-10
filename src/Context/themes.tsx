import { createContext, ReactNode, useContext, useState } from "react";

interface IThemeContextData {
  theme: string;
  setTheme: any;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

interface IThemeProviderProps {
  children: ReactNode;
}

export function ThemeContextProvider({
  children,
}: IThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
