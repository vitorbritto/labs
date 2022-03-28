import { ThemeContext } from './theme-context';

function ThemeTogglerButton() {
    return (
        <ThemeContext.Consumer>
            {
                ({theme, toggleTheme}) => (
                    <button
                        onClick={toggleTheme}
                        style={{backgroundColor: theme.background}}>
                        Toggle Theme
                    </button>
                )
            }
        </ThemeContext.Consumer>
    );
}

export default ThemeTogglerButton;