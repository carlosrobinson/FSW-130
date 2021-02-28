import React from 'react'
import MyThings from './components/MyThings'
import MyForm from './components/MyForm'


function App () {
   return (
      <div>
        <h1 id= "myHeader">My Ugly Things</h1>
        <MyForm/>
        <MyThings/>
      </div>
    );
}

export default App;
