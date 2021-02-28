import React from 'react';
const { Provider, Consumer } = React.createContext();


class ThingsContextProvider extends React.Component {
  constructor() {
    super()
    this.state = {
        data : [{
                thing: "Fish",
                title : "Blob Fish",
                url: "https://static.ffx.io/images/$zoom_0.182%2C$multiply_0.9669%2C$ratio_1.776846%2C$width_1059%2C$x_0%2C$y_136/t_crop_custom/q_86%2Cf_auto/ff14210e2f701cf9c403d8c8c70291cfddb557f3"
            },
            {
                thing: "Ugly Heels",
                title : " Alexander McQueen armadillo",
                url: "https://i.pinimg.com/564x/ae/d9/78/aed9788e93797996881b1842601c02e0.jpg"
            },
            {
                thing: "Painting",
                title : "The Ugly Duchess by Quentin Matsys",
                url: "https://melrhein.files.wordpress.com/2013/02/massys_quentin-the_ugly_duchess.jpg"
            }],
            thing: "",
            title : "",
            url: ""
            }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };
  //handleDelete DOM Manipulation style, I tried to do it with .filter() but cannot access parentNode.id from this array as the id is being given in a different file.
  handleDelete(e) {
    let deleteBtn = document.getElementsByClassName("del")
    console.log(deleteBtn)
    for (var i = 0; i < deleteBtn.length; i++) {
      if (e.target === deleteBtn[i]) {
        let x = deleteBtn[i].parentNode
        let y = x.parentNode
        y.removeChild(x)
      }
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let newThing = {
        thing: this.state.thing,
        title: this.state.title,
      url: this.state.url
    }
    this.state.data.push(newThing)
    this.setState({
      thing: "",
      title: "",
      url: ""
    })
  }

  render() {
    const things = this.state.data
    return (
      <Provider value={{ data: things, delete: this.handleDelete, sub: this.handleSubmit, change: this.handleChange }} >
        { this.props.children}
      </Provider>
    )
  }
}

export { ThingsContextProvider, Consumer as ThingsContextConsumer };