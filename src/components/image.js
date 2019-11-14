import React, { Component } from 'react';
import styled from 'styled-components';


export default class Image extends Component {
 render(){
  return( <ImgComp src={this.props.source} alt={this.props.text} /> )
 }
}
         
         const ImgComp = styled.img`
	width: 200px;
	height: 200px;
`;