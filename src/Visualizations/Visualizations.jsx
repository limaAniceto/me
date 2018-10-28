import React, { Component} from 'react';
import styled from 'styled-components';

import D3Vis from './D3Vis';
import ThreeVis from './ThreeVis';

class Visualizations extends Component {

    render() {
        return (
            <Container>
            <Card key='d3js'>
                <CardContent>
                    <h2>D3.JS</h2>
                    <D3Vis/>
                </CardContent>
            </Card>
            <Card key='threejs'>
                <CardContent>
                    <h2>Three.JS</h2>
                    <ThreeVis/>
                </CardContent>
            </Card>
            </Container>
        );
    }
}

/* ----------------- Styles ----------------- */
const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Card = styled.div`
    background-color: #fafafa;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 50%;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    min-height: 550px
    max-height: 550px;
    min-width: 550px;
    max-width: 550px;
    margin: 10px;
    &:hover {
        box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
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
const Avatar = styled.div`
    background-color: white;
    border-radius: 50%;
    border: 3px solid grey;
    width: 140px;
    height: 140px;      
    justify-content: center;
    align-items: center;
    display: flex;
`;
const StyledImg = styled.img`
    max-width: 60%;
`;
const CardText = styled.p`
    font-size: 1.2em;
`;

export default Visualizations;