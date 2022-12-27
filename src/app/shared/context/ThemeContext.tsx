import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/themes/dark";
import { light } from "../../styles/themes/light";
import selectTheme from "../../../app/styles/themes/default/default";

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
      localStorage.getItem("@ignite-timer:theme-1.0.0")!
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
    localStorage.setItem("@ignite-timer:theme-1.0.0", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <ThemeProvider theme={selectTheme("dark")}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  return context;
}
