// find how to pass information to sibling components

import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Age extends Component {

   handleClick(e) {
      e.preventDefault();
      this.props.onSelectAge(e.target.id);
   }
   render() {
      return(
         <div className="age">
            <h1> Age Ranges </h1> 
            <Button id="0" ref="0" onClick={this.handleClick.bind(this)}> All Ages </Button>
            <Button id="10" onClick={this.handleClick.bind(this)}> 0-10 </Button>
            <Button id="18" onClick={this.handleClick.bind(this)}> 10-18 </Button>
            <Button id="21" onClick={this.handleClick.bind(this)}> 18-21 </Button>
            <Button id="22" onClick={this.handleClick.bind(this)}> 21+ </Button>
         </div>
      );
   }
}

export default Age; 