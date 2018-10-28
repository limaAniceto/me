import React from 'react';
import styled from 'styled-components';

// This is a minor issue, take care of dynamically loading the images later.
import career from './career.png';
import tech from './tech.png';
import work from './work.png';

const cards = [
    {
        label: 'Career',
        key: 'career',
        image: career,
        text: "Since I started studying I've been learning something new about technology every day.",
        list: ['Unix environments management, as a Sys-Admin assistant for the University',
            'Web & Big Data Application Development for specific purposes in the Financial Services and Insurance industry, as Consultant for a Big4',
            'Web applications for serving Big Data, widely used internaly by BNP Paribas'
        ],
    },
    {
        label: 'Technologies',
        key: 'tech',
        image: tech,
        text: "Software Engineers have a large array of tools available, see below what I've been using:",
        list: [
            "Unix Operating System - It can be Ubuntu, CentOs or any main distro, this is the OS where I do most of my work. ",
            "Web Frameworks - Angular and React (Only work with React at the moment)",
            "Databases - Mostly NoSQL databases (DataStax, Redis) and SQL Server"
        ]
    },
    {
        label: 'Current Work',
        key: 'currWork',
        image: work,
        text: "Currently I work for Mixcloud as a Javascript Engineer.",
        list: ['Technologies - React, GraphQL, Apollo, Node.JS, D3.JS, React Native',
            'Agile methodology with dailies featuring project sponsors, designer, data scientists and analysts',
            'MicroServices architurecture, more specifically backends for frontends',
            'Big data apps since each application serves large amounts of data']
    }];

const Home = () => (
    <Container>
        {
            cards.map(card => {
                return (
                    <Card key={card.key}>
                        <CardContent>
                            <Avatar>
                                <StyledImg src={card.image}></StyledImg>
                            </Avatar>
                            <h2>{card.label}</h2>
                            <CardText>{card.text}</CardText>
                            {card.list && <ul>
                                {card.list.map((el, i) => {
                                    return (
                                        <li key={card.key + i}>{el}</li>
                                    );
                                })}
                            </ul>
                            }
                        </CardContent>
                    </Card>
                );
            })
        }
    </Container>
);

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
    border-radius: 5px;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    min-height: 550px
    max-height: 550px;
    min-width: 300px;
    max-width: 300px;
    margin: 30px;
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
export default Home;