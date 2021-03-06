import React, { Component } from "react"
import {connect} from "react-redux"
// import TimerOutput from "../../TimerOutput/TimerOutput"

let incrementor;

class  Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        count: 0
        }
        this.handleStart = this.handleStart.bind(this);
}
    getSeconds() {
        return ('0' + this.state.count % 60).slice(-2);
      }
    
      getMinutes() {
        return (Math.floor(this.state.count / 60));
      }

    handleStart =()=>{
        incrementor = setInterval(() => { 
            this.setState({ count: this.state.secondsElapsed + 1 }) 
          }
          , 1000);
    }

    handleStop() {
        clearInterval(incrementor);
       }

    render(){
            return(
                <div>
                    <h2>
                    { this.getMinutes() } : { this.getSeconds() }
                    </h2>
                    {/* <TimerOutput value= {this.state.tm}/> */}
                    <button onClick={ this.handleStart }>Start</button> 
                    <button onClick={ this.handleStop }>Stop</button>
                </div>
            )

    }
}


// const mapStateToProps = (state) => {
//     return {
//         tm: state.count
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onStartTimer: () => dispatch({type: "Start_TIMER"})
//     };
// };

export default connect()(Timer)