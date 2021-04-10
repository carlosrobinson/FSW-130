import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import {Provider} from "react-redux"
import store from "./redux/reducer"
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
<BrowserRouter>
  <Provider store= {store}>
    <App/>
  </Provider>, 
</BrowserRouter>,
  document.getElementById("root"))


