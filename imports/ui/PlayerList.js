import React from 'react';
import PropTypes from 'prop-types'; // ES6
import Player from './../ui/Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component{

  render(){
    return (
//maintainContainerHeight keeps height of container until animation complete
        <div>
          <FlipMove maintainContainerHeight={true}>
            {this.renderPlayers()}
          </FlipMove>
        </div>
    );
  }

  renderPlayers(){
    if (this.props.players.length == 0){
      return (
        <div className="item">
          <p className ="item__message item__message--empty">Please add player.</p>
        </div>
      );
    }else{
      return this.props.players.map( (player) => {
        return <Player key = {player._id} player = {player}/>;
      });
    }
  }
}


PlayerList.propTypes = { //defines the type sent to the class
  players: PropTypes.array.isRequired
};

Player.defaultProps = { //default if nothing sent to class
  //title: 'Default title'
}



/*
const renderPlayers = (playersList) => {
  //let numbers = [{val:9},{val:2},{val:3},{val:101}];
  //return playersList.map(function (player){ //go through each item in player collection
    //return number.val -1;
    //return <p key = {player._id}> {player.name} has {player.score} point(s).</p>
    return playersList.map( (player) => {
      return <Player key = {player._id} player = {player}/>;
    });
  //console.log(newNumbers);
  //return [<p key="1">1</p>,<p key ="2">2</p>,<p key ="3">3</p>];
};
*/
