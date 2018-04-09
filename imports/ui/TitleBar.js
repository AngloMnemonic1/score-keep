import React from 'react';
import PropTypes from 'prop-types'; // ES6

export default class TitleBar extends React.Component{

  render(){
    return (
      // scss class called title-bar
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
  renderSubtitle(){
    if (this.props.subtitle){
      return (<h2 className="title-bar__subtitle">{this.props.subtitle}</h2>);
    }
  }

}

TitleBar.propTypes = { //defines the type sent to the TitleBar class
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

TitleBar.defaultProps = { //default if nothing sent to titlebar
  //title: 'Default title'
}
