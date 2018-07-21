import React, {Component} from 'react';
import styled from 'styled-components';

// This is a minor issue, take care of dynamically loading the images later.
import career from './career.png';
import tech from './tech.png';
import work from './work.png';

class Home extends Component {
    render() {
        // if this was a real app, we would inject this using a HOC with apollo and communicating to the backend with graphql.
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
                text: "Currently I work for BNP Paribas, developing Web applications (frontend/backend).",
                list: ['Technologies - React, GraphQL, Apollo, Node.JS',
                    'Agile methodology with dailies featuring project sponsors, designer, data scientists and analysts',
                    'MicroServices architurecture, more specifically backends for frontends',
                    'Big data applications since each app must be accessible to every BNP employee and also serve large amounts of data']
            }];

        return (
            <Container>
                {
                    cards.map(card => {
                        return (
                            <Card key={card.key}>
                                <CardContent>
                                    <Avatar>
                                        <StyledImg src={card.image}></StyledImg>
                                    </Avatar>
                                    <CardTitle>{card.label}</CardTitle>
                                    <CardText>{card.text}</CardText>
                                    {card.list && <ul>
                                        {card.list.map(el => {
                                            return (
                                                <li>{el}</li>
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
    }
}

/* ----------------- Styles ----------------- */
const Container = styled.div`
    flex: 1;
    background: #bdc3c7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Card = styled.div`
    background-color: #fafafa;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    min-height: 500px
    max-height: 700px;
    min-width: 400px;
    max-width: 400px;
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
     width: 200px;
height: 200px;      
    justify-content: center;
    align-items: center;
    display: flex;
`;
const StyledImg = styled.img`
    max-width: 60%;
`;
const CardTitle = styled.h2`
    
`;
const CardText = styled.p`
    font-size: 1.2em;
`;
export default Home;