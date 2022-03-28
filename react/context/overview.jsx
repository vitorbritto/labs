// WITHOUT CONTEXT API
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

import React, { Component, createContext } from 'react';

class App extends Component {
    render() {
        return  <Toolbar theme="dark" />
    }
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function Toolbar(props) {
    return (
        <div>
            <ThemedButon theme={props.theme} />
        </div>
    );
}

class ThemedButton extends Component {
    render() {
        return <Button theme={this.props.theme}/>;
    }
}


// WITH CONTEXT API
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const ThemeContext = createContext('light');

class App extends Component {
    render() {
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

function Toolbar() {
    return  (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends Component {
    static contextType = ThemeContext;

    render() {
        return <Button theme={this.context} />;
    }
}


// Composition - Before use Context API
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

{/* 
    <Page user={user} avatarSize={avatarSize} />
    // ... which renders ...
    <PageLayout user={user} avatarSize={avatarSize} />
    // ... which renders ...
    <NavigationBar user={user} avatarSize={avatarSize} />
    // ... which renders ...
    <Link href={user.permalink}>
    <Avatar user={user} size={avatarSize} />
    </Link>
*/}

function Page(props) {
    const user = props.user;
    const userLink = (
        <Link href= {user.permalink}>
            <Avatar user={user} size={props.avatarSize} />
        </Link>
    );

    return <PageLayout userLink={userLink} />;
}

{/* 
    // Now, we have:
    <Page user={user} avatarSize={avatarSize} />
    // ... which renders ...
    <PageLayout userLink={...} />
    // ... which renders ...
    <NavigationBar userLink={...} />
    // ... which renders ...
    {props.userLink}
*/}

function Page(props) {
    const user = props.user;
    const size = props.avatarSize;
    const feedContent = <Feed user={user} />;
    const navigationBar = (
        <NavigationBar>
            <Link href={user.permalink}>
                <Avatar user={user} size={size} />
            </Link>
        </NavigationBar>
    ); 

    return (
        <PageLayout
            navigationBar={navigationBar}
            feedContent={feedContent}
        />
    );
}

{/* 
    // Now, we have:
    <Page user={user} size={size} />
*/}
