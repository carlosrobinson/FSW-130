import React from 'react'
import { ThingsContextConsumer } from './ThingsContext'

function MyThings (props) {
  let count = 1
  return (
    <ThingsContextConsumer>
      {context => (
        <div id="my-things">          
            {context.data.map((item) => {
              count += 1
            //   console.log(count)
              return (
                <div id = "thing-2" key = {count}>
                  <h3>{item.thing}</h3>
                  <h3>{item.title}</h3>
                  <img style= {{width: '250px'}} src={item.url} alt="pic"/>
                  <br/>
                  <button className="del"  onClick={context.delete}>Delete</button>
                </div>
              )
            })}
        </div>      
      )}
    </ThingsContextConsumer>
  )
}

export default MyThings