import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps} from "./ThemeContext";

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState(( localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT) as Theme);

    const value = useMemo<ThemeContextProps>(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;