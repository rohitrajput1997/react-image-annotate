// @flow

import React from "react"
import ReactDOM from "react-dom"
import DemoSite from "./DemoSite"
import "./site.css"
import Theme from "./Theme"

const Site = () => {
  return <Theme>{<DemoSite />}</Theme>
}

ReactDOM.render(<Site />, document.getElementById("root"))
