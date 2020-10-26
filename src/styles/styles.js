import styled from "styled-components";

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
    height: 600px;
    min-height: 600px
    max-height: 600px;
    min-width: 350px;
    max-width: 350px;
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
export { CardText, StyledImg, Avatar, CardContent, Card, Container };
