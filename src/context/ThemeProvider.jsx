import React from 'react'

export const themeLight = 'light';
export const themeDark = 'dark';

const ThemeContext = React.createContext()

export const ThemeProvider = ({children, ...props}) => {
    const [theme, setTheme] = React.useState('good!');

    const change = (name) => {
        setTheme(name);
    }

    return (
        <ThemeContext.Provider 
            value={{
                theme,
                change
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider;


export const useTheme = () => React.useContext(ThemeContext);