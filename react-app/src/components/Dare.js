import React,{ Component } from 'react';
import '../css/main.css';

import ActionModal from './ActionModal';

class Dare extends Component {
   render() {
      return(
         <div className="col container dare">
            <h1 className="label">
            Dare
            </h1>
            <p id="dareDesc">
            Do it
            </p>
            <ActionModal />
         </div>                    
      );
   }
}

export default Dare; 