import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

interface UseThemeResult {
    theme: Theme;

    toggleTheme(): void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme = Theme.LIGHT;

        if (theme === Theme.LIGHT) newTheme = Theme.DARK;
        else if (theme === Theme.DARK) newTheme = Theme.ORANGE;

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme: theme ?? Theme.LIGHT, toggleTheme };
}
