import * as ReactDom from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import * as React from "react"

var appElement = document.getElementById("app")

ReactDom.render(
<BrowserRouter>
  <App/>
</BrowserRouter>, 
appElement)