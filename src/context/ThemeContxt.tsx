import { createContext, useContext, useState } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
    
export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.DARK,
    setTheme: () => {},
});

export const ThemeProvider = ({ children }: any) => {

    const [theme, setTheme] = useState(Theme.DARK);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}