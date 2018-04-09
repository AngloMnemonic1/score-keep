import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(() => { //Meteor.startup(function(){
  Tracker.autorun(() => {  //Tracker.autorun(function(){
    //GET THE PLAYERS COLLECTION first {} emplty to get all records
    let players = Players.find({},{ sort: {score: -1} }).fetch(); // gets the mongo db players collection
    let positionedPlayers = calculatePlayerPositions(players);
    let title = 'Score keep';
    //let name = 'Steve'; <p>Hello {name}!</p>
    // render, call function renderPlayers with players collection

    ReactDOM.render(<App title = {title} players = {positionedPlayers}/>, document.getElementById('app'));
  });


});
//<button onClick ={() => {alert('deleted')}}>



//import someDefault, {greetUser, name} from './../imports/utils';
//console.log('Log from /client/main.js');
//console.log(greetUser());
//console.log(someDefault);

/*

Meteor.startup(() => { //Meteor.startup(function(){

  Tracker.autorun(() => {  //Tracker.autorun(function(){
    let players = Players.find().fetch(); // gets the mongo db players collection
    let title = 'Score keep';
    let name = 'Steve';
    // render, call function renderPlayers with players collection
    let  jsx = (
      <div>
        { render h1 tag with title var as text}
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>This is my second p.</p>
        {renderPlayers(players)}
        <form onSubmit = {handleSubmit}>
          <input type = "text" name ="playerName" placeholder = "Player name"/>
          <button>Add player</button>
        </form>
      </div> );
    ReactDOM.render(jsx, document.getElementById('app'));
  });



//setTimeout(function(){
//   console.log('Players list',Players.find().fetch());
//}, 1000);

//Tracker.autorun(function(){
//   console.log('Players list',Players.find().fetch());
//});

//const players = [
//{
//  _id:'1',
//  name: 'Lauren',
//  score: 99
//},
//{
  //_id:'2',
//  name: 'Cory',
//  score: -1
//},
{
  _id:'3',
  name: 'Steve',
  score: -12
}
];
*/
