import React, { Component } from 'react';
import styled from 'styled-components';



export default class Popup extends React.Component {
  render() {
    return (
      <Popss className='popup'>
        <Pops className='popup_inner'>
          <p>{this.props.text}</p>
        <button onClick={this.props.closePopup}>close me</button>
        
        </Pops>
      </Popss>
    );
  }
}
       const Popss = styled.div`
	position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);`;

const Pops = styled.div`
position: absolute;
  left: 25%;
  right: 25%;
  overflow:scroll;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;`;