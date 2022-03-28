import React, { Component } from 'react';
import { ThemeContext, themes } from './theme-context';
// import ThemedButton from './themed-button';
import ThemeTogglerButton from './theme-toggler-button';

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change theme
        </ThemedButton>
    );
}


class App extends Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        };
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <Content />
            </ThemeContext.Provider>
        );
    }
}

function Content() {
  return (
    <>
      <ThemeTogglerButton />
    </>
  );
}

ReactDOM.render(<App />, document.root);