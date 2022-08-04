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
      "Sys-Admin assistant at University, maintaining Server Rooms",
      "Web & Big Data Application Development for the industries of Financial Services at Deloitte Analytics Group",
      "Web applications for visualizing/assisting investment bankers, widely used internaly by BNP Paribas.",
      "Software Product development at Mixcloud, on one of the largest Music Streaming platforms worldwide where 25 million users upload 2 hours of content, every 3 minutes."
    ]
  },
  {
    label: "Technologies",
    key: "tech",
    image: tech,
    text:
      "With more than 10 years of experience, I've used different tools depending on the job. See below what I've been using:",
    list: [
      "Frontend Frameworks - Angular, React, React Native, Vue",
      "Backend development - Python, Django, Node",
      "Databases - DataStax, Redis, SQL Server, MariaDB, MongoDB",
      "Visualization libs for the Web - D3.js and Three.js",
      "App Development - React Native, Android and iOS",
      "ETL and setting up large scale environments - Hadoop",
    ]
  },
  {
    label: "Recent Work",
    key: "currWork",
    image: work,
    text:
      "In my previous role at Mixcloud these were some of the challenges I faced:",
    list: [
      "Moving Relay Classic to Relay Modern, upgrading out-of-date libs and code",
      "Moving the Angular mobile-web into React and with a Visual refresh while maintaning the best practices",
      "Integrating an app release schedule and make sure we deliver the roadmap in the agreed timelines",
      "Estimating and implementing new features/systems start-to-end on different platforms, such as the Livestreams on the app",
      "Development of payments in the backend/frontend and removing legacy payment systems",
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
