import React from "react";
import { Column, Row } from "components";
import styled from "styled-components";


export const TodaysWeather: React.FC = () => {
  return(
    <Column
    bg="secondary"
    >
      <Row alignItems="center" justifyContent="space-between">
        <h4>Today</h4>
        <div>Ter, 14 Jun</div>
      </Row>
      
      <Row alignItems="center" justifyContent="space-between">
        <h1>30ºC</h1>
      </Row>
    </Column>
  )
}
