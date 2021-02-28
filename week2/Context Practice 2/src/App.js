import React from "react"
import MovieList from "./MovieList"
import MovieForm from "./movieForm"

function  App() {
    
    return(
       <div>
            <h1 id = "my-header">My Movies List</h1>
            <MovieForm/>
            <MovieList/>
        </div> 
    )
}

export default App