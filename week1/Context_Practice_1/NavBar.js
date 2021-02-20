import React from 'react';
import {ThemeContextConsumer} from "./themeProvider"
function NavBar() {
        return (
            <ThemeContextConsumer>
                {context=> (
            <nav className= {`${context.theme}-nav`}>
                <a href= "Home">Home</a>
                <a href= "About">About</a>
                <a href= "Contact">Contact</a>
            </nav>
                )}
            </ThemeContextConsumer>
        )
}
export default NavBar