import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import '../css/main.css';

import ActionModal from './ActionModal';
import Truth from './Truth';
import Dare from './Dare';
import Age from './Age';
import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends Component {
  state = {
    age: ''
  }
   handleClick() {
     document.getElementyById("truthDesc").style.display="block";
   }
   handleTruth() {
      axios.get('/api/actions/true/:age')
      .then(res => {
        this.setState({actions: res.data});
        console.log(this.state.actions[Math.round(Math.random() * this.state.actions.length)]);
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
   }

   handleDare() {
      axios.get('/api/actions/dare/:age')
      .then(res => {
        this.setState({actions: res.data});
        console.log(this.state.actions[Math.round(Math.random() * this.state.actions.length)]);
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });  
   }

   handleSelectAge = (age) => {
    this.setState({age: age});
   }
   render() {
      return(
         <div>
               <Age onSelectAge={ this.handleSelectAge } />
                  <div className="row"> 
                    <Truth age={this.state.range}/>
                    <Dare />
                  </div>
         </div>
      )
   }
}

export default Main;