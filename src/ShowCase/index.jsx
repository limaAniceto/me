import React, { Component } from "react";
import styled from "styled-components";

import ShowCaseVis from "./ShowCaseVis";

const ShowCase = () => <Container>
    <div style={{ display: "flex", flexDirection: "row" }}>
        <ShowCaseVis />
    </div>
</Container>


/* ----------------- Styles ----------------- */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ShowCase;
