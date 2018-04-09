import React from 'react';
import {Players} from './../api/players';
import PropTypes from 'prop-types'; // ES6

export default class Player extends React.Component{
  render(){
    //return <h4>Player class</h4>;

    //need to use back ticks on this
    let itemClassName = `item item--position-${this.props.player.rank}`;
    return (
        <div key = {this.props.player._id} className={itemClassName}>
          <div className = "player">
            <div>
              <h3 className = "player__name">
                {this.props.player.name}
              </h3>
              <p className = "player__stats">
                {this.props.player.rank} place - {this.props.player.position} {this.props.player.score} point(s).
              </p>
            </div>
            <div className = "player__actions">
              <button className="button button--round" onClick ={() => Players.update(
                  {_id: this.props.player._id}, {$inc:{score: -1 }})
                }>-1
              </button>
              <button className = "button button--round" onClick ={() => Players.update(
                 {_id: this.props.player._id}, {$inc:{score: 1 }})
               }>+1
              </button>
              <button className = "button button--round" onClick ={() =>
                 Players.remove({_id: this.props.player._id})
               }>X
              </button>
            </div>
          </div>
        </div>
      );
  }

}

Player.propTypes = { //defines the type sent to the class
  player: PropTypes.object.isRequired
};

Player.defaultProps = { //default if nothing sent to class
  //title: 'Default title'
}
