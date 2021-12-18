export const changeCssVariables = (theme) => {
    const root = document.querySelector(':root')        

    console.log(root)
    console.log(theme)
    let colorRev = '';
    theme === 'light' ? colorRev = 'dark' : colorRev = 'light'
    root.style.setProperty("--theme-defaut-color", `var(--theme-${theme}-color)` )
    root.style.setProperty("--theme-defaut-color-r", `var(--theme-${colorRev}-color)` )


    // document.documentElement.style.setProperty('--theme-defaut-color', `var(--theme-${theme}-color)`);
    // document.documentElement.style.setProperty("--theme-defaut-color-r", `var(--theme-${colorReverce}-color)` )
}



// --theme-light-color: white;
// --theme-dark-color: black;