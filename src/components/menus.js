import React, { Component } from 'react';
import styled from 'styled-components';



export default class Popups extends React.Component {
  render() {
    return (
      <popss className='popup'>
        <pops className='popup_inner'>
          <p>{this.props.texts}</p>
        <button onClick={this.props.closePopups}>close me</button>
        
        </pops>
      </popss>
    );
  }
}
       const popss = styled.div`
	position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);`;

const pops = styled.div`
position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;`;