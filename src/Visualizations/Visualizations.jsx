import React, { Component } from "react";
import styled from "styled-components";

import D3Vis from "./D3Vis";
import ThreeVis from "./ThreeVis";

class Visualizations extends Component {
  render() {
    return (
      <Container>
        <Card key="vis-description" height={200}>
          <CardContent>
            <h2>Description</h2>
            <p>
              In this page you can find examples on how to integrate D3.JS and
              Three.js into a React App
            </p>
          </CardContent>
        </Card>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Card key="d3js">
            <CardContent>
              <h2>D3.JS</h2>
              <D3Vis />
            </CardContent>
          </Card>
          <Card key="threejs">
            <CardContent>
              <h2>Three.JS</h2>
              <ThreeVis />
            </CardContent>
          </Card>
        </div>
      </Container>
    );
  }
}

/* ----------------- Styles ----------------- */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: #fafafa;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  height: ${({ height }) => (height ? height : "550px")};
  max-height: 550px;
  width: 550px;
  max-width: 550px;
  width: 550px;
  margin: 10px;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
const StyledImg = styled.img`
  max-width: 60%;
`;
const CardText = styled.p`
  font-size: 1.2em;
`;

export default Visualizations;
