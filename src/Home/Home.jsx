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
      "Bachelors and Masters in Computer Science and with several years of experience in Software Development.",
    list: [
      "Sys-Admin assistant for the University",
      "Web & Big Data Application Development for the industries of Financial Services/Insurance",
      "Web applications for serving Big Data, widely used internaly by BNP Paribas",
      "Product development at Mixcloud"
    ]
  },
  {
    label: "Technologies",
    key: "tech",
    image: tech,
    text:
      "Having worked with Technology for more than 10 years, I've worked with quite some different environments and industries. See below what I've been using:",
    list: [
      "Frontend Frameworks - Angular, React, React Native, Vue",
      "Databases - DataStax, Redis, SQL Server, MariaDB",
      "Visualization libs for the Web - D3.js and Three.js",
      "App Development - Android and iOS",
      "ETL and setting up large scale environments - Hadoop",
      "Backend - Django and Node"
    ]
  },
  {
    label: "Current Work",
    key: "currWork",
    image: work,
    text:
      "Currently I work for Mixcloud as a Software Engineer. My responsabilities are to maintain/improve the existing codebase, to implement new features and to get them to the hands of our users. These are some of the challenges I face:",
    list: [
      "Moving Relay Classic to Relay Modern, upgrading out-of-date libs and code",
      "Moving the Angular mobile-web into React and with a Visual refresh while maintaning the best practices",
      "Integrating an app release schedule and make sure we deliver the roadmap in the agreed timelines",
      "Estimating and implementing new features/systems start-to-end, such as the Livestreams on the app"
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
