import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar>
            <StyledBar name='bars' size='2x' />
            <ApplicationTitle>Me</ApplicationTitle>
        </NavBar>
        <Container>
            Something
        </Container>
      </div>
    );
  }
}
/* ------------- Styles ----------------*/

const ApplicationTitle = styled.div`
    font-size: 2.0em;
    
`;
const StyledBar = styled(FontAwesome)`
    margin: 10px;
    cursor: pointer; 
`;
const NavBar = styled.div`
    display: flex;
    min-height: 30px;
    text-align: left;
    background-color: #141414;
    color: white;
`;
const Container = styled.div`
    background: #0F2027;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    min-height: 100%;
`;

export default App;
