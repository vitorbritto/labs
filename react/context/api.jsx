// React.createContext
const MyContext = React.createContext(defaultValue);


// Context.Provider
<MyContext.Provider value={/* some value */} />



// Class.contextType
class MyClass extends React.Component {
    componentDidMount() {
        let value = this.context;
    }
    componentDidUpdate() {
        let value = this.context;        
    }
    componentWillUnmount() {
        let value = this.context;
    }

    render() {
        let value = this.context;
    }
}

MyClass.contextType = MyContext;



// Context.Consumer
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>


// Context.displayName


