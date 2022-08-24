import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Home from "./Home";
import Visualizations from "./Visualizations";
import ShowCase from './ShowCase';
import styled from "styled-components";


const MenuLinks = [
  { id: 'home', label: 'Home', href: `${process.env.PUBLIC_URL}/`, to: `${process.env.PUBLIC_URL}/`, component: Home },
  { id: 'vis', label: 'Visualizations', href: `${process.env.PUBLIC_URL}/vis`, to: `${process.env.PUBLIC_URL}/vis`, component: Visualizations },
  { id: 'showcase', shouldHide: true, label: 'Showcase', href: `${process.env.PUBLIC_URL}/showcase`, to: `${process.env.PUBLIC_URL}/showcase`, component: ShowCase }
];

const App = () => (
  <Router>
    <StyledContainer>
      <StyledNavBar fluid style={{ marginBottom: "0" }} inverse staticTop>
        <Nav>
          {MenuLinks.filter(({shouldHide}) => !shouldHide).map(({ id, label, href, to }) => <NavItem
            key={id}
            componentClass={Link}
            href={href}
            to={to}
          >
            {label}
          </NavItem>)}
        </Nav>
      </StyledNavBar>
      <Switch>
        {MenuLinks.map(({id, href, component}) => <Route key={id} exact path={href} component={component} />)}
      </Switch>
    </StyledContainer>
  </Router>
);

const StyledNavBar = styled(Navbar)`
  flex-direction: row;
`;

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export default App;
