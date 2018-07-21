import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import Home from './Home/Home';
import Technologies from './Technologies/Technologies';
import styled from 'styled-components';

class App extends Component {
    render() {
        return (
            <Router>
                <StyledContainer>
                    <Navbar fluid style={{marginBottom: "0"}} inverse staticTop>
                        <Nav>
                            <NavItem componentClass={Link} href={`${process.env.PUBLIC_URL}/`} to={`${process.env.PUBLIC_URL}/`} >Home</NavItem>
                        </Nav>
                    </Navbar>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
                    </Switch>
                </StyledContainer>
            </Router>
        );
    }
}
const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export default App;