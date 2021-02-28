import React, { Component } from "react"
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: "default"
    
    }
    toggleTheme = () => {
        this.setState(prevState =>{
            return {
                theme: prevState.theme === "toggled" ? "default" : "toggled"
            }
        })
    }
    render() {
        return (
            <Provider value= {{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}


export {ThemeContextProvider, Consumer as ThemeContextConsumer}