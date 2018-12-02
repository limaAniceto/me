import React from "react";

// This is a minor issue, take care of dynamically loading the images later.
import career from "./career.png";
import tech from "./tech.png";
import work from "./work.png";

import {
  Card,
  CardContent,
  CardText,
  Avatar,
  StyledImg,
  Container
} from "../styles/styles";
const cards = [
  {
    label: "Career",
    key: "career",
    image: career,
    text:
      "I've worked in the Financial and Insurance industry, currently I'm focused on pushing the music streaming industry at Mixcloud.",
    list: [
      "Unix environments management, as a Sys-Admin assistant for the University",
      "Web & Big Data Application Development for specific purposes in the Financial Services and Insurance industry, as Consultant for a Big4",
      "Web applications for serving Big Data, widely used internaly by BNP Paribas",
      "Developing software for Mixcloud - The company that is changing the paradigm of Radio and Music shows."
    ]
  },
  {
    label: "Technologies",
    key: "tech",
    image: tech,
    text:
      "Having worked with Technology for more than 10 years, I've worked with quite some different environments and industries. See below what I've been using:",
    list: [
      "Unix OS",
      "Web Frameworks - Angular and React (Only work with React at the moment)",
      "Databases - Mostly NoSQL databases (DataStax, Redis) and SQL Server",
      "Visualization Specific libs for the Web (2D and 3D)",
      "ETL and setting up large scale environments such as Hadoop"
    ]
  },
  {
    label: "Current Work",
    key: "currWork",
    image: work,
    text:
      "Currently I work for Mixcloud as a Javascript Engineer. In short I work as a Full Stack Software Engineer, using the following technologies - React, GraphQL, Relay, React Native. These are some of the challenges I face:",
    list: [
      "Moving Relay Classic to Relay Modern, upgrading out-of-date libs and code",
      "Demonstrating the best practices and implementing them.",
      "Achieving a more collaborative codebase for both designers and engineers"
    ]
  }
];

const Home = () => (
  <Container>
    {cards.map(card => {
      return (
        <Card key={card.key}>
          <CardContent>
            <Avatar>
              <StyledImg src={card.image} />
            </Avatar>
            <h2>{card.label}</h2>
            <CardText>{card.text}</CardText>
            {card.list && (
              <ul>
                {card.list.map((el, i) => {
                  return <li key={card.key + i}>{el}</li>;
                })}
              </ul>
            )}
          </CardContent>
        </Card>
      );
    })}
  </Container>
);

export default Home;
