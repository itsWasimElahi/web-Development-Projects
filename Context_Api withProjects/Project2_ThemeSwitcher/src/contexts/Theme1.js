
// just another syntax to use context Hook
import { createContext, useContext } from "react";

// this way we can give default value to creatContext hook also
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// this is a custom Hook
export default function useTheme(){
    return useContext(ThemeContext)
}