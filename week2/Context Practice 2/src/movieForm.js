import React from "react"
import {MovieContextConsumer} from "./MovieContext" 
//import Button from "./Button"
function MovieForm() {
    return(
        
            <MovieContextConsumer>
                {context=>(
                <form id="my-form" onSubmit= {context.Submit}>
                    <div>
                        
                    <input
                    type= "text"
                    name="title"
                    onChange={context.change}
                    placeholder= "title"/>
                       
                    
                    </div>
                    <input 
                    type= "number"
                    name="year"
                    onChange={context.change}
                    placeholder= "year">
                    
                    </input>
                    <input 
                    type= "text"
                    name="genres"
                    onChange={context.change}
                    placeholder= "genres">
                    
                    </input>

                    <button >Submit</button>
                </form>

                )}
            </MovieContextConsumer>
        
    )
}

export default MovieForm