import React from "react";
import { Container, Row } from "./styles";

export const TodaysWeather: React.FC = () => {
  return(
    <Container>
      <Row>
        <h4>Today</h4>
        <div>Ter, 14 Jun</div>
      </Row>

      <Row mt='20px'>
        <h1>30ºC</h1>
      </Row>
    </Container>
  )
}
