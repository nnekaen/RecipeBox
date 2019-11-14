import React, { Component } from 'react';
import styled from 'styled-components';



export default class Title extends Component {
 render(){
  return( <headers>{this.props.title}</headers> )
 }
}
         
         const headers = styled.p`
    text-align: center;
    color: orange;
    margin: 0;
    font-family: monospace;
    font-size: 5px;
    line-height: 32px;
`;