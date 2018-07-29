import React, { Component } from 'react';
import '../css/main.css';

class Truth extends Component {
   constructor() {
      super();
   }

   componentDidMount() {
      console.log(this.props.age);
   }
   render() {
      return(
         <div className="col container truth">        
            <h1 className="label">
            Truth
            </h1> 
            <p id="truthDesc"> 
            Your darkest secrets
            </p>
         </div>
      );
   }
}

export default Truth;