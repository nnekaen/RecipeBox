import React, { Component } from 'react';
import axios from 'axios';
import Logoseafood from './seafood.jpg';
import Logobeef from './beef.png';
import Recipe from './components/Recipe';
import Popup from './components/menu';
import Popups from './components/menus';
import './App.css';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  
    constructor(props) {
    super(props);
    this.state = {
      seafood: "",
        latest:{},
        chicken:"",
        popup:true,
        popupchicken:false
    }
  }    
    
    componentDidMounts(){
      this.setState({
     popupchicken: !this.state.popupchicken   
        
    });
    const URLS= 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef';
     axios.get(URLS)
      .then(res => {
        const chicken = res.data.meals; //Taking just the required data
        if(typeof chicken === 'object'){
          this.setState({ chicken });// setting it to state of our app
        }
      })
      .catch(error => {
        console.log(error);
      });
}
    
componentDidMount(){
    this.setState({
     popup: !this.state.popup   
        
    });
    const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood';    
    axios.get(URL)
      .then(res => {
        const seafood = res.data.meals; //Taking just the required data
        if(typeof seafood === 'object'){
          this.setState({ seafood });// setting it to state of our app
        }
      })
     const URLss = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';    
    axios.get(URLss)
      .then(res => {
        const latest = res.data.meals; //Taking just the required data
        if(typeof latest === 'object'){
          this.setState({ latest });// setting it to state of our app
        }
      })
      
      .catch(error => {
        console.log(error);
      });
}

render() {
   var data = this.state.seafood;
    var datas = this.state.chicken;
    var datass = this.state.latest;
    return (
              
      <AppContainer className="App">
        <div class="sea">
         <img alt="" class="imgsrc" src={Logoseafood}/>
        <button onClick={this.componentDidMount.bind(this)}>SeaFood list</button>
        {this.state.popup  ? 
          <Popup
            text={data.length > 0 && <Recipe meals={data} />}
            closePopup={this.componentDidMount.bind(this)}
          />
          : null
        }
     </div>
<div class="sea">
         <img alt="" class="imgsrc" src={Logobeef}/>
        <button onClick={this.componentDidMounts.bind(this)}>Beefing list</button>
        {this.state.popupchicken  ? 
          <Popups
            texts={datas.length > 0 && <Recipe meals={datas} />}
            closePopups={this.componentDidMounts.bind(this)}
          />
          : null
        }
     </div>


<section id="latestmenu">
    <div class="latestmenu">
 <h2 class="latest_heading">Our Latest List</h2>
         {datass.length > 0 && <Recipe meals={datass} />}
       </div>
          </section>
      </AppContainer>
    );
  }
}
const AppContainer = styled.div`
  background: #fff;
  padding: 0em;
`;
export default App;