import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Home from "./Home/Home";
import Technologies from "./Technologies/Technologies";
import Visualizations from "./Visualizations/Visualizations";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Router>
        <StyledContainer>
          <StyledNavBar fluid style={{ marginBottom: "0" }} inverse staticTop>
            <Nav>
              <NavItem
                componentClass={Link}
                href={`${process.env.PUBLIC_URL}/`}
                to={`${process.env.PUBLIC_URL}/`}
              >
                Home
              </NavItem>
              {/* <NavItem
                componentClass={Link}
                href={`${process.env.PUBLIC_URL}/vis`}
                to={`${process.env.PUBLIC_URL}/vis`}
              >
                Visualizations
              </NavItem> */}
            </Nav>
          </StyledNavBar>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/vis`}
              component={Visualizations}
            />
          </Switch>
        </StyledContainer>
      </Router>
    );
  }
}
const StyledNavBar = styled(Navbar)`
  flex-direction: row;
`;

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export default App;
