import React, { Component } from 'react';

import Header from './Components/Header';
import './App.css';
import Social from './Components/Social';
import Text from './Components/Text';
import Team from './TeamComponent/Team';
import TeamHeader from './TeamComponent/TeamHeader';


  class App extends Component {
    render(){
        return (
          <div className="container">
            
            
            <div>
              <TeamHeader />
              <Team />
            </div>
            
            
          </div>
          
      );
   }
  }

export default App;
