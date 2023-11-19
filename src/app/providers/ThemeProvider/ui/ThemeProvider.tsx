import React, { FC, useMemo, useState } from 'react';

import {
    LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps,
} from '../lib/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;

    const [theme, setTheme] = useState(
        (initialTheme || localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT) as Theme,
    );

    const value = useMemo<ThemeContextProps>(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
