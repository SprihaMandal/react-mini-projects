import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"
import { CryptoScreen } from "./cryptoTracker/components/cryptoScreen";

export const CustomScreen = () => {

    const { isDark, themeText, toggleTheme } = useContext(ThemeContext);


    return (
        <div
            className={`w-screen h-screen ${isDark ? "bg-neutral-800 text-white" : "bg-white text-black"} flex flex-col items-center justify-center text-center`}
        >
            <h1>Hello World</h1>
            <h1>This is custom screen</h1>

            <button onClick={toggleTheme} className={`plain-button ${isDark ? "dark-button" : "light-button"}`}>{themeText}</button>





        </div>
    );
}