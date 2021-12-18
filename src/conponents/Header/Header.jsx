    import React from 'react';
    import styles from './Header.module.css'
    import label from './img/label.svg'
    import imgWhite from './img/Vector.svg'
    import imgBlack from './img/VectorBlack.svg'
    import { useTheme, themeLight, themeDark } from '../../context/ThemeProvider';

    const Header = () => {
    const isTheme = useTheme()
    const [icon, setIcon] = React.useState('')
    const [themeDefault, setThemeDefaut] = React.useState('light')

    React.useEffect(() => {
        isTheme.change(themeDark)
    }, [])


    let colorRev = ''
    const toggleTheme = () => {
        if (themeDefault === 'dark') { 
            colorRev ='light'
            setThemeDefaut('light') 
            isTheme.change(themeDark)
        }
        else { 
            colorRev ='dark'
            setThemeDefaut('dark')
            isTheme.change(themeLight)
        }
        document.documentElement.style.setProperty('--theme-defaut-color', `var(--theme-${themeDefault}-color)`);
        document.documentElement.style.setProperty("--theme-defaut-color-r", `var(--theme-${colorRev}-color)` )
    }

    React.useEffect(() => {
        if (isTheme.theme === 'dark') {
            setIcon(imgWhite)
        } else {
            setIcon(imgBlack)
        }  
    }, [isTheme])

    return (
        <div className={styles.header__container}>
            <div><img className={styles.label} src={label} alt="" /></div>
            <div><img 
                onClick={() => toggleTheme()}
                className={styles.switch1} 
                src={icon} 
                alt=""
                title="Change theme" />
            </div>
        </div>
    );
};

export default Header;