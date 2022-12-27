import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";
import selectTheme from "../../styles/themes";

interface ThemeContextData {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const storageTheme = JSON.parse(
      localStorage.getItem("theme")!
    );

    if (storageTheme && storageTheme === "dark") {
      return "dark";
    } else {
      return "light";
    }
  });

  const isDarkTheme = theme === "dark";

  function toggleTheme() {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <ThemeProvider theme={selectTheme(theme)}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  return context;
}
