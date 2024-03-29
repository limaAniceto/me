import React from "react";
import styled from "styled-components";

import D3Vis from "./D3Vis";
import ThreeVis from "./ThreeVis";

const Visualizations = () => (
  <Container>
    <Card key="vis-description" width={950}>
      <CardContent>
        <h2>Description</h2>
        <CardText>
          The purpose of this page is aimed at developers, show-casing an easy-way to integrate D3/Three.js into a react-app.
        </CardText>
      </CardContent>
    </Card>

    <div style={{ display: "flex", flexDirection: "row" }}>
      <Card key="d3js" width={465}>
        <CardContent>
          <h2>D3.JS</h2>
          <D3Vis />
        </CardContent>
      </Card>
      <Card key="threejs" width={465}>
        <CardContent>
          <h2>Three.JS</h2>
          <ThreeVis />
        </CardContent>
      </Card>
    </div>
  </Container>
);

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
  height: ${({ height }) => (height ? height : "550px")}px;
  max-height: 550px;
  width: ${({width}) => width ? width : "550px" }px;
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
