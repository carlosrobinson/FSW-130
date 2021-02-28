import React, {Component} from "react"


const {Provider, Consumer} = React.createContext()

class MovieContextProvider extends Component {
    constructor() {
        super()
        this.state= {
            movies: [
                { 
                    title: "Death Warrant", 
                    year: 1990,  
                    genres: "Action"
                },
                { 
                    title: "Deceptions", 
                    year: 1990, 
                    genres: "Drama"  
                },
                { 
                    title: "Decoration Day", 
                    year: 1990, 
                    genres: "Drama" 
                }, 
                {
                    title: "Def by Temptation", 
                    year: 1990, 
                    genres: "Horror" 
                },
                {
                    title: "Delta Force 2: The Colombian Connection", 
                    year: 1990, 
                    genres: "Action" 
                }, 
                {
                    title: "Denial", 
                    year: 1990, 
                    genres: "Drama" 
                }, 
                {
                    title: "Desperate Hours", 
                    year: 1990, 
                    genres: "Suspense"
                }
            ],
            title: "", 
            year: "", 
            genres: "",
            newMovies: []
        }
        this.handleMovie = this.handleMovie.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

handleMovie=(e)=> {
    e.preventDefault()
    const {name, value} = e.target
    this.setState({[name]:value})
    
}

handleSubmit =(e)=>{
    e.preventDefault()

    let  newMovies= {
        title: this.state.title,
        year: this.state.year,
        genres: this.state.genres
    }
    this.state.movies.push(newMovies)
    this.setState({
        
        title:"",
        year: "",
        genres: ""
    })

}


    render() {

        return(
            <Provider value= {{
                movies: this.state.movies,
                Submit: this.handleSubmit,
                change: this.handleMovie
                }}>
                {this.props.children}
            </Provider>
        )
    }
}



export  {MovieContextProvider, Consumer as MovieContextConsumer}