import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

import PropTypes from 'prop-types'; // ES6

export default class App extends React.Component{
  render(){
    return (
      <div>
        <TitleBar title = {this.props.title} subtitle = "Created by S.Brookes"/> {/* render h1 tag with title var as text send title */}
        { /* subtitle ='Created by S Brookes' */}
        <div className="wrapper">
          <PlayerList players = {this.props.players}/> {/*was {renderPlayers(players)} */}
          <AddPlayer/> {/* render add player */}
        </div>

      </div>
    );
  }

}

App.propTypes = { //defines the type sent to the class
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};

App.defaultProps = { //default if nothing sent to class
  //title: 'Default title'
};
