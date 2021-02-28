import React from 'react'
import {ThingsContextConsumer} from './ThingsContext'

function MyForm () {
  return (
    <ThingsContextConsumer>
      {context => (
        // <div  >
          <form id="my-form" onSubmit={context.sub}>

            <input onChange={context.change} type="text" name="thing" placeholder="Thing"/>

            <input onChange={context.change} type="text" name="title" placeholder="Title"/>


            <input onChange={context.change} type="text" name="url" placeholder="Image URL"/>

            <button id ="button">Submit</button>
          </form>
          // <br/>
        // </div>
      )}
      
    </ThingsContextConsumer>
      
  )
}

export default MyForm