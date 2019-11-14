import React, { Component } from 'react';
import Title from './title';
import Image from './image';
import styled from 'styled-components';


export default class Recipe extends Component {
 render(){
  return(
          <div>
            {this.props.meals.map((item, index) => {
              return (
                <Card 
                  key={index} 
                  href={item.strSource}>
                  <Image source={item.strMealThumb} text={item.strMeal} />
                  <Title title={item.strMeal} />
                </Card> 
              )
          })}
         </div>
  )
 }
}
const Card = styled.a`
	max-width: 200px;
font-size: 13px;
	width: 70%;
	display: inline-block;
	border-radius: 3px;
	text-decoration: none;
	color: #000;
	margin: 0 10px 15px;
    box-shadow: 7px 7px 50px -10px rgba(0, 0, 0, .5);
`;