import React from "react"

import {ThemeContextConsumer} from "./themeProvider"

function Button(){

        return (
            <ThemeContextConsumer>
                {context=>(
                    <button onClick= {context.toggleTheme} className= {`${context.theme}-button`}>Toggle button</button>
                )}
            </ThemeContextConsumer>
        )
}
export default Button