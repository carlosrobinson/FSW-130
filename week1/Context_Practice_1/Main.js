import React from 'react';
import {ThemeContextConsumer} from "./themeProvider"
import Button from "./Button"
function Main() {
        return (
            <ThemeContextConsumer>
                {context=> (
                    <main className= {`${context.theme}-main`}>
                        <h1>{context.theme === "default" ? "Default" : "Toggled"} Theme</h1>
                        <Button/>
                    </main>
                )}
            </ThemeContextConsumer>
        )
}
export default Main