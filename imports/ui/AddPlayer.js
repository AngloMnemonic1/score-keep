import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component{

  render(){
    return (//bind it to the addplayer
      <div className = "item">
        <form className ="form" onSubmit = {this.handleSubmit.bind(this)}>
          <input className = "form__input" type = "text" name ="playerName" placeholder = "Player name"/>
          <button className="button">Add player</button>
        </form>
      </div>
        );
  }

  handleSubmit(event){
    let playerName = event.target.playerName.value;
    event.preventDefault(); //stops full page refresh on click submit button


    if (playerName){
      event.target.playerName.value = ""; //clear form field
      //insert new player to collection
      Players.insert({
          name: playerName,
          score:0
        });
    }
  }

}
