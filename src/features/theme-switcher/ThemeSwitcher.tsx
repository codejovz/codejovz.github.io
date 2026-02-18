import { SvgInline } from 'react-svg-inliner';
import styles from './ThemeSwitcher.module.css';
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";
const STORAGE_KEY = "theme";

interface ThemeSwitcherProps {
  className?: string;
}

function applyThemeToBody(theme: Theme) {
  // remove previous theme classes
  document.body.classList.remove("theme-light", "theme-dark", "theme-system");

  if (theme === "light") {
    document.body.classList.add("theme-light");
  } else if (theme === "dark") {
    document.body.classList.add("theme-dark");
  } else {
    // system: apply the same classes as light/dark depending on OS preference
    const m = window.matchMedia("(prefers-color-scheme: dark)");
    if (m.matches) document.body.classList.add("theme-dark");
    else document.body.classList.add("theme-light");
  }
}

export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {

    const [theme, setTheme] = useState<Theme>(() => {
        try {
        const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
        if (stored === "light" || stored === "dark" || stored === "system") return stored as Theme;
        } catch (e) {
        // ignore
        }
        return "system";
    });

    useEffect(() => {
        // apply immediately
        applyThemeToBody(theme);

        // persist
        try {
        localStorage.setItem(STORAGE_KEY, theme);
        } catch (e) {
        // ignore
        }
        // If user selected 'system', listen to changes in OS preference and update classes
        let m: MediaQueryList | null = null;
        const onChange = () => {
        if (theme === "system") applyThemeToBody("system");
        };

        if (theme === "system") {
        m = window.matchMedia("(prefers-color-scheme: dark)");
        if (m.addEventListener) m.addEventListener("change", onChange);
        else if ((m as any).addListener) (m as any).addListener(onChange);
        }

        return () => {
        if (m) {
            if (m.removeEventListener) m.removeEventListener("change", onChange);
            else if ((m as any).removeListener) (m as any).removeListener(onChange);
        }
        };
    }, [theme]);


    return(
        <div
            className={`${styles["theme-switcher"]} ${className || ""}`}
            role="radiogroup" aria-label="Select theme"
        >
            <label>
                <input
                    type="radio"
                    name="theme"
                    value="light"
                    checked={theme === "system"}
                    onChange={() => setTheme("system")}
                />
                <SvgInline
                src="/icons/google/computer_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24.svg" 
                activeSrc="/icons/google/computer_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                active={theme === "system"}
                />
                <span className="sr-only">System mode</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="theme"
                    value="dark" 
                    checked={theme === "dark"}
                    onChange={() => setTheme("dark")} 
                />
                <SvgInline
                    src="/icons/google/mode_night_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24.svg"
                    activeSrc="/icons/google/mode_night_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                    active={theme === "dark"}
                />
                <span className="sr-only">Dark mode</span>
            </label>
            <label>
                <input
                    type="radio"
                    name="theme"
                    value="light"
                    checked={theme === "light"}
                    onChange={() => setTheme("light")}
                />
                <SvgInline
                    src="/icons/google/light_mode_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24.svg"
                    activeSrc="/icons/google/light_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                    active={theme === "light"}
                 />
                <span className="sr-only">Light mode</span>
            </label>
    </div>
    )
}