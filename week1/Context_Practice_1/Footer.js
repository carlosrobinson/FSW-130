import React from 'react';
import {ThemeContextConsumer} from "./themeProvider"
function Footer() {
        return (
            <ThemeContextConsumer>
                {context=> (
                    <footer className= {`${context.theme}-footer`}>
                        <h1>@Carlos Robinson</h1>
                    </footer>

                )}
            </ThemeContextConsumer>
        )
}
export default Footer