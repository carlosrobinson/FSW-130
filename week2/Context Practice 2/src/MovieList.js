import React from "react"
// import Card from "./Card"
// import Card from "./Card"
import {MovieContextConsumer} from "./MovieContext" 
function MovieList() {
  let count = 0
        return(
            <div>

                <MovieContextConsumer>
                   {context =>(
                       <div>

                           {context.movies.map((movie)=> {
                               count += 1
                               return(
                                        <div  id="my-Items" key={count}>
                                            <h3>{movie.title}</h3>
                                            <h3>{movie.year}</h3>
                                            <h3>{movie.genres}</h3>
                                            <br/>
                                            <hr/>
                                        </div>
                               )
                            })}
                       </div>
                   )}
                </MovieContextConsumer>
            </div>
            
        )

    
}


export default MovieList