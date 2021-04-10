import React from "react"
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <div id= "my-nav">
          <Link id="home" to= "/">Home</Link>
          <Link id="cars" to= "/cars">Cars</Link>
          <Link id="trucks" to= "/trucks">Trucks</Link>
        </div>
    )
}
